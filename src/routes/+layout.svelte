<script lang="ts">
	import '../app.css';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	initializeStores();
</script>

<Toast />

{@render children?.()}

<Footer />
