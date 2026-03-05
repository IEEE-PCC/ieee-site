<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
	let focused = $state(false);
</script>

<div class="fixed inset-0 flex items-center justify-center overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-neutral-950">
		<div
			class="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-600/25 blur-[150px]"
		></div>
		<div
			class="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-rose-500/15 blur-[120px]"
		></div>
	</div>

	<!-- Card -->
	<div class="login-card relative z-10 w-full max-w-sm px-4">
		<div
			class="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-2xl"
		>
			<!-- Header -->
			<div class="relative flex flex-col items-center px-8 pt-10 pb-8">
				<!-- Glow behind icon -->
				<div class="absolute top-4 h-20 w-40 rounded-full bg-red-500/20 blur-[40px]"></div>
				<div class="icon-float relative mb-5 flex h-16 w-16 items-center justify-center">
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 opacity-60 blur-md"
					></div>
					<div
						class="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white ring-1 ring-white/20"
					>
						<i class="fas fa-bolt text-2xl"></i>
					</div>
				</div>
				<h1 class="text-xl font-bold tracking-tight text-white">IEEE Admin</h1>
				<p class="mt-1 text-sm text-white/40">Enter your credentials to continue</p>
			</div>

			<!-- Divider -->
			<div class="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

			<!-- Form -->
			<div class="px-8 pt-7 pb-8">
				{#if form?.error}
					<div
						class="error-shake mb-5 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/20"
					>
						<i class="fas fa-circle-exclamation"></i>
						{form.error}
					</div>
				{/if}

				<form method="POST" use:enhance>
					<div class="mb-6">
						<label
							for="password"
							class="mb-2 block text-[11px] font-semibold tracking-wider text-white/30 uppercase"
							>Password</label
						>
						<div class="relative">
							<input
								type="password"
								id="password"
								name="password"
								required
								onfocus={() => (focused = true)}
								onblur={() => (focused = false)}
								class="w-full !py-3 !pr-10"
								placeholder="Enter password..."
							/>
							<div
								class="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 transition-all duration-300 {focused
									? 'scale-110 text-red-400'
									: 'text-white/20'}"
							>
								<i class="fas fa-lock text-sm"></i>
							</div>
						</div>
					</div>
					<button
						type="submit"
						class="login-btn relative w-full overflow-hidden rounded-xl py-3 text-sm font-bold tracking-wide text-white transition-all duration-200 active:scale-[0.98]"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600"></div>
						<div
							class="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 opacity-0 transition-opacity duration-200 hover:opacity-100"
						></div>
						<span class="relative">Sign In</span>
					</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.login-card {
		animation: cardFloat 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.icon-float {
		animation: iconBreathe 3s ease-in-out infinite;
	}

	.login-btn:hover {
		transform: translateY(-1px);
		box-shadow:
			0 8px 30px rgba(239, 68, 68, 0.3),
			0 0 60px rgba(239, 68, 68, 0.1);
	}

	.error-shake {
		animation: shake 0.4s ease-out;
	}

	@keyframes cardFloat {
		from {
			opacity: 0;
			transform: translateY(30px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes iconBreathe {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-6px);
		}
		75% {
			transform: translateX(6px);
		}
	}
</style>
