<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
</script>

<Navbar page="About" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Default Content</p>
	{/snippet}
	{#snippet description()}
		<p>Lorem Ipsum yada yada yada</p>
	{/snippet}
</HeroHeader>
<div class="container mx-auto p-6">
	<section class="mb-12">
		<div class="border-primary-500 rounded-xl border-t-4 p-8 shadow-lg">
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
		<div class="border-secondary-500 rounded-xl border-t-4 p-8 shadow-lg">
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
		<div class="border-tertiary-500 rounded-xl border-t-4 p-8 shadow-lg">
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
		<div class="border-success-500 rounded-xl border-t-4 p-8 shadow-lg">
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
