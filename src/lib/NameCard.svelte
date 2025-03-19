<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		name?: string;
		jobTitle?: string;
		year?: string;
		major?: string;
		imageUrl?: string;
		description?: import('svelte').Snippet;
	}

	let {
		name = '',
		jobTitle = '',
		year = '',
		major = '',
		imageUrl = '',
		description
	}: Props = $props();
</script>

<!--

<div class="flex max-w-md items-center rounded-lg bg-white p-4 shadow-md">
	<div class="mr-4 flex h-12 w-12 items-center justify-center">
		<Avatar src={imageUrl} {name} size="md" rounded="rounded-lg" shadow="sm" />
	</div>
	<div class="grow">
		<h2 class="text-lg font-semibold">{name}</h2>
		<p class="text-sm text-blue-500 font-semibold">{jobTitle}</p>
		<p class="text-sm text-gray-500"><b>Year:</b> {year}</p>
		<p class="text-sm text-gray-500"><b>Major:</b> {major}</p>
		<p class="text-sm text-gray-500"><b>Bio:</b> {@render description?.()}</p>
	</div>
</div>

-->

<div class="max-w-xs rounded rounded-lg border-2 border-blue-500 shadow-lg">
	<div class="flex h-30 w-full items-center justify-center">
		<!-- Placeholder for profile picture -->
		<div class="flex h-20 w-20 items-center justify-center">
			<Avatar src={imageUrl} {name} size="md" rounded="rounded-full" shadow="sm" />
		</div>
	</div>
	<div class="mb-2 text-center text-xl font-bold">
		{name}
		<p class="text-blue-500">{jobTitle}</p>
	</div>
	<div class="items-center px-10 py-5">
		<p><strong>YEAR:</strong> {year}</p>
		<p><strong>MAJOR:</strong> {major}</p>
		<p><strong>BIO:</strong> {@render description?.()}</p>
	</div>
</div>
