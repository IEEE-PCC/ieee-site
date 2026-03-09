<script lang="ts">
	import { enhance } from '$app/forms';

	let { data, form } = $props();

	let editingKey: string | null = $state(null);
	let showAddForm = $state(false);

	const categories = [
		{ key: 'execOfficers' as const, label: 'Executive Officers', icon: 'fas fa-star' },
		{ key: 'committeeOfficers' as const, label: 'Committee Chairs', icon: 'fas fa-users' },
		{ key: 'councilor' as const, label: 'Branch Councilor', icon: 'fas fa-user-shield' }
	];
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
		<h1 class="text-3xl font-bold tracking-tight text-white">Officers</h1>
	</div>
	<button
		onclick={() => (showAddForm = !showAddForm)}
		class="group/btn relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
	>
		<div class="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600"></div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100"
		></div>
		<i class="fas {showAddForm ? 'fa-times' : 'fa-plus'} relative text-xs"></i>
		<span class="relative">{showAddForm ? 'Cancel' : 'New Officer'}</span>
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
{#if showAddForm}
	<div
		class="add-form mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl"
	>
		<form
			method="POST"
			action="?/create"
			use:enhance={() => {
				return async ({ update }) => {
					showAddForm = false;
					await update();
				};
			}}
			class="space-y-4"
		>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Name</label
					>
					<input type="text" name="name" placeholder="Full name" required class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Job Title</label
					>
					<input type="text" name="jobTitle" placeholder="Job title" required class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Year</label
					>
					<input type="text" name="year" placeholder="e.g. Junior" required class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Major</label
					>
					<input type="text" name="major" placeholder="Major" required class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Photo Path</label
					>
					<input
						type="text"
						name="imageUrl"
						placeholder="/officers/name.jpg"
						required
						class="w-full"
					/>
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Category</label
					>
					<select name="category" required class="w-full">
						<option value="execOfficers">Executive Officer</option>
						<option value="committeeOfficers">Committee Chair</option>
						<option value="councilor">Branch Councilor</option>
					</select>
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>LinkedIn</label
					>
					<input type="text" name="linkedIn" placeholder="URL (optional)" class="w-full" />
				</div>
				<div>
					<label
						class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
						>Email</label
					>
					<input type="email" name="email" placeholder="Email (optional)" class="w-full" />
				</div>
			</div>
			<div>
				<label class="mb-1.5 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
					>Description</label
				>
				<textarea
					name="description"
					placeholder="Role description..."
					required
					rows="3"
					class="w-full"
				></textarea>
			</div>
			<button
				type="submit"
				class="rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
			>
				Add Officer
			</button>
		</form>
	</div>
{/if}

<!-- Categories -->
{#each categories as cat, catIdx}
	{@const officerList = data.officers[cat.key]}
	<div class="cat-section mb-8" style="animation-delay: {catIdx * 100}ms">
		<!-- Category header -->
		<div class="mb-3 flex items-center gap-3">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 ring-1 ring-red-500/20"
			>
				<i class="{cat.icon} text-xs"></i>
			</div>
			<h2 class="text-base font-bold text-white/90">{cat.label}</h2>
			<span
				class="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-semibold text-white/30 ring-1 ring-white/[0.06]"
				>{officerList.length}</span
			>
		</div>

		<!-- Officers -->
		<div class="space-y-2">
			{#each officerList as officer, i}
				{@const editKey = `${cat.key}-${i}`}
				<div
					class="group overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-200 hover:border-white/[0.1] hover:bg-white/[0.05]"
				>
					{#if editingKey === editKey}
						<div class="p-5">
							<form
								method="POST"
								action="?/update"
								use:enhance={() => {
									return async ({ update }) => {
										editingKey = null;
										await update();
									};
								}}
								class="space-y-3"
							>
								<input type="hidden" name="category" value={cat.key} />
								<input type="hidden" name="index" value={i} />
								<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
									<input type="text" name="name" value={officer.name} required />
									<input type="text" name="jobTitle" value={officer.jobTitle} required />
									<input type="text" name="year" value={officer.year} required />
									<input type="text" name="major" value={officer.major} required />
									<input type="text" name="imageUrl" value={officer.imageUrl} required />
									<input type="text" name="linkedIn" value={officer.linkedIn} />
									<input type="email" name="email" value={officer.email} />
								</div>
								<textarea name="description" required rows="2" class="w-full"
									>{officer.description}</textarea
								>
								<div class="flex gap-2">
									<button
										type="submit"
										class="rounded-lg bg-emerald-500/80 px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-emerald-500 active:scale-95"
										>Save</button
									>
									<button
										type="button"
										onclick={() => (editingKey = null)}
										class="rounded-lg bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/60 transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95"
										>Cancel</button
									>
								</div>
							</form>
						</div>
					{:else}
						<div class="flex items-center gap-4 px-5 py-3.5">
							<!-- Avatar -->
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.08]"
							>
								{#if officer.imageUrl && !officer.imageUrl.includes('placeholder')}
									<img
										src={officer.imageUrl}
										alt={officer.name}
										class="h-full w-full object-cover"
									/>
								{:else}
									<i class="fas fa-user text-xs text-white/30"></i>
								{/if}
							</div>

							<!-- Info -->
							<div class="min-w-0 flex-1">
								<p class="truncate text-sm font-semibold text-white/90">{officer.name}</p>
								<p class="truncate text-xs text-white/30">{officer.jobTitle}</p>
							</div>

							<!-- Meta pill -->
							<span
								class="hidden rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/30 ring-1 ring-white/[0.04] sm:inline"
								>{officer.year}</span
							>

							<!-- Actions -->
							<div
								class="flex gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								<button
									onclick={() => (editingKey = editKey)}
									class="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/70 active:scale-90"
									title="Edit"
								>
									<i class="fas fa-pen text-xs"></i>
								</button>
								<form method="POST" action="?/delete" use:enhance class="inline">
									<input type="hidden" name="category" value={cat.key} />
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
			{#if officerList.length === 0}
				<div class="py-8 text-center text-sm text-white/25">No officers in this category.</div>
			{/if}
		</div>
	</div>
{/each}

<style>
	.add-form {
		animation: formSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.cat-section {
		animation: catFade 0.4s ease-out both;
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

	@keyframes catFade {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
