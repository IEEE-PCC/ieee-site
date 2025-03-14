<script lang="ts">
	import '../app.postcss';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Footer.svelte';

	initializeStores();
</script>

<Toast />

<slot />

<Footer />
