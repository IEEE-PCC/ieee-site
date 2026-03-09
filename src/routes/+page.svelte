<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import EventHighlight from '$lib/EventHighlight.svelte';
	import type { EventData } from '$lib/types';

	let { data } = $props();

	let records: EventData[] = $derived(data.events);
	let displayedRecords: EventData[] = $state([]);
	let currentIndex = $state(0);
	const increment = 3;

	$effect(() => {
		displayedRecords = records.slice(0, 3);
		currentIndex = 3;
	});

	function loadMore() {
		const nextIndex = currentIndex + increment;
		displayedRecords = [...displayedRecords, ...records.slice(currentIndex, nextIndex)];
		currentIndex = nextIndex;
	}
</script>

<Navbar page="Home" />

<div class="mb-20 sm:mb-40">
	<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
		{#snippet title()}
			<div class="text-xl font-bold sm:text-3xl">
				<p>WELCOME TO THE</p>
			</div>
			<div class="mb-2 text-2xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
				<p>Pensacola Christian College</p>
			</div>
			<div class="mb-2 text-2xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
				<p>IEEE STUDENT BRANCH</p>
			</div>
		{/snippet}
		{#snippet description()}
			<div class="flex items-center justify-center">
				<div class="mx-2 hidden h-px flex-grow rounded border-3 bg-white sm:mx-4 sm:flex"></div>
				<a href={base + '/about'} class="inline-block">
					<button
						class="bg-primary-500 hover:bg-primary-700 w-40 border-4 border-white py-2 text-sm font-bold sm:w-50 sm:text-base"
						>ABOUT US</button
					>
				</a>
				<div class="mx-2 hidden h-px flex-grow rounded border-3 bg-white sm:mx-4 sm:flex"></div>
			</div>
		{/snippet}
	</HeroHeader>
</div>

<!-- Event Highlights Section -->
<div class="flex items-center justify-center px-4 pb-4 sm:px-8 md:px-16 lg:px-20">
	<h2 class="text-primary-500 mr-4 mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">
		Event Highlights
	</h2>
	<div class="bg-primary-500 mb-5 h-2 flex-grow rounded"></div>
</div>
<div class="flex flex-col items-center px-4 sm:px-8">
	<EventHighlight eventsData={displayedRecords} />
	<button
		class="bg-primary-500 hover:bg-primary-700 mt-4 w-35 justify-center self-center py-2 font-bold text-white"
		onclick={loadMore}
	>
		View More
	</button>
</div>

<div class="mt-20 sm:mt-40">
	<HeroHeader bg_image={base + '/images/coding_people.jpg'}>
		{#snippet title()}
			<p>Officers</p>
		{/snippet}
		{#snippet description()}
			<div class="mt-5 justify-center text-sm font-semibold sm:text-base md:text-lg">
				<p>Want to see who runs the Student Branch and how they do it?</p>
				<p>Click the button below to meet them!</p>
			</div>
			<div class="flex justify-center">
				<a href={base + '/officers'} class="inline-block">
					<button
						class="bg-primary-500 hover:bg-primary-700 mt-6 w-52 border-4 border-white py-2 text-sm font-bold sm:mt-10 sm:w-65 sm:text-base"
						>MEET THE OFFICERS</button
					>
				</a>
			</div>
		{/snippet}
	</HeroHeader>
</div>

<!-- Our Story Section -->
<div class="mt-20 sm:mt-40">
	<div class="relative flex items-center px-4 sm:px-8 md:px-16 lg:px-20">
		<h2 class="text-primary-500 mr-4 mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">Our Story</h2>
		<div class="bg-primary-500 mb-5 h-2 flex-grow rounded"></div>
	</div>
	<div class="mb-20 flex flex-col items-center gap-8 px-4 sm:px-8 md:flex-row md:px-16 lg:px-20">
		<img
			src={base + '/images/executive_committee.jpg'}
			alt="IEEE Plaque"
			class="border-primary-500 h-auto w-full max-w-3xl rounded border-3 shadow-lg"
		/>
		<div class="p-4 font-bold sm:p-8 md:p-20">
			<div class="text-xl">Want to know how the branch started?</div>
			<div class="text-xl">Learn more about the history of our branch here!</div>

			<a href={base + '/history'} class="inline-block">
				<button
					class="bg-primary-500 hover:bg-primary-700 mt-6 w-35 py-2 font-bold text-white sm:mt-10"
				>
					Learn More
				</button>
			</a>
		</div>
	</div>
</div>
