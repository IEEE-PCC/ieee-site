<script>
	import NameCard from '$lib/NameCard.svelte';
	import Navbar from '$lib/Navbar.svelte';

	const people = [
		{
			name: 'Elizabeth Horne',
			jobTitle: 'Secretary',
			imageUrl:
				'https://eaglesnest.pcci.edu/MasterPages/Includes/GetImage.axd?imageID=MTUzNDY0&t=Y',
			description: 'Loves coding and coffee.'
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
			description: 'Keeps data safe.'
		},
		{
			name: 'Fiona Blue',
			jobTitle: 'AI Researcher',
			imageUrl: 'https://via.placeholder.com/50',
			description: 'Exploring the future of AI.'
		}
	];
</script>

<Navbar page="About" />

<div class="container mx-auto p-6">
	<h1 class="mb-8 text-center text-3xl font-bold">Meet Our Team</h1>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each people as person}
			<NameCard name={person.name} jobTitle={person.jobTitle} imageUrl={person.imageUrl}>
				{#snippet description()}
					<p>{person.description}</p>
				{/snippet}
			</NameCard>
		{/each}
	</div>
</div>
