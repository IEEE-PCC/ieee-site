<script>
	import NameCard from '$lib/NameCard.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';

	const officers = [
		{
			name: 'Alexander Jackson',
			jobTitle: 'Chair',
			imageUrl: base + '/officers/alexander.png',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Elizabeth Horne',
			jobTitle: 'Secretary',
			imageUrl: base + '/officers/elizabeth.png',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Jane Smith',
			jobTitle: 'Product Manager',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Expert in agile workflows.'
		},
		{
			name: 'Alice Johnson',
			jobTitle: 'UX Designer',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Passionate about user experience.'
		},
		{
			name: 'Bob Brown',
			jobTitle: 'DevOps Engineer',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Automates everything.'
		},
		{
			name: 'Charlie White',
			jobTitle: 'Data Scientist',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Finds patterns in chaos.'
		},
		{
			name: 'Diana Green',
			jobTitle: 'Marketing Lead',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Creates engaging campaigns.'
		},
		{
			name: 'Ethan Black',
			jobTitle: 'Cybersecurity Analyst',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Keeps data safer.'
		}
	];
</script>

<Navbar page="Officers" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Default Content</p>
	{/snippet}
	{#snippet description()}
		<p>Lorem Ipsum yada yada yada</p>
	{/snippet}
</HeroHeader>
<section class="mb-12">
	<h2 class="mb-8 text-center text-3xl font-bold">Chapter Officers</h2>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each officers as officer}
			<NameCard name={officer.name} jobTitle={officer.jobTitle} imageUrl={officer.imageUrl}>
				{#snippet description()}
					<p>{officer.description}</p>
				{/snippet}
			</NameCard>
		{/each}
	</div>
</section>
