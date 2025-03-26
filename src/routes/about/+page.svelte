<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import InfoCircle from '@lucide/svelte/icons/info';
	import Users from '@lucide/svelte/icons/users';
	import Tasks from '@lucide/svelte/icons/list-check';
	import SignIn from '@lucide/svelte/icons/log-in';
	let value = $state(['what-is-ieee']);
</script>

<Navbar page="About" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<h1 class="text-4xl font-bold">About Our IEEE Student Branch</h1>
	{/snippet}
	{#snippet description()}
		<p class="text-xl">Empowering Future Technology Leaders</p>
	{/snippet}
</HeroHeader>
<div class="container mx-auto p-6">
	<div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div
			class="rounded-xl border-2 border-yellow-500 p-6 shadow-lg transition-transform hover:scale-105"
		>
			<h2 class="mb-4 text-2xl font-bold">CHRISTIAN WITNESS</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Demonstrating our values through service and leadership in the engineering community, while
				fostering an inclusive environment that respects diverse perspectives and beliefs.
			</p>
		</div>

		<div
			class="rounded-xl border-2 border-red-500 p-6 shadow-lg transition-transform hover:scale-105"
		>
			<h2 class="mb-4 text-2xl font-bold">MUTUAL SUPPORT</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Building a strong community where members help each other grow technically and
				professionally through mentorship, collaboration, and shared learning experiences.
			</p>
		</div>

		<div
			class="rounded-xl border-2 border-orange-500 p-6 shadow-lg transition-transform hover:scale-105"
		>
			<h2 class="mb-4 text-2xl font-bold">CAMPUS EXCITEMENT</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Creating engaging technical events, workshops, and social activities that spark enthusiasm
				for engineering and technology across the university community.
			</p>
		</div>

		<div
			class="rounded-xl border-2 border-green-500 p-6 shadow-lg transition-transform hover:scale-105"
		>
			<h2 class="mb-4 text-2xl font-bold">CAREER SUCCESS</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Providing resources, networking opportunities, and professional development activities that
				prepare members for successful careers in engineering and technology.
			</p>
		</div>
	</div>

	<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
		<Accordion.Item value="what-is-ieee">
			{#snippet lead()}<InfoCircle size={24} />{/snippet}
			{#snippet control()}WHAT IS IEEE?{/snippet}
			{#snippet panel()}
				<p>
					IEEE, the Institute of Electrical and Electronics Engineers, is the world's largest
					technical professional organization dedicated to advancing technology for the benefit of
					humanity. Our student branch connects you directly to this global community of innovators
					and thought leaders.
				</p>
			{/snippet}
		</Accordion.Item>
		<hr class="hr" />

		<Accordion.Item value="who-are-we">
			{#snippet lead()}<Users size={24} />{/snippet}
			{#snippet control()}WHO ARE WE?{/snippet}
			{#snippet panel()}
				<p>
					We are a dynamic student organization at our university, bringing together students
					passionate about electrical engineering, computer science, and related fields. Our branch
					serves as a bridge between academic learning and professional development.
				</p>
			{/snippet}
		</Accordion.Item>
		<hr class="hr" />

		<Accordion.Item value="what-do-we-do">
			{#snippet lead()}<Tasks size={24} />{/snippet}
			{#snippet control()}WHAT DO WE DO?{/snippet}
			{#snippet panel()}
				<ul class="list-inside list-disc space-y-2">
					<li>Organize technical workshops and seminars</li>
					<li>Host industry expert talks and networking events</li>
					<li>Provide hands-on project experience</li>
					<li>Facilitate research opportunities</li>
					<li>Connect students with industry professionals</li>
				</ul>
			{/snippet}
		</Accordion.Item>
		<hr class="hr" />

		<Accordion.Item value="how-do-i-join">
			{#snippet lead()}<SignIn size={24} />{/snippet}
			{#snippet control()}HOW DO I JOIN?{/snippet}
			{#snippet panel()}
				<p class="mb-6">
					Joining our IEEE Student Branch is your first step toward a successful career in
					technology. Membership benefits include:
				</p>
				<ul class="mb-6 list-inside list-disc space-y-2">
					<li>Access to IEEE's vast digital library</li>
					<li>Networking opportunities with industry professionals</li>
					<li>Exclusive workshop and event participation</li>
					<li>Leadership and volunteer opportunities</li>
				</ul>
				<a
					href="/membership"
					class="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-6 py-3 font-bold text-white transition-colors"
					>JOIN TODAY!</a
				>
			{/snippet}
		</Accordion.Item>
	</Accordion>
</div>
