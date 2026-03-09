<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();

	const navItems = [
		{ href: '/admin', label: 'Dashboard', icon: 'fas fa-th-large' },
		{ href: '/admin/events', label: 'Events', icon: 'fas fa-calendar-alt' },
		{ href: '/admin/officers', label: 'Officers', icon: 'fas fa-user-tie' },
		{ href: '/admin/timeline', label: 'Timeline', icon: 'fas fa-stream' }
	];

	let sidebarCollapsed = $state(false);
</script>

<div class="admin-shell relative flex min-h-screen overflow-hidden">
	<!-- Ambient background blobs -->
	<div class="pointer-events-none fixed inset-0 -z-10">
		<div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]"></div>
		<div class="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-rose-500/10 blur-[100px]"></div>
		<div
			class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]"
		></div>
		<div class="absolute inset-0 bg-neutral-950/80 backdrop-blur-3xl"></div>
	</div>

	<!-- Sidebar glass panel -->
	<aside
		class="sidebar-enter group relative z-10 flex flex-col border-r border-white/[0.06] transition-all duration-300 {sidebarCollapsed
			? 'w-[76px]'
			: 'w-[260px]'}"
	>
		<!-- Sidebar glass background -->
		<div class="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl"></div>
		<!-- Inner glow line on right edge -->
		<div
			class="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-red-500/20 via-transparent to-red-500/10"
		></div>

		<!-- Logo -->
		<div class="relative z-10 flex items-center gap-3 px-5 py-7">
			<div class="logo-glow relative flex h-10 w-10 shrink-0 items-center justify-center">
				<div
					class="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 opacity-80 blur-sm"
				></div>
				<div
					class="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white"
				>
					<i class="fas fa-bolt text-sm"></i>
				</div>
			</div>
			{#if !sidebarCollapsed}
				<div class="fade-in">
					<span class="text-base font-bold tracking-tight text-white">IEEE</span>
					<span class="ml-1 text-base font-light tracking-tight text-white/50">Admin</span>
				</div>
			{/if}
		</div>

		<!-- Nav items -->
		<nav class="relative z-10 flex-1 px-3 py-2">
			<ul class="space-y-1">
				{#each navItems as item}
					{@const active = $page.url.pathname === item.href}
					<li>
						<a
							href={item.href}
							class="group/nav relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200
								{active ? 'text-white' : 'text-white/40 hover:text-white/80'}"
						>
							{#if active}
								<!-- Active glass background -->
								<div
									class="absolute inset-0 rounded-xl bg-white/[0.08] ring-1 ring-white/[0.08]"
								></div>
								<!-- Red glow behind active item -->
								<div class="absolute inset-0 -z-10 rounded-xl bg-red-500/10 blur-sm"></div>
							{/if}

							<div
								class="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200
									{active
									? 'bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30'
									: 'bg-white/[0.05] text-white/30 group-hover/nav:bg-white/[0.08] group-hover/nav:text-white/60'}"
							>
								<i class="{item.icon} text-xs"></i>
							</div>
							{#if !sidebarCollapsed}
								<span class="fade-in relative">{item.label}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Bottom -->
		<div class="relative z-10 border-t border-white/[0.06] px-3 py-4">
			<button
				onclick={() => (sidebarCollapsed = !sidebarCollapsed)}
				class="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/30 transition-all duration-200 hover:bg-white/[0.05] hover:text-white/60"
			>
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
					<i
						class="fas {sidebarCollapsed
							? 'fa-angles-right'
							: 'fa-angles-left'} text-xs transition-transform duration-300"
					></i>
				</div>
				{#if !sidebarCollapsed}
					<span class="fade-in">Collapse</span>
				{/if}
			</button>
			<a
				href="/"
				class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/30 transition-all duration-200 hover:bg-white/[0.05] hover:text-white/60"
			>
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
					<i class="fas fa-arrow-left text-xs"></i>
				</div>
				{#if !sidebarCollapsed}
					<span class="fade-in">Back to Site</span>
				{/if}
			</a>
		</div>
	</aside>

	<!-- Main content -->
	<main class="relative z-10 flex-1 overflow-auto">
		<div class="content-enter mx-auto max-w-6xl px-8 py-10">
			{@render children?.()}
		</div>
	</main>
</div>

<style>
	.sidebar-enter {
		animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.content-enter {
		animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.fade-in {
		animation: fadeIn 0.2s ease-out;
	}

	.logo-glow {
		animation: logoPulse 3s ease-in-out infinite;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes logoPulse {
		0%,
		100% {
			filter: brightness(1);
		}
		50% {
			filter: brightness(1.15);
		}
	}

	/* Global glass input styling for admin */
	:global(.admin-shell input[type='text']),
	:global(.admin-shell input[type='date']),
	:global(.admin-shell input[type='email']),
	:global(.admin-shell input[type='password']),
	:global(.admin-shell select),
	:global(.admin-shell textarea) {
		border-radius: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(12px);
		padding: 0.5rem 0.875rem;
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.85);
		transition: all 0.2s ease;
		outline: none;
	}

	:global(.admin-shell input::placeholder),
	:global(.admin-shell textarea::placeholder) {
		color: rgba(255, 255, 255, 0.25);
	}

	:global(.admin-shell input:focus),
	:global(.admin-shell select:focus),
	:global(.admin-shell textarea:focus) {
		border-color: rgba(239, 68, 68, 0.5);
		box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
		background: rgba(255, 255, 255, 0.07);
	}

	:global(.admin-shell select option) {
		background: #1a1a1a;
		color: #e5e5e5;
	}
</style>
