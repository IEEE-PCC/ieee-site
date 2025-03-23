<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
</script>

<Navbar page="Home" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<div class="text-3xl">
			<p>WELCOME TO THE</p>
		</div>
		<div class="h-10 text-4xl tracking-widest">
			<p>IEEE PCC STUDENT BRANCH</p>
		</div>
	{/snippet}
	{#snippet description()}
		<div class="flex items-center">
			<div class="flex-grow h-px bg-white mx-4 border-3 rounded px-30"></div>
			<a href="\about" class="inline-block">
				<button class="bg-primary-500 hover:bg-primary-700 py-2 border-4 border-white w-35 font-bold">ABOUT US</button>
			</a>
			<div class="flex-grow h-px bg-white mx-4 border-3 rounded px-30"></div>
		</div>
	{/snippet}
</HeroHeader>

<!-- Event Highlights Section -->
<div class="flex items-center">
	<h2 class="text-primary-500 mr-4 mb-8 ml-20 text-4xl font-bold font-bold">Event Highlights</h2>
	<div class="bg-primary-500 mr-20 mb-5 h-2 flex-grow rounded"></div>
</div>

<div class="flex items-center gap-2 ml-20">
	<table class="table-fixed text-black">
		<tbody>
			<tr>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">Event Name</p>
					</div>
					PCC Student Meeting
				</td>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025
				</td>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College
				</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">EVENT NAME</p>
					</div>
					PCC Student Meeting</td
				>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025</td
				>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College</td
				>
			</tr>
			<tr>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-globe text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">Event Name</p>
					</div>
					PCC Student Meeting
				</td>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">DATE</p>
					</div>
					March 22, 2025
				</td>
				<td class="p-4">
					<div class="flex items-center gap-2">
						<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
						<p class="text-lg font-semibold">LOCATION</p>
					</div>
					Pensacola Christian College
				</td>
			</tr>
		</tbody>
	</table>
</div>



<!--
<div class="flex min-h-screen flex-col transition-colors duration-250">
	<main class="container mx-auto flex-1 p-6">
		<section
			class="border-primary-500 rounded-xl border-t-4 p-8 text-center shadow-lg transition-all duration-250"
		>
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
					<a href="{base}/" class="font-medium">Learn More</a>
				</li>
				<li class="rounded-xl border-l-8 p-6 shadow-lg transition-colors duration-250">
					<h4 class="text-xl font-semibold">IEEE PES ISGT Asia Conference</h4>
					<p class="">Apply for Travel Grants</p>
					<a href="{base}/" class="font-medium">Learn More</a>
				</li>
			</ul>
		</section>
	</main>
</div>
-->


