<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { onMount } from 'svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import { Blockquote } from 'flowbite-svelte';
	interface timeline {
		date: string;
		title: string;
		description: string;
		icon: string;
		color: string;
	}
	let timeline: timeline[] = $state([]);

	// Fetch timeline data from the API
	onMount(async () => {
		const response = await fetch(base + '/api/timeline.json');
		timeline = await response.json();
	});
</script>

<Navbar page="History" />
<main class="flex flex-col space-y-3 overflow-y-auto">
	<HeroHeader bg_image={base + '/images/pcc_charter_plaque.png'}>
		{#snippet title()}
			<p>History</p>
		{/snippet}
		{#snippet description()}
			<p>The History of Pensacola Christian College's IEEE Student Branch</p>
		{/snippet}
	</HeroHeader>
	<!-- Render Timeline -->
	<Timeline position="alternate">
		{#each timeline as { date, title, description, icon, color }}
			<TimelineItem>
				<!-- @migration-task: migrate this slot by hand, `opposite-content` is an invalid identifier -->
				<TimelineOppositeContent slot="opposite-content">
					<div class="">{date}</div>
				</TimelineOppositeContent>
				<TimelineSeparator style={'height: 120px;'}>
					<TimelineDot
						style="background-color: {color}; width: 45px; height: 45px; display: flex; justify-content: center; align-items: center; border-color: transparent;"
					>
						<i class={icon}></i>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<h3 class="font-bold">{title}</h3>
					<div>{description}</div>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
	<section
		id="sub_footer"
		class="bg-primary-500 grid min-h-148 w-full items-center justify-center px-8 md:grid-cols-3"
	>
		<div class="flex flex-col items-center justify-center place-self-center p-8">
			<div class="z-10 flex items-center justify-center">
				<img
					class="h-80 w-auto rounded-2xl border-2 border-black transition-transform duration-100"
					src={base + '/officers/josephCoffey.jpg'}
					alt="a man"
				/>
			</div>
			<div class="flex items-center justify-center py-2 text-2xl">Joseph Coffey</div>
			<div class=" text-md flex items-center justify-center italic">Branch Councilor</div>
		</div>
		<div class="col-span-2 flex-col gap-6 space-y-8">
			<Blockquote class="text-2xl text-white">Origins of the PCC IEEE Student Branch</Blockquote>
			<Blockquote class="text-md text-wrap text-white not-italic">
				I have been a professional member of IEEE for 31 years and it has been a very important part
				of my career. Now, as a PCC engineering faculty member, I wanted to see a student branch
				become a reality at PCC. IEEE provides numerous opportunities for student members beyond the
				classroom and helps to start their professional development. Starting in 2022, I had
				numerous discussions with faculty about starting a student branch and in September 2023, I
				submitted the first formal proposal to start a PCC IEEE Student Branch. It was forwarded to
				the Academic Committee, where it was approved on November 8, 2023. After the approval
				Student Activities was engaged and during this process, I began the membership drive and
				petition process with IEEE. Once we had 12 Paid members, I was able to submit the petition
				to IEEE. Once the petition was submitted momentum built rapidly and we had our initial
				kickoff meeting on September 27, 2024. This was followed by officer nominations at the
				October 25, 2024, meeting. The first official meeting with the new officers was held on
				November 22, 2024. At the IEEE Northwest Florida Section Christmas Dinner on December 6,
				2024, the PCC IEEE Branch was officially chartered, and a plaque was presented to the
				student branch. The plaque now resides in the 5th floor hallway in McKenzie.
			</Blockquote>
		</div>
	</section>
</main>
