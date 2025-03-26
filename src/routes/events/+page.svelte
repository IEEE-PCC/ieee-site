<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import Calendar from '$lib/Calendar.svelte';
	import type { Event } from '$lib/Calendar.svelte';
	import { onMount } from 'svelte';

	let eventsData: Event[] = $state([]);

	onMount(async () => {
		let response = await fetch(base + '/api/events.json');
		eventsData = await response.json();
	});
</script>

<Navbar page="Events" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Events</p>
	{/snippet}
	{#snippet description()}
		<p>Events for all IEEE members to participate and enjoy!</p>
	{/snippet}
</HeroHeader>

<div class="min-h-screen p-6">
	<div class="mb-6 items-center justify-center">
		<h1 class="border-b-4 border-blue-500 pb-2 text-center text-6xl font-bold">UPCOMING EVENTS</h1>
	</div>

	<div class="overflow-x-auto pb-8">
		<table class="mx-auto table-auto border-collapse text-left">
			<thead>
				<tr class="bg-gray-300 dark:bg-gray-700">
					<th class="px-4 py-2 text-lg font-semibold">Event Name</th>
					<th class="px-4 py-2 text-lg font-semibold">Date</th>
					<th class="px-4 py-2 text-lg font-semibold">Location</th>
				</tr>
			</thead>
			<tbody>
				{#each eventsData as event}
					<tr class="border-b dark:border-gray-600">
						<td class="px-4 py-2">{event.title}</td>
						<td class="px-4 py-2">{event.date}</td>
						<td class="px-4 py-2">
							{#if event.location.startsWith('http')}
								<a
									href={event.location}
									target="_blank"
									class="text-blue-600 underline dark:text-blue-400"
								>
									View Map
								</a>
							{:else}
								<p>{event.location}</p>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<Calendar events={eventsData} />
</div>
