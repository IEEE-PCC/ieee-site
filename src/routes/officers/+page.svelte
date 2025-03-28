<script lang="ts">
	import ExecutiveNameCard from '$lib/ExecutiveNameCard.svelte';
	import CommitteeNameCard from '$lib/CommitteeNameCard.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { onMount } from 'svelte';

	interface Leaders {
		execOfficers: Officer[];
		committeeOfficers: Officer[];
		councilor: Officer[];
	}

	interface Officer {
		name: string;
		jobTitle: string;
		year: string;
		major: string;
		imageUrl: string;
		linkedIn: string;
		email: string;
		description: string;
	}

	let officers: Leaders = $state({ execOfficers: [], committeeOfficers: [], councilor: [] });

	// Fetch the JSON officer data
	onMount(async () => {
		const response = await fetch(base + '/api/officers.json');
		officers = (await response.json()) as Leaders;
	});
</script>

<Navbar page="Officers" />

<!-- Blurry blue header -->
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<div>Officers</div>
	{/snippet}
	{#snippet description()}
		<div>Meet your Student Branch Officers!</div>
	{/snippet}
</HeroHeader>

<!-- Branch Committee Explanations -->
<section class="px-4 sm:px-8 lg:px-40 mb-12">
	<div class="border-primary-500 rounded-xl border-t-4 p-6 sm:p-8 shadow-lg">
		<h2 class="text-primary-700 mb-6 flex items-center text-xl sm:text-2xl font-bold">
			<span class="mr-2">
				<i class="fas fa-info-circle"></i>
			</span>
			WHAT ARE THE BRANCH COMMITTEES?
		</h2>
		<div class="prose dark:prose-invert max-w-full sm:max-w-none">
			<ul>
				<li>
					<strong>Executive Committee</strong>
					<ul>
						<li>
							The Executive Committee is the governing body of the branch and is comprised of the
							elected branch officers. The Executive Committee determines the direction of the
							branch in accordance with our four-fold vision.
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- Executive Committee Chairs Section -->
<section class="mb-12">
	<br />
	<div class="flex items-center">
		<h2 class="text-primary-500 mr-4 mb-8 ml-40 text-4xl font-bold font-bold">
			Executive Committee Officers
		</h2>
		<div class="bg-primary-500 mr-42 mb-5 h-2 flex-grow rounded"></div>
	</div>
	<div
		class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:px-20 lg:grid-cols-3 lg:px-40"
	>
		{#each officers.execOfficers as execOfficer}
			<ExecutiveNameCard
				name={execOfficer.name}
				jobTitle={execOfficer.jobTitle}
				year={execOfficer.year}
				major={execOfficer.major}
				imageUrl={execOfficer.imageUrl}
				linkedIn={execOfficer.linkedIn}
				email={execOfficer.email}
			>
				{#snippet description()}
					<div>{execOfficer.description}</div>
				{/snippet}
			</ExecutiveNameCard>
		{/each}
	</div>

	<br />
	<br />
	<br />

	<!-- Committee Chairs Section -->
	<div class="flex items-center">
		<h2 class="text-primary-500 mr-4 mb-8 ml-40 text-4xl font-bold font-bold">Committee Chairs</h2>
		<div class="bg-primary-500 mr-42 mb-5 h-2 flex-grow rounded"></div>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:px-10 md:px-20 lg:px-40">
		{#each officers.committeeOfficers as committeeOfficer}
			<CommitteeNameCard
				name={committeeOfficer.name}
				jobTitle={committeeOfficer.jobTitle}
				imageUrl={committeeOfficer.imageUrl}
			>
				{#snippet description()}
					<p>{committeeOfficer.description}</p>
				{/snippet}
			</CommitteeNameCard>
		{/each}
	</div>

	<br />
	<br />

	<!-- Student Branch Councilor Section -->
	<div class="flex items-center">
		<h2 class="text-primary-500 mr-4 mb-8 ml-40 text-4xl font-bold font-bold">Branch Councilor</h2>
		<div class="bg-primary-500 mr-42 mb-5 h-2 flex-grow rounded"></div>
	</div>
	<div class="flex h-120 items-center justify-center">
		<div class="mx-auto grid grid-cols-1 gap-6">
			{#each officers.councilor as councilor}
				<ExecutiveNameCard
					name={councilor.name}
					jobTitle={councilor.jobTitle}
					year={councilor.year}
					major={councilor.major}
					imageUrl={councilor.imageUrl}
					linkedIn={councilor.linkedIn}
					email={councilor.email}
				>
					{#snippet description()}
						<p>{councilor.description}</p>
					{/snippet}
				</ExecutiveNameCard>
			{/each}
		</div>
	</div>
</section>
