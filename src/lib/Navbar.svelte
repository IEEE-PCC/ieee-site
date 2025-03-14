<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

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
		const savedDarkMode = localStorage.getItem('darkMode');
		if (savedDarkMode !== null) {
			darkMode = savedDarkMode === 'true';
			updateDarkModeClass();
		} else {
			// Respect system preference only on first load
			darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			updateDarkModeClass();
		}
	});

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};
	const toggleDarkMode = () => {
		darkMode = !darkMode;
		localStorage.setItem('darkMode', darkMode.toString());
		updateDarkModeClass();
	};
	const updateDarkModeClass = () => {
		return darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background="bg-[url('/images/header-bkg-blue.png')] bg-repeat w-full h-25"
>
	<svelte:fragment slot="lead"
		><img class="h-10 w-auto" src="/images/ieee-mb-black.png" alt="IEEE logo" /></svelte:fragment
	>

	<nav class="flex hidden h-full justify-items-center space-x-4 md:inline-flex">
		{#each routes as route}
			<a
				id={route.name}
				href={route.path}
				class=" text-xl font-extrabold tracking-wide {route.name === page
					? 'text-blue-500'
					: 'text-black'}">{route.name}</a
			>
		{/each}
	</nav>
	<svelte:fragment slot="trail">
		<div class="flex space-x-4">
			<nav class="rounded-container grid w-full grid-cols-1 gap-1 overflow-hidden md:grid-cols-3">
				<a class="rounded-none p-4 py-2 text-center text-black" href="#_" aria-label="discord"
					><i class="fa-brands fa-discord"></i></a
				>
				<a class="rounded-none p-4 py-2 text-center text-black" href="#_" aria-label="instagram"
					><i class="fa-brands fa-instagram"></i></a
				>
				<a class="rounded-none p-4 py-2 text-center text-black" href="#_" aria-label="search"
					><i class="fa-solid fa-magnifying-glass"></i></a
				>
			</nav>
			<button
				class="text-theme-font-color-base dark:text-theme-font-color-base rounded-lg p-2 dark:bg-gray-700"
				onclick={toggleDarkMode}
			>
				{#if darkMode}
					☀️
				{:else}
					🌙
				{/if}
			</button>
			<button class="rounded-lg p-2 md:hidden" onclick={toggleMenu} aria-label="menu">
				<i class="fa-solid fa-bars"></i>
			</button>
		</div></svelte:fragment
	>
</AppBar>
