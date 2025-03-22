<script lang="ts">
	import '../app.css';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import Footer from '$lib/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ToastProvider />

{@render children?.()}

<Footer />
