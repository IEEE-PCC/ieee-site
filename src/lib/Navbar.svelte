<script lang="ts">
	import { AppBar, Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Countdown from '$lib/Countdown.svelte';


	let { page } = $props();

	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'Calendar', path: '/calendar' },
		{ name: 'Officers', path: '/officers' },
		{ name: 'About', path: '/about' },
		{ name: 'Membership', path: '/membership' },
		{ name: 'IEEE', path: '/ieee' }
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

<AppBar background="bg-[url('{base}/images/header-bkg-blue.png')] bg-repeat w-full h-16">
	{#snippet lead()}

		<img class="h-10 w-auto" src="{base}/images/ieee-mb-black.png" alt="IEEE logo" />
		<Countdown targetDate="2025-03-26T00:00:00" />
	{/snippet}

	<nav class="flex hidden h-full justify-items-center space-x-4 md:inline-flex">
		{#each routes as route}
			<a
				id={route.name}
				href={base + route.path}
				class=" text-xl font-extrabold tracking-wide {route.name === page
					? 'text-blue-500'
					: 'text-black'}">{route.name}</a
			>
		{/each}
	</nav>
	{#snippet trail()}
		<div class="flex space-x-4">
			<nav class="rounded-container grid w-full grid-cols-1 gap-1 overflow-hidden md:grid-cols-3">
				<a
					class="hb rounded-none p-4 py-2 text-center text-black"
					href="https://discord.gg/yuGwMKaPAJ"
					aria-label="discord"><i class="fa-brands fa-discord"></i></a
				>
				<a
					class="hb rounded-none p-4 py-2 text-center text-black"
					href="{base}/"
					aria-label="instagram"><i class="fa-brands fa-instagram"></i></a
				>
				<a
					class="hb rounded-none p-4 py-2 text-center text-black"
					href="{base}/"
					aria-label="search"><i class="fa-solid fa-magnifying-glass"></i></a
				>
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
