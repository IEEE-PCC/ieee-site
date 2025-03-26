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
		<div class="place-self-center p-8">
			<div class="z-10 flex items-center justify-center">
				<img
					class="transition-transform duration-100"
					src={base + '/images/pcc_charter_plaque.png'}
					alt="a man"
				/>
			</div>
		</div>
		<div class="col-span-2 flex-col gap-6 space-y-8">
			<Blockquote class="text-2xl text-white"
				>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. "</Blockquote
			>
			<div class="text-white">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto aspernatur veritatis
				debitis atque odio praesentium! Sunt dolorum blanditiis, deleniti tenetur veniam dicta odit,
				reiciendis ipsum velit placeat ullam, cum officiis! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corporis esse delectus quos dolore ab illo. Magnam quibusdam commodi
				provident itaque atque! Nobis, autem porro numquam dolore minus error sequi similique. Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Veniam ea assumenda voluptatem quae
				quidem, nobis, optio, officiis aperiam atque sit a necessitatibus nemo placeat temporibus
				fugit odio deleniti unde? Modi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Earum, ratione exercitationem. Eveniet nisi fugiat aut reprehenderit voluptate, architecto
				excepturi ea in fugit, iste eius ullam culpa maxime maiores vitae sed? Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Quam rem adipisci temporibus omnis error ratione suscipit
				nam dolores minima possimus animi facere eos in maiores, perferendis dignissimos amet nulla
				velit!
			</div>
		</div>
	</section>
</main>
