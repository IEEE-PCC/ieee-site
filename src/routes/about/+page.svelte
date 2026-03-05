<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import InfoCircle from '@lucide/svelte/icons/info';
	import Users from '@lucide/svelte/icons/users';
	import Tasks from '@lucide/svelte/icons/list-check';
	import SignIn from '@lucide/svelte/icons/log-in';
	import type { FaqItem } from '$lib/types';

	let { data } = $props();
	let about = $derived(data.about);
	let value = $state(['what-is-ieee']);

	const iconMap: Record<string, typeof InfoCircle> = {
		info: InfoCircle,
		users: Users,
		'list-check': Tasks,
		'log-in': SignIn
	};

	function getIcon(name: string) {
		return iconMap[name] || InfoCircle;
	}

	function parseContent(item: FaqItem): { intro?: string; items: string[] } {
		if (item.contentType === 'text') {
			return { items: [], intro: item.content };
		}
		const parts = item.content.split('|');
		if (item.value === 'how-do-i-join') {
			return { intro: parts[0], items: parts.slice(1) };
		}
		return { items: parts };
	}
</script>

<Navbar page="About" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<h1 class="text-4xl font-bold">About Our Student Branch</h1>
	{/snippet}
	{#snippet description()}
		<p class="text-xl">Empowering Future Technology Leaders</p>
	{/snippet}
</HeroHeader>

<div class="flex items-center px-4 sm:px-8 md:px-16 lg:px-20">
	<h2 class="text-primary-500 mr-4 mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">Our Vision</h2>
	<div class="bg-primary-500 mb-5 h-2 flex-grow rounded"></div>
</div>

<div class="container mx-auto px-4 pb-6 sm:p-6">
	<div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
		{#each about.visionCards as card}
			<div
				class="rounded-xl border-2 {card.borderColor} p-6 shadow-lg transition-transform hover:scale-105"
			>
				<h2 class="mb-4 text-2xl font-bold">{card.title}</h2>
				<p class="text-gray-600 dark:text-gray-300">{card.description}</p>
			</div>
		{/each}
	</div>

	<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
		{#each about.faqItems as item, i}
			{@const IconComponent = getIcon(item.icon)}
			{@const parsed = parseContent(item)}
			<Accordion.Item value={item.value}>
				{#snippet lead()}<IconComponent size={24} />{/snippet}
				{#snippet control()}{item.title}{/snippet}
				{#snippet panel()}
					{#if item.contentType === 'text'}
						<p>{item.content}</p>
					{:else if parsed.intro}
						<p class="mb-6">{parsed.intro}</p>
						<ul class="mb-6 list-inside list-disc space-y-2">
							{#each parsed.items as listItem}
								<li>{listItem}</li>
							{/each}
						</ul>
						{#if item.value === 'how-do-i-join'}
							<a
								href="/membership"
								class="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-6 py-3 font-bold text-white transition-colors"
								>JOIN TODAY!</a
							>
						{/if}
					{:else}
						<ul class="list-inside list-disc space-y-2">
							{#each parsed.items as listItem}
								<li>{listItem}</li>
							{/each}
						</ul>
					{/if}
				{/snippet}
			</Accordion.Item>
			{#if i < about.faqItems.length - 1}
				<hr class="hr" />
			{/if}
		{/each}
	</Accordion>
</div>
