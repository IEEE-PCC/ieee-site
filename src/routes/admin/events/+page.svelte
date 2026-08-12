<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props();
	let editingIndex: number | null = $state(null);
	let showAdd = $state(false);
</script>

<!-- Header -->
<div class="mb-8 flex items-center justify-between">
	<div>
		<div
			class="mb-1 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-white/30 uppercase"
		>
			<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></div>
			Content
		</div>
		<h1 class="text-3xl font-bold tracking-tight text-white">Events</h1>
	</div>
	<button
		onclick={() => (showAdd = !showAdd)}
		class="group/btn relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
	>
		<div class="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600"></div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100"
		></div>
		<i class="fas {showAdd ? 'fa-times' : 'fa-plus'} relative text-xs"></i>
		<span class="relative">{showAdd ? 'Cancel' : 'New Event'}</span>
	</button>
</div>

{#if form?.error}
	<div
		class="mb-5 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/20"
	>
		<i class="fas fa-circle-exclamation"></i>
		{form.error}
	</div>
{/if}

<!-- Add form -->
{#if showAdd}
	<div
		class="add-form mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl"
	>
		<form
			method="POST"
			action="?/create"
			use:enhance={() => {
				return async ({ update }) => {
					showAdd = false;
					await update();
				};
			}}
			class="flex flex-wrap items-end gap-4"
		>
			<div class="min-w-48 flex-1">
				<label class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
					>Title</label
				>
				<input type="text" name="title" placeholder="Event title" required />
			</div>
			<div class="w-44">
				<label class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
					>Date</label
				>
				<input type="date" name="date" required />
			</div>
			<div class="min-w-48 flex-1">
				<label class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
					>Location</label
				>
				<input type="text" name="location" placeholder="Location or URL" required />
			</div>
			<button
				type="submit"
				class="rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
			>
				Add Event
			</button>
		</form>
	</div>
{/if}

<!-- Events list -->
<div
	class="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl"
>
	{#each data.events as event, i}
		<div
			class="event-row group border-b border-white/[0.04] transition-colors duration-150 last:border-b-0 hover:bg-white/[0.03]"
			style="animation-delay: {i * 40}ms"
		>
			{#if editingIndex === i}
				<div class="px-5 py-4">
					<form
						method="POST"
						action="?/update"
						use:enhance={() => {
							return async ({ update }) => {
								editingIndex = null;
								await update();
							};
						}}
						class="flex flex-wrap items-center gap-3"
					>
						<input type="hidden" name="index" value={i} />
						<input type="text" name="title" value={event.title} required class="min-w-40 flex-1" />
						<input type="date" name="date" value={event.date} required class="w-40" />
						<input
							type="text"
							name="location"
							value={event.location}
							required
							class="min-w-40 flex-1"
						/>
						<div class="flex gap-2">
							<button
								type="submit"
								class="rounded-lg bg-emerald-500/80 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-emerald-500 active:scale-95"
								>Save</button
							>
							<button
								type="button"
								onclick={() => (editingIndex = null)}
								class="rounded-lg bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95"
								>Cancel</button
							>
						</div>
					</form>
				</div>
			{:else}
				<div class="flex items-center gap-4 px-5 py-4">
					<!-- Date badge -->
					<div
						class="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20"
					>
						<span class="text-[0.55rem] leading-none font-bold uppercase">
							{new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' })}
						</span>
						<span class="text-lg leading-none font-bold">
							{new Date(event.date + 'T00:00:00').getDate()}
						</span>
					</div>

					<!-- Info -->
					<div class="min-w-0 flex-1">
						<p class="truncate font-semibold text-white/90">{event.title}</p>
						<p class="mt-0.5 truncate text-xs text-white/30">
							{#if event.location.startsWith('http')}
								<i class="fas fa-map-marker-alt mr-1"></i>Map link
							{:else}
								<i class="fas fa-map-marker-alt mr-1"></i>{event.location}
							{/if}
						</p>
					</div>

					<!-- Actions -->
					<div class="flex gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
						<button
							onclick={() => (editingIndex = i)}
							class="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/70 active:scale-90"
							title="Edit"
						>
							<i class="fas fa-pen text-xs"></i>
						</button>
						<form method="POST" action="?/delete" use:enhance class="inline">
							<input type="hidden" name="index" value={i} />
							<button
								type="submit"
								class="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 active:scale-90"
								title="Delete"
							>
								<i class="fas fa-trash-alt text-xs"></i>
							</button>
						</form>
					</div>
				</div>
			{/if}
		</div>
	{/each}
	{#if data.events.length === 0}
		<div class="flex flex-col items-center py-16 text-white/30">
			<div
				class="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.06]"
			>
				<i class="fas fa-calendar-plus text-lg"></i>
			</div>
			<p class="text-sm font-medium">No events yet</p>
			<p class="text-xs text-white/20">Click "New Event" to add one.</p>
		</div>
	{/if}
</div>

<style>
	.add-form {
		animation: formSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.event-row {
		animation: rowFade 0.3s ease-out both;
	}

	@keyframes formSlide {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes rowFade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
