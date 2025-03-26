<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';

	const events = [
		{
			name: 'PCC Student Meeting',
			date: 'March 22, 2025',
			location: 'Pensacola Christian College'
		},
		{
			name: 'PCC Student Meeting',
			date: 'March 22, 2025',
			location: 'Pensacola Christian College'
		}
	];
</script>

<Navbar page="Home" />

<HeroHeader bg_image = {base + '/images/circuit_board.jpg'}>
   <div class="border-white border-2 rounded-lg p-8 text-center bg-opacity-50 backdrop-blur-md">
      <h1 class="text-xl font-semibold uppercase tracking-wide text-white">Welcome to the</h1>
      <div class="relative w-full h-[300px] flex items-center justify-center bg-gray-200">
         <h2 class="text-4xl font-bold">IEEE PCC BRANCH</h2>
      </div>     
      <div class="mt-4">
         <button class="px-6 py-2 border-2 border-white text-sm font-semibold bg-transparent text-white hover:bg-white hover:text-blue-600 transition-all uppercase">
            About Us
         </button>
      </div>
   </div>
</HeroHeader>

<section>
   <div class="border-white border-2 rounded-lg p-8 text-center bg-opacity-50 backdrop-blur-md">
      <h1 class="text-xl font-semibold uppercase tracking-wide text-blue">Welcome to the</h1>
      <div class="relative w-full h-[300px] flex items-center justify-center bg-gray-200">
         <h2 class="text-4xl font-bold">IEEE PCC BRANCH</h2>
      </div>     
      <div class="mt-4">
         <button class="px-6 py-2 border-2 border-white text-sm font-semibold bg-transparent text-white hover:bg-white hover:text-blue-600 transition-all uppercase">
            About Us
         </button>
      </div>
   </div>
</section>

<div class="flex min-h-screen flex-col transition-colors duration-250">
	<main class="container mx-auto flex-1 p-6">
      
		<section class="mt-12">
			<h3 class="text-3xl font-bold text-blue-700 flex items-center border-b-2 border-gray-300 pb-2">
				EVENT HIGHLIGHTS
				<span class="ml-4 flex-grow border-t-2 border-gray-300"></span>
			</h3>

			<ul class="mt-6 space-y-2">
				{#each events as event}
					<li class="border border-gray-300 rounded-lg p-4">
						<div class="grid grid-cols-3 text-sm text-gray-700">
							<span class="flex items-center">
								🌐<span class="ml-1 italic text-gray-500">EVENT NAME</span>
								<span class="ml-2 font-semibold text-blue-700">{event.name}</span>
							</span>
							<span class="flex items-center">
								📅 <span class="ml-1 italic text-gray-500">DATE:</span>
								<span class="ml-2">{event.date}</span>
							</span>
							<span class="flex items-center">
								🗺️ <span class="ml-1 italic text-gray-500">LOCATION:</span>
								<span class="ml-2">{event.location}</span>
							</span>
						</div>
					</li>
				{/each}
			</ul>

			<div class="mt-6 flex justify-start">
				<button class="px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md hover:bg-blue-700 transition-all uppercase">
					View More
				</button>
			</div>
		</section>

	</main>
</div>
