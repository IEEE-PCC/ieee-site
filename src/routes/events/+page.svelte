<script lang="ts">
	let month = 'March 2025';
</script>

<!-- Full-page container -->
<div class="flex min-h-screen flex-col items-center justify-center bg-white p-4">
	<!-- Month Title -->
	<h2 class="mb-6 border-b-4 border-blue-500 pb-2 text-4xl font-bold text-black">{month}</h2>

	<!-- Calendar Grid with border around the whole calendar -->
	<div class="w-full max-w-5xl border-4 border-blue-500 p-4">
		<!-- Days of the week -->
		<div class="mb-4 grid grid-cols-7 gap-2">
			<div class="text-center font-bold text-black">Sun</div>
			<div class="text-center font-bold text-black">Mon</div>
			<div class="text-center font-bold text-black">Tue</div>
			<div class="text-center font-bold text-black">Wed</div>
			<div class="text-center font-bold text-black">Thu</div>
			<div class="text-center font-bold text-black">Fri</div>
			<div class="text-center font-bold text-black">Sat</div>
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
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				1
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				2
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				3
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				4
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				5
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				6
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				7
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				8
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				9
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				10
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				11
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				12
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				13
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				14
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				15
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				16
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				17
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				18
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				19
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				20
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				21
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				22
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				23
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				24
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				25
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				26
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				27
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				28
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				29
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				30
			</div>
			<div
				class="items-top flex h-24 w-full border-2 border-blue-500 bg-white text-xl font-semibold text-black"
			>
				31
			</div>
		</div>
	</div>
</div>
