<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar page="Home" />
<div class="flex min-h-screen flex-col transition-colors duration-250">
	<main class="container mx-auto flex-1 p-6">
		<section class="rounded-xl border-t-4 p-8 text-center shadow-lg transition-all duration-250">
			<h2 class="mb-4 text-3xl font-semibold">Register Today for the Next Meeting</h2>
			<p class="text-lg">January 12th at 7pm, ABC Hall. Light Refreshments to be Served.</p>
			<button class="mt-6 rounded-lg px-6 py-3 text-lg font-bold shadow-md transition-all"
				>Reserve Your Spot</button
			>
		</section>

		<section class="mt-12">
			<h3 class="text-center text-2xl font-semibold">Featured Events</h3>
			<ul class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<li
					class="border-color-success-500 rounded-xl border-l-8 p-6 shadow-lg transition-colors duration-250"
				>
					<h4 class="text-xl font-semibold">Sign Up for Dr. Emily Jones’ Lecture</h4>
					<p class="">Smart Grid Technologies</p>
					<a href="/" class="font-medium">Learn More</a>
				</li>
				<li class="rounded-xl border-l-8 p-6 shadow-lg transition-colors duration-250">
					<h4 class="text-xl font-semibold">IEEE PES ISGT Asia Conference</h4>
					<p class="">Apply for Travel Grants</p>
					<a href="/" class="font-medium">Learn More</a>
				</li>
			</ul>
		</section>
	</main>
</div>
