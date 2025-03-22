<script>
	import { base } from '$app/paths';
	import Navbar from '$lib/Navbar.svelte';
	import HeroHeader from '$lib/HeroHeader.svelte';
</script>

<Navbar page="History" />
<HeroHeader bg_image={base + '/images/circuit_board.jpg'}>
	{#snippet title()}
		<p>Our History</p>
	{/snippet}
	{#snippet description()}
		<p>The History of Pensacola Christian College's IEEE Student Branch</p>
	{/snippet}
</HeroHeader>
