<script lang="ts">
	let { data } = $props();

	let sections = $derived([
		{
			href: '/admin/events',
			label: 'Events',
			count: data.counts.events,
			icon: 'fas fa-calendar-alt',
			gradient: 'from-red-500 to-rose-600',
			glow: 'bg-red-500/20'
		},
		{
			href: '/admin/officers',
			label: 'Officers',
			count: data.counts.officers,
			icon: 'fas fa-user-tie',
			gradient: 'from-orange-500 to-amber-500',
			glow: 'bg-orange-500/20'
		},
		{
			href: '/admin/timeline',
			label: 'Timeline',
			count: data.counts.timeline,
			icon: 'fas fa-stream',
			gradient: 'from-rose-500 to-pink-500',
			glow: 'bg-rose-500/20'
		}
	]);
</script>

<!-- Header -->
<div class="mb-10">
	<div
		class="mb-1 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-white/30 uppercase"
	>
		<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></div>
		Control Panel
	</div>
	<h1 class="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
</div>

<!-- Stat cards -->
<div class="grid grid-cols-1 gap-5 md:grid-cols-3">
	{#each sections as section, i}
		<a
			href={section.href}
			class="stat-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.1] hover:bg-white/[0.05]"
			style="animation-delay: {i * 100}ms"
		>
			<!-- Glow blob -->
			<div
				class="absolute -top-8 -right-8 h-28 w-28 rounded-full {section.glow} blur-2xl transition-all duration-500 group-hover:scale-[2] group-hover:opacity-75"
			></div>

			<div class="relative flex items-start justify-between">
				<div>
					<p class="text-[11px] font-semibold tracking-wider text-white/30 uppercase">
						{section.label}
					</p>
					<p class="mt-2 text-4xl font-bold tracking-tight text-white">{section.count}</p>
				</div>
				<div class="relative">
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-br {section.gradient} opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg"
					></div>
					<div
						class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br {section.gradient} text-white ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
					>
						<i class="{section.icon} text-sm"></i>
					</div>
				</div>
			</div>

			<div
				class="mt-6 flex items-center gap-1.5 text-xs font-medium text-white/25 transition-all duration-200 group-hover:text-white/60"
			>
				Manage
				<i
					class="fas fa-arrow-right text-[0.55rem] transition-transform duration-200 group-hover:translate-x-1"
				></i>
			</div>
		</a>
	{/each}
</div>

<!-- Info card -->
<div class="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl">
	<div class="flex items-center gap-3">
		<div
			class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/[0.06]"
		>
			<i class="fas fa-info text-xs text-white/30"></i>
		</div>
		<div>
			<p class="text-sm font-medium text-white/80">Content management</p>
			<p class="text-xs text-white/30">
				Changes save to Cloudflare KV in production. In dev, data loads from static JSON.
			</p>
		</div>
	</div>
</div>

<style>
	.stat-card {
		animation: cardPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.stat-card:hover {
		box-shadow:
			0 20px 40px rgba(0, 0, 0, 0.3),
			0 0 60px rgba(239, 68, 68, 0.05);
	}

	@keyframes cardPop {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
