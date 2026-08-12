<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import Calendar from '$lib/Calendar.svelte';
	import EventHighlight from '$lib/EventHighlight.svelte';

	let { data } = $props();
	let eventsData = $derived(data.events);
</script>

<Navbar page="Events" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Events</p>
	{/snippet}
	{#snippet description()}
		<p>Events for all students to participate and enjoy!</p>
	{/snippet}
</HeroHeader>

<div class="min-h-screen p-6">
	<div class="mb-6 items-center justify-center">
		<h1 class="border-b-4 border-blue-500 pb-2 text-center text-6xl font-bold">UPCOMING EVENTS</h1>
	</div>

	<EventHighlight {eventsData} />

	<Calendar events={eventsData} />
</div>
