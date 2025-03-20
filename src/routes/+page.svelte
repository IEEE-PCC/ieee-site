<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar page="Home" />
<div class="flex min-h-screen flex-col transition-colors duration-250">
	<main class="container mx-auto flex-1 p-6">
		<section class="relative flex items-center justify-center h-[400px] text-white">
         <div class="text-center border-2 border-white p-6 rounded-lg">
           <h2 class="text-xl font-semibold uppercase tracking-wide dark:bg-blue-800">Welcome to the</h2>
           <h3 class="text-5xl font-bold mt-1">IEEE PCC BRANCH</h3>
           <div class="mt-4 flex justify-center">
             <button class="px-6 py-3 border-2 border-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all">
               ABOUT US
             </button>
           </div>
         </div>
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
