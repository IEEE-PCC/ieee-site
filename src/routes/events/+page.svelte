<script lang="ts">
	let month = "March 2025";
</script>

<!-- Full-page container -->
<div class="min-h-screen flex flex-col items-center justify-center bg-white p-4">
	<!-- Month Title -->
	<h2 class="text-4xl font-bold text-black border-b-4 border-blue-500 pb-2 mb-6">{month}</h2>

	<!-- Calendar Grid with border around the whole calendar -->
	<div class="border-4 border-blue-500 p-4 w-full max-w-5xl">
		<!-- Days of the week -->
		<div class="grid grid-cols-7 gap-2 mb-4">
			<div class="font-bold text-center text-black">Sun</div>
			<div class="font-bold text-center text-black">Mon</div>
			<div class="font-bold text-center text-black">Tue</div>
			<div class="font-bold text-center text-black">Wed</div>
			<div class="font-bold text-center text-black">Thu</div>
			<div class="font-bold text-center text-black">Fri</div>
			<div class="font-bold text-center text-black">Sat</div>
		</div>

		<!-- Empty spaces before March 1st (March starts on a Saturday) -->
		<div class="grid grid-cols-7 gap-2">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>

			<!-- Hardcoded Days -->
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">1</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">2</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">3</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">4</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">5</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">6</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">7</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">8</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">9</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">10</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">11</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">12</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">13</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">14</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">15</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">16</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">17</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">18</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">19</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">20</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">21</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">22</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">23</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">24</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">25</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">26</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">27</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">28</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">29</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">30</div>
			<div class="w-full h-24 flex items-top  border-2 border-blue-500 bg-white text-black text-xl font-semibold">31</div>
		</div>
	</div>
</div>
