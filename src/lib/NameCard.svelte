<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	export let name = '';
	export let jobTitle = '';
	export let imageUrl = '';
</script>

<div class="flex max-w-md items-center rounded-lg bg-white p-4 shadow-md">
	<div class="mr-4 flex h-12 w-12 items-center justify-center">
		<Avatar src={imageUrl} width="w-32" rounded="rounded-full" />
	</div>
	<div class="flex-grow">
		<h2 class="text-lg font-semibold">{name}</h2>
		<p class="text-sm text-gray-500">{jobTitle}</p>
		<div class="mt-2 text-sm text-gray-700">
			<slot name="description"></slot>
		</div>
	</div>
</div>
