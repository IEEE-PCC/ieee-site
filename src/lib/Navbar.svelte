<script lang="ts">
	import { AppBar, Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	let { page: activePage } = $props();

	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'Events', path: '/events' },
		{ name: 'Officers', path: '/officers' },
		{ name: 'About', path: '/about' },
		{ name: 'History', path: '/history' }
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

	// Close mobile menu on route change
	$effect(() => {
		void page.url;
		menuOpen = false;
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
	base="z-50"
	centerClasses="hidden md:block"
	border="border-primary-500 border-b-4"
	background="bg-[url('/images/header-bkg-blue.png')] dark:bg-[url('/images/header-bkg-red.png')] bg-repeat w-full h-16 sticky top-0"
>
	{#snippet lead()}
		<img class="h-10 w-auto object-scale-down" src="{base}/images/ieee-pcc.png" alt="IEEE logo" />
	{/snippet}

	{#snippet children()}
		<nav class="hidden h-full items-center justify-center space-x-6 md:flex">
			{#each routes as route}
				<a
					id={route.name}
					href={base + route.path}
					class="nav-link text-lg font-bold {route.name === activePage ? 'nav-link-active' : ''}"
				>
					{route.name}
				</a>
			{/each}
		</nav>
	{/snippet}

	{#snippet trail()}
		<div class="flex items-center space-x-4">
			<div class="hidden sm:block">
				<nav class="rounded-container grid w-full grid-cols-1 gap-1 overflow-hidden">
					<a
						class="hb rounded-none p-4 py-2 text-center"
						href="https://discord.gg/yuGwMKaPAJ"
						aria-label="discord"><i class="fa-brands fa-discord"></i></a
					>
				</nav>
			</div>
			<div class="hidden sm:block">
				<Switch
					name="Toggle Dark Mode"
					controlActive="bg-surface-200"
					checked={darkMode}
					onCheckedChange={(e) => toggleTheme(e.checked)}
				>
					{#snippet inactiveChild()}<i class="hb fa-solid fa-moon"></i>{/snippet}
					{#snippet activeChild()}<i class="hb fa-solid fa-sun"></i>{/snippet}
				</Switch>
			</div>
			<button class="rounded-lg p-2 md:hidden" onclick={toggleMenu} aria-label="menu">
				<i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl"></i>
			</button>
		</div>
	{/snippet}
</AppBar>

<!-- Mobile Menu Dropdown -->
{#if menuOpen}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-40 bg-black/50"
		onclick={() => (menuOpen = false)}
		aria-label="Close menu"
	></button>
	<!-- Menu -->
	<div
		class="bg-surface-100 dark:bg-surface-900 border-primary-500 fixed top-16 right-0 left-0 z-50 border-b-4 shadow-lg md:hidden"
	>
		<nav class="flex flex-col p-4">
			{#each routes as route}
				<a
					href={base + route.path}
					class="nav-link rounded-lg px-4 py-3 text-lg font-bold {route.name === activePage
						? 'nav-link-active'
						: ''}"
				>
					{route.name}
				</a>
			{/each}
			<hr class="my-2 border-gray-300 dark:border-gray-700" />
			<div class="flex items-center justify-between px-4 py-3">
				<span class="font-bold">Dark Mode</span>
				<Switch
					name="Toggle Dark Mode Mobile"
					controlActive="bg-surface-200"
					checked={darkMode}
					onCheckedChange={(e) => toggleTheme(e.checked)}
				>
					{#snippet inactiveChild()}<i class="fa-solid fa-moon"></i>{/snippet}
					{#snippet activeChild()}<i class="fa-solid fa-sun"></i>{/snippet}
				</Switch>
			</div>
			<a
				class="flex items-center gap-2 rounded-lg px-4 py-3 text-lg font-bold"
				href="https://discord.gg/yuGwMKaPAJ"
				aria-label="discord"
			>
				<i class="fa-brands fa-discord"></i>
				Discord
			</a>
		</nav>
	</div>
{/if}
