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
		displayedRecords = records.slice(0,3); // Select the top three events
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
			<div class="text-3xl">
				<p>WELCOME TO THE</p>
			</div>
			<div class="h-10 text-4xl tracking-widest">
				<p>IEEE PCC STUDENT BRANCH</p>
			</div>
		{/snippet}
		{#snippet description()}
			<div class="flex items-center">
				<div class="flex-grow h-px bg-white mx-4 border-3 rounded px-30"></div>
					<a href={base + '\about'} class="inline-block">
						<button class="bg-primary-500 hover:bg-primary-700 py-2 border-4 border-white w-35 font-bold">ABOUT US</button>
					</a>
				<div class="flex-grow h-px bg-white mx-4 border-3 rounded px-30"></div>
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
		>
		</EventHighlight>
	{/each}
</div>

<button class="mt-4 ml-20 bg-primary-500 hover:bg-primary-700 py-2 w-35 font-bold text-white" on:click={loadMore}>
	View More
</button>

<div class="mt-40">
	<HeroHeader bg_image={base + '/images/coding_people.jpg'}>
		{#snippet title()}
			<p>Officers</p>
		{/snippet}
		{#snippet description()}
			<p>Want to see who runs the IEEE PCC Student Branch and how they do it?</p>
			<p>Click the button below to meet them!</p>
			<div class="flex items-center">
				<a href={base + '\officers'} class="inline-block">
					<button class="ml-24 mt-10 bg-primary-500 hover:bg-primary-700 py-2 border-4 border-white w-65 font-bold">MEET THE OFFICERS</button>
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
	<div>
		<img src={base + 'officers/josephCoffey.jpg'} alt="Example Image" class="w-auto h-auto rounded ml-20">
	</div>
</div>
