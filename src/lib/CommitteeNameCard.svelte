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

<div class="border-primary-500 relative flex rounded rounded-lg border-3 shadow-lg">
	<div class="flex min-h-40">
		<!-- Placeholder for profile picture -->
		<div class="bg-primary-500 flex h-full w-25 shrink-0 items-start justify-center pt-6">
			<div class="flex h-28 w-20">
				<Avatar src={imageUrl} {name} size="md" rounded="rounded-full" shadow="sm" />
			</div>
		</div>
		<div class="relative mt-2 ml-3 text-lg">
			<div class="text-primary-500 font-bold">{jobTitle}</div>
			<div class="font-bold">{name}</div>
			<div class="font">
				<p class="py-1">{@render description?.()}</p>
				<br />
			</div>
		</div>
	</div>
</div>
