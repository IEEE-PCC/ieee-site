<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import { base } from '$app/paths';
</script>

<Navbar page="IEEE" />
<HeroHeader bg_image={base + '/images/coding_people.jpg'}>
	{#snippet title()}
		<p>Default Content</p>
	{/snippet}
	{#snippet description()}
		<p>Lorem Ipsum yada yada yada</p>
	{/snippet}
</HeroHeader>
<main>Things Should GO here</main>
