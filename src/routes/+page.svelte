<script lang=ts>
  import { onMount } from 'svelte';
  import { AppBar, TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

  let menuOpen = false;
  let darkMode = false;

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

  const toggleMenu = () => (menuOpen = !menuOpen);

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateDarkModeClass();
  };

  const updateDarkModeClass = () => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const t: ToastSettings = {
	message: 'Toast Test',
	timeout: 10000
};
</script>

<div class="min-h-screen flex flex-col transition-colors    duration-250">
  <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" background="bg-[url('https://studentbranches.ieee.org/us-pcc/wp-content/themes/ieee-dci/images/style-a/header-bkg-blue.png')] bg-repeat w-full h-16">
	<svelte:fragment slot="lead"><img class="w-auto h-10" src="/ieee-mb-black.png" alt="IEEE logo"/></svelte:fragment>
  <h1 class="text-2xl font-extrabold tracking-wide text-black dark:text-black">IEEE PCC Student Branch</h1>
	<svelte:fragment slot="trail"><div class="flex space-x-4">
    <button class="p-2  dark:bg-gray-700 text-theme-font-color-base dark:text-theme-font-color-base rounded-lg" on:click={toggleDarkMode}>
      {#if darkMode}
        ☀️ Light Mode
      {:else}
        🌙 Dark Mode
      {/if}
    </button>
    <button class="md:hidden p-2  rounded-lg" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
    </button>
  </div></svelte:fragment>
  </AppBar>
  <main class="flex-1 container mx-auto p-6">
    <section class="p-8 rounded-xl shadow-lg text-center transition-all    duration-250 border-t-4">
      <h2 class="text-3xl font-semibold mb-4">Register Today for the Next Meeting</h2>
      <p class="text-lg">January 12th at 7pm, ABC Hall. Light Refreshments to be Served.</p>
      <button class="mt-6 px-6 py-3 rounded-lg text-lg font-bold shadow-md transition-all">Reserve Your Spot</button>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-semibold text-center">Featured Events</h3>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <li class="p-6 shadow-lg rounded-xl border-l-8 border-color-success-500 transition-colors    duration-250">
          <h4 class="text-xl font-semibold">Sign Up for Dr. Emily Jones’ Lecture</h4>
          <p class="">Smart Grid Technologies</p>
          <a href="#" class="font-medium">Learn More</a>
        </li>
        <li class="p-6 shadow-lg rounded-xl border-l-8 transition-colors    duration-250">
          <h4 class="text-xl font-semibold">IEEE PES ISGT Asia Conference</h4>
          <p class="">Apply for Travel Grants</p>
          <a href="#" class="font-medium">Learn More</a>
        </li>
      </ul>
    </section>
  </main>

  <footer class="text-center p-6 mt-12 shadow-md border-t-4">
    <ul class="flex justify-center space-x-6 text-lg font-medium mb-3">
      <li><a href="#" class="">Home</a></li>
      <li><a href="#" class="">Sitemap</a></li>
      <li><a href="#" class="">Accessibility</a></li>
      <li><a href="#" class="">Privacy Policy</a></li>
      <li><a href="#" class="">Contact Us</a></li>
    </ul>
    <p class="text-sm">&copy; 2025 PLACEHOLDER – All rights reserved.</p>
  </footer>
</div>