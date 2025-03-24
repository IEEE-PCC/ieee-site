<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import Calendar from '$lib/Calendar.svelte';
	import type { Event } from '$lib/Calendar.svelte';
	import { onMount } from 'svelte';

	let eventsData: Event[] = [];

	onMount(async () => {
		let response = await fetch(base + '/api/events');
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

<div class="flex min-h-screen flex-col items-center justify-center p-4">
	<h1 class="px-45 relative mb-6 flex items-center text-left text-6xl font-semibold w-full">
		<span class="whitespace-nowrap">UPCOMING EVENTS</span>
		<span class="ml-6 flex-1 border-t-4 border-blue-500 relative top-1"></span>
	</h1>

	<table class="table-fixed">
		<tbody>
			{#each eventsData as event}
				<tr>
					<td class = "w-1/2 px-6 pr-16 py-5">
						<div class="flex items-center gap-2">
							<i class="fas fa-globe text-xl text-blue-500"></i>
							<p class="text-lg font-semibold">Event Name</p>
						</div>
						{event.title}
					</td>
					<td>
						<div class="flex items-center gap-2">
							<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
							<p class="text-lg font-semibold">DATE</p>
						</div>
						{event.date}
					</td>
					<td>
						<div class="flex items-center gap-2">
							<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
							<p class="text-lg font-semibold">LOCATION</p>
						</div>
						{#if event.location.startsWith("http")}
							<a href="{event.location}" target="_blank" class="text-blue-600 underline">
								View Map
							</a>
						{:else}
							{event.location}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	
	<Calendar events={eventsData} />
</div>
