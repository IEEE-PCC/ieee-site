<script lang="ts">
	import { AppBar, Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	//import Countdown from '$lib/Countdown.svelte';

	let { page } = $props();

	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'Events', path: '/events' },
		{ name: 'Officers', path: '/officers' },
		{ name: 'About', path: '/about' }
	];
	let menuOpen = $state(false);
	let darkMode = $state(false);

	// On mount, check if there's a stored dark mode preference, else use system preference
	onMount(() => {
		let storedTheme = localStorage.getItem('darkMode');
		let systemTheme =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		darkMode = storedTheme !== null ? storedTheme === 'true' : systemTheme;
	});

	$effect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleTheme(checked: boolean) {
		localStorage.setItem('darkMode', checked ? 'true' : 'false');
		darkMode = checked;
	}

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};
</script>

<AppBar
	headlineClasses="sm:hidden"
	base="z-10"
	centerClasses="hidden sm:block"
	border="border-primary-500 border-b-4"
	background="bg-[url('/images/header-bkg-blue.png')] dark:bg-[url('/images/header-bkg-red.png')] bg-repeat w-full h-16 sticky top-0"
>
	{#snippet lead()}
		<img class="h-10 w-auto object-scale-down" src="{base}/images/ieee-pcc.png" alt="IEEE logo" />
		<!-- Countdown targetDate="2025-03-26T00:00:00" / -->
	{/snippet}

	{#snippet children()}
		<nav class="hidden h-full items-center justify-center space-x-6 md:flex">
			{#each routes as route}
				<a
					id={route.name}
					href={base + route.path}
					class="nav-link text-lg font-bold {route.name === page ? 'nav-link-active' : ''}"
				>
					{route.name}
				</a>
			{/each}
		</nav>
	{/snippet}

	{#snippet trail()}
		<div class="hidden space-x-4 sm:flex">
			<nav class="rounded-container grid w-full grid-cols-1 gap-1 overflow-hidden">
				<a
					class="hb rounded-none p-4 py-2 text-center"
					href="https://discord.gg/yuGwMKaPAJ"
					aria-label="discord"><i class="fa-brands fa-discord"></i></a
				>
				<!-- a class="hb rounded-none p-4 py-2 text-center" href="{base}/" aria-label="search"
					><i class="fa-solid fa-magnifying-glass"></i></a
				-->
			</nav>
			<Switch
				name="Toggle Dark Mode"
				controlActive="bg-surface-200"
				checked={darkMode}
				onCheckedChange={(e) => toggleTheme(e.checked)}
			>
				{#snippet inactiveChild()}<i class="hb fa-solid fa-moon"></i>{/snippet}
				{#snippet activeChild()}<i class="hb fa-solid fa-sun"></i>{/snippet}
			</Switch>
			<button class="rounded-lg p-2 md:hidden" onclick={toggleMenu} aria-label="menu">
				<i class="fa-solid fa-bars"></i>
			</button>
		</div>
	{/snippet}
</AppBar>
