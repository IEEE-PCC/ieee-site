<script lang="ts">
	interface Props {
		title?: string;
		date?: string;
		location?: string;
	}

	let { title = '', date = '', location = '' }: Props = $props();
</script>

<div class="grid grid-cols-3 sm:px-10 md:px-20 lg:px-20">
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-globe text-xl text-blue-500"></i>
		<p class="font-semibold text-gray-500 italic">EVENT NAME</p>
	</div>
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-calendar-alt text-xl text-blue-500"></i>
		<p class="font-semibold text-gray-500 italic">DATE</p>
	</div>
	<div class="flex items-center gap-2 text-lg">
		<i class="fas fa-map-marker-alt text-xl text-blue-500"></i>
		<p class="font-semibold text-gray-500 italic">LOCATION</p>
	</div>
	<div class="mt-2 mb-4 flex items-center text-xl">
		<p class="text-primary-500 font-semibold">{title}</p>
	</div>
	<div class="mt-2 mb-4 flex items-center text-xl">
		<p class="font-semibold">{date}</p>
	</div>
	<div class="mt-2 mb-4 flex items-center text-xl">
		<p class="font-semibold">{location}</p>
	</div>
	<div class="mt-3 flex items-center">
		<hr class="mb-5 flex-grow rounded border-2 bg-gray-600 px-177" />
	</div>
</div>
