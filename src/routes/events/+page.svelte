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
		<p>Content</p>
	{/snippet}
	{#snippet description()}
		<p>Lorem Ipsum yada yada yada</p>
	{/snippet}
</HeroHeader>

<!-- Full-page container -->
<div class="flex min-h-screen flex-col items-center justify-center p-4">
	<h1 class="mb-6 border-b-4 border-blue-500 pb-2 pl-6 text-6xl ">
		UPCOMING EVENTS
	</h1>
	<!-- Month Title -->
	<table class="table-fixed text-black">
		<tbody>
			<tr>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">Event Name</p>
					</div>
					PCC Student Meeting
				</td>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025</td
				>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College</td
				>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">EVENT NAME</p>
					</div>
					PCC Student Meeting</td
				>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025</td
				>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College</td
				>
			</tr>
			<tr>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">Event Name</p>
					</div>
					PCC Student Meeting</td
				>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025</td
				>
				<td>
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College</td
				>
			</tr>
		</tbody>
	</table>
	<Calendar events={eventsData} />
</div>
