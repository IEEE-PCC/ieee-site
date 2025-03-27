<script lang="ts">
	interface Props {
		bg_image?: string;
		title?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
	}

	let { bg_image = '', title, description }: Props = $props();
</script>

<div
	class="relative mb-20 flex min-h-0 items-center justify-center bg-cover bg-center text-white md:min-h-144"
	style="background-image: url({bg_image})"
>
	<!-- Overlay -->
	<div class="bg-primary-500/50 absolute inset-0 backdrop-blur-xs"></div>

	<!-- Content Box -->
	<div
		class="relative box-border h-120 w-350 rounded-4xl border-6 border-white text-center shadow-lg dark:border-white"
	>
		<div class="relative h-screen items-center justify-center">
			<div class="font-arial mt-40 text-6xl font-bold">{@render title?.()}</div>
			<div class="font-arial text-lg font-semibold">
				{@render description?.()}
			</div>
		</div>
	</div>
</div>
