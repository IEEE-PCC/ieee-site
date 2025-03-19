<script>
	import NameCard from '$lib/NameCard.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';

	const officers = [
		{
			name: 'Alexander Jackson',
			jobTitle: 'Chair',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: base + '/officers/alexander.png',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Elizabeth Horne',
			jobTitle: 'Secretary',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: base + '/officers/elizabeth.png',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Jane Smith',
			jobTitle: 'Product Manager',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Expert in agile workflows.'
		},
		{
			name: 'Alice Johnson',
			jobTitle: 'UX Designer',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Passionate about user experience.'
		},
		{
			name: 'Bob Brown',
			jobTitle: 'DevOps Engineer',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Automates everything.'
		},
		{
			name: 'Charlie White',
			jobTitle: 'Data Scientist',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Finds patterns in chaos.'
		},
		{
			name: 'Diana Green',
			jobTitle: 'Marketing Lead',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Creates engaging campaigns.'
		},
		{
			name: 'Ethan Black',
			jobTitle: 'Cybersecurity Analyst',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Keeps data safer.'
		}
	];
</script>

<Navbar page="Officers" />

<section class="mb-12">
	<h2 class="mb-8 text-center text-3xl font-bold">Chapter Officers</h2>
	<div class="grid grid-cols-1 gap-6 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each officers as officer}
			<NameCard
				name={officer.name}
				jobTitle={officer.jobTitle}
				year={officer.year}
				major={officer.major}
				imageUrl={officer.imageUrl}
			>
				{#snippet description()}
					<p>{officer.description}</p>
				{/snippet}
			</NameCard>
		{/each}
	</div>
</section>
