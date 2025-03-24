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
		description: string;
	}

	let officers: Leaders = $state({ execOfficers: [], committeeOfficers: [], councilor: [] });

	// Fetch the JSON officer data
	onMount(async () => {
		const response = await fetch('/api/officers');
		officers = (await response.json()) as Leaders;
	});
</script>

<Navbar page="Officers" />

<!-- Blurry blue header -->
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Officers</p>
	{/snippet}
	{#snippet description()}
		<p>Meet your IEEE PCC Student Branch Officers!</p>
	{/snippet}
</HeroHeader>

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
		class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:px-20 lg:grid-cols-4 lg:px-40"
	>
		{#each officers.execOfficers as execOfficer}
			<ExecutiveNameCard
				name={execOfficer.name}
				jobTitle={execOfficer.jobTitle}
				year={execOfficer.year}
				major={execOfficer.major}
				imageUrl={execOfficer.imageUrl}
			>
				{#snippet description()}
					<p>{execOfficer.description}</p>
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

	<section class="mr-40 mb-12 ml-40">
		<div class="border-primary-500 rounded-xl border-t-4 p-8 shadow-lg">
			<h2 class="text-primary-700 mb-6 flex items-center text-2xl font-bold">
				<span class="mr-2">
					<i class="fas fa-info-circle"></i>
				</span>
				WHAT ARE COMMITTEE CHAIRS?
			</h2>
			<div class="prose dark:prose-invert max-w-none">
				<ul>
					<li><strong>Program Committee</strong> - Plans and hosts IEEE meetings.</li>
					<li>
						<strong>Publicity Committee</strong> - Designs the aesthetics and publicizes the branch.
					</li>
					<li>
						<strong>Membership Committee</strong> - Supports student efforts such as study halls and
						other questions a member might have about the IEEE PCC branch.
					</li>
					<li>
						<strong>History Committee</strong> - Keeps everything the IEEE PCC branch has done preserved
						and within the archives.
					</li>
					<li>
						<strong>Prayer Committee</strong> - Keeps the whole IEEE PCC branch together and offers support
						of the kind that only God can provide.
					</li>
				</ul>
			</div>
		</div>
	</section>

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
				>
					{#snippet description()}
						<p>{councilor.description}</p>
					{/snippet}
				</ExecutiveNameCard>
			{/each}
		</div>
	</div>
</section>
