<script>
	import NameCard from '$lib/NameCard.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';

	const execOfficers = [
		{
			name: 'Alexander Jackson',
			jobTitle: 'Chair',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: base + '/officers/alexanderJackson.jpg',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
		},
		{
			name: 'Sebastien Pruneau',
			jobTitle: 'Vice Chair',
			year: 'Senior',
			major: 'Mechanical Engineering & Electrical Engineering',
			imageUrl: base + '/officers/sebastienPruneau.jpg',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Rachel la Madrid',
			jobTitle: 'Secretary',
			year: 'Senior',
			major: 'Computer Science',
			imageUrl: '/officers/rachelMadrid.jpg',
			description: 'Expert in agile workflows.'
		},
		{
			name: 'Elizabeth Horn',
			jobTitle: 'Assistant Secretary',
			year: 'Freshman',
			major: 'Electrical Engineering',
			imageUrl: '/officers/elizabethHorn.jpg',
			description: 'Passionate about user experience.'
		},
		{
			name: 'Anthony Hurlston',
			jobTitle: 'Treasurer',
			year: 'Junior',
			major: 'Electrical Engineering',
			imageUrl: '/officers/anthonyHurlston.jpg',
			description:
				'Anthony Hurlston budgets branch activities and is in charge of managing the branch funds. If you want to get on his good side, please offer him a can of Black Cherry Soda!'
		},
		{
			name: 'Yuzuria Liu',
			jobTitle: 'Activities Director',
			year: 'Junior',
			major: 'Electrical Engineering',
			imageUrl: '/officers/yuzuriaLiu.jpg',
			description: 'Finds patterns in chaos.'
		},
		{
			name: 'Isaac Castor',
			jobTitle: 'Chaplain',
			year: 'Sophomore',
			major: 'Electrical Engineering',
			imageUrl: '/officers/isaacCastor.jpg',
			description: 'Creates engaging campaigns.'
		}
	];

	const committeeOfficers = [
		{
			name: 'Gabriel Cioroch',
			jobTitle: 'Program Chair',
			year: 'Senior',
			major: 'Mechanical Engineering',
			imageUrl: base + '/officers/gabrielCioroch.jpg',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
		},
		{
			name: 'Amelia Wu',
			jobTitle: 'Publicity',
			year: 'Freshman',
			major: 'Cybersecurity',
			imageUrl: base + '/officers/ameliaWu.jpg',
			description: 'Lorem, ipsum dolor sit amet.'
		},
		{
			name: 'Christopher Nabeta',
			jobTitle: 'Membership',
			year: 'Junior',
			major: 'Mechanical Engineering',
			imageUrl: '/officers/christopherNabeta.jpg',
			description: 'Expert in agile workflows.'
		},
		{
			name: 'Amber Wong',
			jobTitle: 'History',
			year: 'Sophomore',
			major: 'Mechanical Engineering',
			imageUrl: '/officers/amberWong.jpg',
			description: 'Passionate about user experience.'
		},
		{
			name: 'Christian Kahnke',
			jobTitle: 'Prayer',
			year: 'Senior',
			major: 'Computer Science',
			imageUrl: '/officers/christianKahnke.jpg',
			description: 'Knows how to code.'
		}
	];

	const councilors = [
		{
			name: 'Mr. Joseph Coffey',
			jobTitle: 'Branch Councilor',
			year: "He's done with school!",
			major: 'Engineering Broski',
			imageUrl: base + '/officers/josephCoffey.jpg',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
		}
	];
</script>

<Navbar page="Officers" />

<section class="mb-12">
	<br />
	<h2 class="mb-8 text-center text-3xl font-bold">Executive Committee Officers</h2>
	<div
		class="med:px-20 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-10 md:grid-cols-3 lg:grid-cols-4 lg:px-40"
	>
		{#each execOfficers as execOfficer}
			<NameCard
				name={execOfficer.name}
				jobTitle={execOfficer.jobTitle}
				year={execOfficer.year}
				major={execOfficer.major}
				imageUrl={execOfficer.imageUrl}
			>
				{#snippet description()}
					<p>{execOfficer.description}</p>
				{/snippet}
			</NameCard>
		{/each}
	</div>

	<br />
	<br />

	<h2 class="mb-8 text-center text-3xl font-bold">Committee Officers</h2>
	<div
		class="med:px-20 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-10 md:grid-cols-3 lg:grid-cols-4 lg:px-40"
	>
		{#each committeeOfficers as committeeOfficer}
			<NameCard
				name={committeeOfficer.name}
				jobTitle={committeeOfficer.jobTitle}
				year={committeeOfficer.year}
				major={committeeOfficer.major}
				imageUrl={committeeOfficer.imageUrl}
			>
				{#snippet description()}
					<p>{committeeOfficer.description}</p>
				{/snippet}
			</NameCard>
		{/each}
	</div>

	<br />
	<br />

	<h2 class="mb-8 text-center text-3xl font-bold">Branch Councilor</h2>
	<div class="flex h-100 items-center justify-center">
		<div class="mx-auto grid grid-cols-1 gap-6">
			{#each councilors as councilor}
				<NameCard
					name={councilor.name}
					jobTitle={councilor.jobTitle}
					year={councilor.year}
					major={councilor.major}
					imageUrl={councilor.imageUrl}
				>
					{#snippet description()}
						<p>{councilor.description}</p>
					{/snippet}
				</NameCard>
			{/each}
		</div>
	</div>
</section>
