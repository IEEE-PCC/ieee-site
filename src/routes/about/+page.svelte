<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
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

	<section class="mb-12">
		<div class="border-primary-500 rounded-xl border-t-4 p-8 dark:inset-shadow-sm inset-shadow-primary-500 shadow shadow-primary-500">
			<h2 class="text-primary-700 mb-6 flex items-center text-2xl font-bold">
				<span class="mr-2">
					<i class="fas fa-info-circle"></i>
				</span>
				WHAT IS IEEE?
			</h2>
			<div class="prose dark:prose-invert max-w-none">
				<p>
					IEEE, the Institute of Electrical and Electronics Engineers, is the world's largest
					technical professional organization dedicated to advancing technology for the benefit of
					humanity. Our student branch connects you directly to this global community of innovators
					and thought leaders.
				</p>
			</div>
		</div>
	</section>

	<section class="mb-12">
		<div class="border-secondary-500 rounded-xl border-t-4 p-8 dark:inset-shadow-sm inset-shadow-secondary-500 shadow shadow-secondary-500">
			<h2 class="text-secondary-700 mb-6 flex items-center text-2xl font-bold">
				<span class="mr-2">
					<i class="fas fa-users"></i>
				</span>
				WHO ARE WE?
			</h2>
			<div class="prose dark:prose-invert max-w-none">
				<p>
					We are a dynamic student organization at our university, bringing together students
					passionate about electrical engineering, computer science, and related fields. Our branch
					serves as a bridge between academic learning and professional development.
				</p>
			</div>
		</div>
	</section>

	<section class="mb-12">
		<div class="border-tertiary-500 rounded-xl border-t-4 p-8 dark:inset-shadow-sm inset-shadow-tertiary-500 shadow shadow-tertiary-500">
			<h2 class="text-tertiary-700 mb-6 flex items-center text-2xl font-bold">
				<span class="mr-2">
					<i class="fas fa-tasks"></i>
				</span>
				WHAT DO WE DO?
			</h2>
			<div class="prose dark:prose-invert max-w-none">
				<ul class="list-inside list-disc space-y-2">
					<li>Organize technical workshops and seminars</li>
					<li>Host industry expert talks and networking events</li>
					<li>Provide hands-on project experience</li>
					<li>Facilitate research opportunities</li>
					<li>Connect students with industry professionals</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mb-12">
		<div class="border-success-500 rounded-xl border-t-4 p-8 dark:inset-shadow-sm inset-shadow-success-500 shadow shadow-success-500">
			<h2 class="text-success-700 mb-6 flex items-center text-2xl font-bold">
				<span class="mr-2">
					<i class="fas fa-sign-in-alt"></i>
				</span>
				HOW DO I JOIN?
			</h2>
			<div class="prose dark:prose-invert max-w-none">
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
				>
					JOIN TODAY!
				</a>
			</div>
		</div>
	</section>
</div>
