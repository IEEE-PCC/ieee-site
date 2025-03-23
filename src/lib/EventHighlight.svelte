<script lang="ts">
	interface Props {
		title?: string;
		date?: string;
		location?: string;
	}

	let {
		title = '',
		date = '',
		location = ''
	}: Props = $props();
</script>

<div class="grid grid-cols-3 sm:px-10 md:px-20 lg:px-20">
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-globe text-xl text-blue-500"></i>
		<p class="italic text-gray-500 font-semibold">EVENT NAME</p>
	</div>
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
		<p class="italic text-gray-500 font-semibold">DATE</p>
	</div>
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
		<p class="italic text-gray-500 font-semibold">LOCATION</p>
	</div>
	<div class="flex items-center mt-2 mb-4 text-xl">
		<p class="font-semibold text-primary-500">{title}</p>
	</div>
	<div class="flex items-center mt-2 mb-4 text-xl">
		<p class="font-semibold">{date}</p>
	</div>
	<div class="flex items-center mt-2 mb-4 text-xl">
		<p class="font-semibold">{location}</p>
	</div>
	<div class="flex items-center mt-3">
		<hr class="bg-gray-600 mb-5 border-2 flex-grow rounded px-177" />
	</div>
</div>

