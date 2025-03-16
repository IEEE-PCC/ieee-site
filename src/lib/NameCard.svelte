<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		name?: string;
		jobTitle?: string;
		imageUrl?: string;
		description?: import('svelte').Snippet;
	}

	let { name = '', jobTitle = '', imageUrl = '', description }: Props = $props();
</script>

<div class="flex max-w-md items-center rounded-lg bg-white p-4 shadow-md">
	<div class="mr-4 flex h-12 w-12 items-center justify-center">
		<Avatar src={imageUrl} {name} size="md" rounded="rounded-lg" shadow="sm" />
	</div>
	<div class="grow">
		<h2 class="text-lg font-semibold">{name}</h2>
		<p class="text-sm text-gray-500">{jobTitle}</p>
		<div class="mt-2 text-sm text-gray-700">
			{@render description?.()}
		</div>
	</div>
</div>
