<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unused-vars */
	import { ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';

	export interface Event {
		date: string;
		title: string;
		location: string;
	}

	interface Props {
		events: Event[];
	}

	let { events }: Props = $props();
	let currentMonth: number = $state(new Date().getMonth());
	let currentYear: number = $state(new Date().getFullYear());
	let currentDay: number = $state(new Date().getDate());
	let showModal: boolean = $state(false);
	let eventModal: Event = $state({ date: '', title: '', location: '' });

	const monthYear = $derived(
		new Date(currentYear, currentMonth).toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric'
		})
	);
	function isValidDay(index: number): boolean {
		const startDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay();
		const totalDays = daysInMonth(currentMonth);
		const dayNumber = index - startDay + 1;
		return dayNumber > 0 && dayNumber <= totalDays;
	}

	function dayForIndex(index: number): number {
		const startDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay();
		return index - startDay + 1;
	}

	function daysInMonth(month: number): number {
		return new Date(new Date().getFullYear(), month + 1, 0).getDate();
	}

	function eventsForDay(index: number): Event[] {
		const day = dayForIndex(index);
		const dateStr = new Date(new Date().getFullYear(), currentMonth, day)
			.toISOString()
			.split('T')[0];
		return events.filter((event) => event.date === dateStr);
	}

	function changeMonth(offset: number) {
		currentMonth += offset;
		if (currentMonth > 11) {
			currentMonth = 0; // Wrap to January
		} else if (currentMonth < 0) {
			currentMonth = 11; // Wrap to December
		}
	}
</script>

<main class="flex flex-col items-center justify-center">
	<h2 class="mb-6 border-b-4 border-blue-500 pb-2 text-4xl font-bold">{monthYear}</h2>
	<div class="w-full max-w-5xl rounded border-4 border-blue-500 bg-white p-4">
		<div class="dark mb-2 grid grid-cols-7 text-center font-bold text-black">
			{#each ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as day}
				<div>{day}</div>
			{/each}
		</div>

		<div class="grid grid-cols-7 divide-x divide-y divide-gray-300 border border-gray-400">
			{#each Array(42) as _, i}
				<!-- Create 42 grid cells for a full month -->
				<div class="relative h-24 w-full">
					{#if isValidDay(i)}
						<button
							class="absolute top-0 h-7 w-7 overflow-auto rounded-full text-black {currentDay ===
								dayForIndex(i) && currentMonth === new Date().getMonth()
								? 'bg-red-500'
								: 'bg-blue-500'}"
						>
							{dayForIndex(i)}
						</button>
						<div class="absolute bottom-0 left-0 w-full p-1">
							{#each eventsForDay(i) as event}

								<Tooltip
									triggerClasses="w-full max-w-full rounded-sm text-white overflow-hidden whitespace-nowrap text-ellipsis inline-block"
									positioning={{ placement: 'top' }}
									contentBase="card preset-filled p-4"
									openDelay={200}
									arrow
								>
									{#snippet trigger()}
										<button
											class="mt-1 inline-block w-full max-w-full overflow-hidden bg-blue-500 px-2 py-0 text-sm text-ellipsis whitespace-nowrap text-white"
											onclick={() => { eventModal = event; showModal = true; }}
										>
											{event.title}
										</button>
									{/snippet}
									{#snippet content()}
										<div class="p-2">
											<p class="font-bold">{event.title}</p>
											{#if /^https?:\/\/\S+$/i.test(event.location)}
												<a href="{event.location}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 underline">
													{event.location.length > 30 ? event.location.slice(0, 27) + '...' : event.location}
												</a>
											{:else}
												<p class="text-sm">{event.location}</p>
											{/if}
											<p class="text-xs text-gray-500">{event.date}</p>
										</div>
									{/snippet}
								</Tooltip>

							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<footer class="mt-4 flex justify-between text-lg font-bold text-black">
			<button onclick={() => changeMonth(-1)}>
				<ArrowLeftOutline />
			</button>
			<button onclick={() => changeMonth(1)}>
				<ArrowRightOutline />
			</button>
		</footer>
	</div>
</main>

{#if showModal}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="absolute inset-0 bg-black opacity-50"></div>
		<div class="relative bg-white rounded-lg p-4 w-96">
			<p class="font-bold">{eventModal.title}</p>
			{#if /^https?:\/\/\S+$/i.test(eventModal.location)}
				<a href="{eventModal.location}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 underline">
					{eventModal.location.length > 30 ? eventModal.location.slice(0, 27) + '...' : eventModal.location}
				</a>
			{:else}
				<p class="text-sm">{eventModal.location}</p>
			{/if}
			<p class="text-xs text-gray-500">{eventModal.date}</p>
			<button class="mt-4 bg-blue-500 text-white rounded px-4 py-2" onclick={() => showModal = false}>Close</button>
		</div>
	</div>
{/if}
