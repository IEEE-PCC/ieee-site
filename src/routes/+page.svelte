<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { onMount } from 'svelte';
	import EventHighlight from '$lib/EventHighlight.svelte';

	let records = [];
	let displayedRecords: Event[] = [];
	let currentIndex = 0;
	const increment = 3;

	onMount(async () => {
		const response = await fetch(base + '/api/events');
		records = await response.json();
		displayedRecords = records.slice(0, 3); // Select the top three events
	});

	// Function to load more events
	function loadMore() {
		const nextIndex = currentIndex + increment;
		displayedRecords = [...displayedRecords, ...records.slice(currentIndex, nextIndex)];
		currentIndex = nextIndex;
	}
</script>

<Navbar page="Home" />

<div class="mb-40">
	<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
		{#snippet title()}
			<div class="text-3xl font-bold">
				<p>WELCOME TO THE</p>
			</div>
			<div class="mb-4 text-5xl font-bold">
				<p>Pensacola Christian College</p>
			</div>
			<div class="mb-4 text-5xl font-bold">
				<p>IEEE STUDENT BRANCH</p>
			</div>
		{/snippet}
		{#snippet description()}
			<div class="flex items-center justify-center">
				<div class="mx-4 flex h-px rounded border-3 bg-white px-30"></div>
				<a href={base + '/about'} class="inline-block">
					<button
						class="bg-primary-500 hover:bg-primary-700 w-50 border-4 border-white py-2 font-bold"
						>ABOUT US</button
					>
				</a>
				<div class="mx-4 flex h-px rounded border-3 bg-white px-30"></div>
			</div>
		{/snippet}
	</HeroHeader>
</div>

<!-- Event Highlights Section -->
<div class="flex items-center">
	<h2 class="text-primary-500 mr-4 mb-8 ml-20 text-4xl font-bold font-bold">Event Highlights</h2>
	<div class="bg-primary-500 mr-20 mb-5 h-2 flex-grow rounded"></div>
</div>

<div>
	{#each displayedRecords as eventRecord}
		<EventHighlight
			title={eventRecord.title}
			date={eventRecord.date}
			location={eventRecord.location}
		></EventHighlight>
	{/each}
</div>

<button
	class="bg-primary-500 hover:bg-primary-700 mt-4 ml-20 w-35 py-2 font-bold text-white"
	on:click={loadMore}
>
	View More
</button>

<div class="mt-40">
	<HeroHeader bg_image={base + '/images/coding_people.jpg'}>
		{#snippet title()}
			<p>Officers</p>
		{/snippet}
		{#snippet description()}
			<div class="mt-5 justify-center text-lg font-semibold">
				<p>Want to see who runs the Student Branch and how they do it?</p>
				<p>Click the button below to meet them!</p>
			</div>
			<div class="flex justify-center">
				<a href={base + '/officers'} class="inline-block">
					<button
						class="bg-primary-500 hover:bg-primary-700 mt-10 w-65 border-4 border-white py-2 font-bold"
						>MEET THE OFFICERS</button
					>
				</a>
			</div>
		{/snippet}
	</HeroHeader>
</div>

<!-- Our Story Section -->
<div class="mt-40">
	<div class="flex items-center">
		<h2 class="text-primary-500 mr-4 mb-8 ml-20 text-4xl font-bold font-bold">Our Story</h2>
		<div class="bg-primary-500 mr-20 mb-5 h-2 flex-grow rounded"></div>
	</div>
	<div class="flex items-center">
		<img
			src={base + '/images/executive_committee.jpg'}
			alt="IEEE Plaque"
			class="ml-20 h-auto w-200 max-w-full rounded"
		/>
		<div class="p-40 font-bold">
			<p>Want to know how the branch started?</p>
			<p>Learn more about the history of our branch here!</p>

			<a href={base + '/history'} class="inline-block">
				<button class="bg-primary-500 hover:bg-primary-700 mt-10 w-35 py-2 font-bold text-white">
					Learn More
				</button>
			</a>
		</div>
	</div>
</div>
