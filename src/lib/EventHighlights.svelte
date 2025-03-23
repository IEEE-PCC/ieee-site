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