<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { base } from '$app/paths';
	import HeroHeader from '$lib/HeroHeader.svelte';
</script>

<Navbar page="Calendar" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Default Content</p>
	{/snippet}
	{#snippet description()}
		<p>Lorem Ipsum yada yada yada</p>
	{/snippet}
</HeroHeader>
<main>Things Should GO here</main>
