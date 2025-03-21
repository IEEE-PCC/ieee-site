<script lang="ts">
</script>

<!-- Full-page container -->
<div class="min-h-screen flex flex-col items-center justify-center bg-white p-4">

	<h1 class = "text-6xl font-bold text-black border-b-4 border-blue-500 pb-2 mb-6 pl-6">
		UPCOMING EVENTS</h1>
	<!-- Month Title -->
	<h2 class="text-4xl font-bold text-black border-b-4 border-blue-500 pb-2 mb-6">March 2025</h2>

	<!-- Calendar Grid with connected grid lines -->
	<div class="border-4 border-blue-500 p-4 w-full max-w-5xl rounded">
		<!-- Days of the week -->
		<div class="grid grid-cols-7 text-center font-bold text-black mb-2">
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Sunday</button>
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Monday</button>
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Tuesday</button>
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Wednesday</button>
			<button class="bg-gray-400 text-white py-0.5 px- text-lg font-semibold w-full">Thursday</button>
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Friday</button>
			<button class="bg-gray-400 text-white py-0.5 px-4 text-lg font-semibold w-full">Saturday</button>
		</div>

		<!-- Calendar Grid -->
		<div class="grid grid-cols-7 border border-gray-400 divide-x divide-y divide-gray-300">
			<!-- Empty spaces before March 1st (March starts on Saturday) -->
			 
			<div></div><div></div><div></div><div></div><div></div><div></div>

			<!-- Hardcoded Days -->
			{#each Array(31).fill(0).map((_, i) => i + 1) as day}
			<div class="w-full h-24 relative">
				<!-- Blue Circle behind the number -->
				<button class="absolute top-0 left -0 w-7 h-7 bg-blue-500 rounded-full text-black font-semibold">{day}</button>
				
				{#if day === 22}
            <button class="mt-15 ml-2 px-2 py-0 w-30 bg-blue-500 text-white text-sm">
                IEEE Meeting
            </button>
        {/if}
		  </div>
			{/each}
			<!-- Fill remaining empty spaces -->
		{#each Array(42 - (31 + 6)).fill(0) as _}
		<div></div>
		{/each}
		</div>
	</div>
</div>
