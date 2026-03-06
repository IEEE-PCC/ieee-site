<script lang="ts">
	import { ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { EventData } from '$lib/types';

	interface Props {
		events: EventData[];
	}

	let { events }: Props = $props();
	let currentMonth: number = $state(new Date().getMonth());
	let currentYear: number = $state(new Date().getFullYear());
	let currentDay: number = $state(new Date().getDate());
	let showModal: boolean = $state(false);
	let eventModal: EventData = $state({ date: '', title: '', location: '' });

	const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

	function eventsForDay(index: number): EventData[] {
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
	<h2 class="mb-6 border-b-4 border-blue-500 pb-2 text-2xl font-bold sm:text-4xl dark:text-white">
		{monthYear}
	</h2>
	<div class="w-full max-w-5xl rounded border-4 border-blue-500 p-2 sm:p-4 dark:text-white">
		<div
			class="mb-2 grid grid-cols-7 text-center text-xs font-bold text-black sm:text-base dark:text-white"
		>
			{#each daysFull as day, i}
				<div>
					<span class="hidden sm:inline">{day}</span>
					<span class="sm:hidden">{daysShort[i]}</span>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-7 divide-x divide-y divide-gray-300 border border-gray-400">
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(42) as _, i}
				<!-- Create 42 grid cells for a full month -->
				<div class="relative h-14 w-full sm:h-24 dark:border-gray-600">
					{#if isValidDay(i)}
						<button
							class="absolute top-0 h-5 w-5 overflow-auto rounded-full text-xs text-black sm:h-7 sm:w-7 sm:text-base dark:text-white {currentDay ===
								dayForIndex(i) && currentMonth === new Date().getMonth()
								? 'bg-red-500 dark:bg-red-600'
								: 'bg-blue-500 dark:bg-blue-600'}"
						>
							{dayForIndex(i)}
						</button>
						<div class="absolute bottom-0 left-0 w-full p-0.5 sm:p-1">
							{#each eventsForDay(i) as event}
								<button
									class="mt-0.5 inline-block w-full max-w-full overflow-hidden bg-blue-500 px-1 py-0 text-xs text-ellipsis whitespace-nowrap text-white sm:mt-1 sm:px-2 sm:text-sm dark:bg-blue-600"
									onclick={() => {
										eventModal = event;
										showModal = true;
									}}
								>
									{event.title}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<footer class="mt-4 flex justify-between text-lg font-bold">
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
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<button
			class="absolute inset-0 bg-black opacity-50"
			onclick={() => (showModal = false)}
			aria-label="Close modal"
		></button>
		<div class="relative w-full max-w-sm rounded-lg bg-white p-4 dark:bg-gray-900 dark:text-white">
			<p class="font-bold">{eventModal.title}</p>
			{#if /^https?:\/\/\S+$/i.test(eventModal.location)}
				<a
					href={eventModal.location}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-blue-600 underline"
				>
					{eventModal.location.length > 30
						? eventModal.location.slice(0, 27) + '...'
						: eventModal.location}
				</a>
			{:else}
				<p class="text-sm">{eventModal.location}</p>
			{/if}
			<p class="text-xs text-gray-500">{eventModal.date}</p>
			<button
				class="mt-4 rounded bg-blue-500 px-4 py-2 text-white dark:bg-blue-600"
				onclick={() => (showModal = false)}>Close</button
			>
		</div>
	</div>
{/if}
