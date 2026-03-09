<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props();
	let editingIndex: number | null = $state(null);
	let showAdd = $state(false);
	let dragIndex: number | null = $state(null);
	let dragOverIndex: number | null = $state(null);

	function handleDragStart(index: number) {
		dragIndex = index;
	}

	function handleDragOver(e: DragEvent, index: number) {
		e.preventDefault();
		dragOverIndex = index;
	}

	function handleDrop(e: DragEvent, toIndex: number) {
		e.preventDefault();
		if (dragIndex === null || dragIndex === toIndex) {
			dragIndex = null;
			dragOverIndex = null;
			return;
		}
		const reorderForm = document.getElementById('reorder-form') as HTMLFormElement;
		const fromInput = reorderForm.querySelector('[name="from"]') as HTMLInputElement;
		const toInput = reorderForm.querySelector('[name="to"]') as HTMLInputElement;
		fromInput.value = String(dragIndex);
		toInput.value = String(toIndex);
		reorderForm.requestSubmit();
		dragIndex = null;
		dragOverIndex = null;
	}

	function handleDragEnd() {
		dragIndex = null;
		dragOverIndex = null;
	}
</script>

<!-- Hidden reorder form -->
<form id="reorder-form" method="POST" action="?/reorder" use:enhance class="hidden">
	<input type="hidden" name="from" value="" />
	<input type="hidden" name="to" value="" />
</form>

<!-- Header -->
<div class="mb-8 flex items-center justify-between">
	<div>
		<div
			class="mb-1 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-white/30 uppercase"
		>
			<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></div>
			Content
		</div>
		<h1 class="text-3xl font-bold tracking-tight text-white">Timeline</h1>
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
		<span class="relative">{showAdd ? 'Cancel' : 'New Entry'}</span>
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
			class="space-y-4"
		>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Date</label
					>
					<input
						type="text"
						name="date"
						placeholder="e.g. September 27, 2024"
						required
						class="w-full"
					/>
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Title</label
					>
					<input type="text" name="title" placeholder="Event title" required class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Icon Class</label
					>
					<input type="text" name="icon" placeholder="fas fa-flag" required class="w-full" />
				</div>
				<div>
					<label
						for="entry-color"
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Color</label
					>
					<div class="flex items-center gap-3">
						<input
							type="color"
							id="entry-color"
							name="color"
							value="#4CAF50"
							required
							class="!border-1.5 h-10 w-14 cursor-pointer !rounded-lg !p-1"
						/>
						<span class="text-xs text-white/30">Pick a dot color</span>
					</div>
				</div>
			</div>
			<div>
				<label class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
					>Description</label
				>
				<textarea name="description" placeholder="What happened?" required rows="2" class="w-full"
				></textarea>
			</div>
			<button
				type="submit"
				class="rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
			>
				Add Entry
			</button>
		</form>
	</div>
{/if}

<!-- Drag hint -->
{#if data.timeline.length > 1}
	<div class="mb-4 flex items-center gap-2 text-xs text-white/25">
		<i class="fas fa-grip-vertical"></i>
		Drag entries to reorder
	</div>
{/if}

<!-- Timeline entries -->
<div class="relative space-y-2">
	<!-- Vertical line -->
	{#if data.timeline.length > 1}
		<div class="absolute top-4 bottom-4 left-[1.65rem] w-px bg-white/[0.06]"></div>
	{/if}

	{#each data.timeline as entry, i}
		<div
			class="timeline-row group relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-200
				{dragIndex === i ? 'scale-[0.98] opacity-50' : ''}
				{dragOverIndex === i && dragIndex !== i
				? 'border-red-500/40 bg-red-500/[0.06]'
				: 'border-white/[0.06] bg-white/[0.03] hover:border-white/[0.1] hover:bg-white/[0.05]'}"
			style="animation-delay: {i * 50}ms"
			draggable={editingIndex !== i ? 'true' : 'false'}
			ondragstart={() => handleDragStart(i)}
			ondragover={(e) => handleDragOver(e, i)}
			ondrop={(e) => handleDrop(e, i)}
			ondragend={handleDragEnd}
			role="listitem"
		>
			{#if editingIndex === i}
				<div class="p-5">
					<form
						method="POST"
						action="?/update"
						use:enhance={() => {
							return async ({ update }) => {
								editingIndex = null;
								await update();
							};
						}}
						class="space-y-3"
					>
						<input type="hidden" name="index" value={i} />
						<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
							<input type="text" name="date" value={entry.date} required />
							<input type="text" name="title" value={entry.title} required />
							<input type="text" name="icon" value={entry.icon} required />
							<input
								type="color"
								name="color"
								value={entry.color}
								required
								class="!border-1.5 h-10 w-14 cursor-pointer !rounded-lg !p-1"
							/>
						</div>
						<textarea name="description" required rows="2" class="w-full"
							>{entry.description}</textarea
						>
						<div class="flex gap-2">
							<button
								type="submit"
								class="rounded-lg bg-emerald-500/80 px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-emerald-500 active:scale-95"
								>Save</button
							>
							<button
								type="button"
								onclick={() => (editingIndex = null)}
								class="rounded-lg bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/60 transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95"
								>Cancel</button
							>
						</div>
					</form>
				</div>
			{:else}
				<div class="flex items-center gap-4 px-5 py-4">
					<!-- Drag handle -->
					<i
						class="fas fa-grip-vertical shrink-0 cursor-grab text-white/15 transition-colors duration-200 group-hover:text-white/40 active:cursor-grabbing"
					></i>

					<!-- Color dot -->
					<div class="relative">
						<div
							class="absolute inset-0 rounded-xl opacity-50 blur-sm"
							style="background-color: {entry.color}"
						></div>
						<div
							class="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white ring-1 ring-white/10"
							style="background-color: {entry.color}"
						>
							<i class={entry.icon} style="font-size: 0.7rem;"></i>
						</div>
					</div>

					<!-- Info -->
					<div class="min-w-0 flex-1">
						<p class="truncate text-sm font-semibold text-white/90">{entry.title}</p>
						<p class="mt-0.5 truncate text-xs text-white/30">{entry.date}</p>
					</div>

					<!-- Description preview -->
					<p class="hidden max-w-48 truncate text-xs text-white/25 lg:block">
						{entry.description}
					</p>

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
	{#if data.timeline.length === 0}
		<div class="flex flex-col items-center py-16 text-white/30">
			<div
				class="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.06]"
			>
				<i class="fas fa-stream text-lg"></i>
			</div>
			<p class="text-sm font-medium">No timeline entries yet</p>
			<p class="text-xs text-white/20">Click "New Entry" to add one.</p>
		</div>
	{/if}
</div>

<style>
	.add-form {
		animation: formSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.timeline-row {
		animation: rowSlide 0.35s ease-out both;
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

	@keyframes rowSlide {
		from {
			opacity: 0;
			transform: translateX(-8px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
