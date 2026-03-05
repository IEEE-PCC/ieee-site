<script lang="ts">
	interface Props {
		bg_image?: string;
		title?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
	}

	let { bg_image = '', title, description }: Props = $props();
</script>

<div
	class="relative mb-10 flex min-h-0 items-center justify-center bg-cover bg-center px-4 text-white sm:mb-20 md:min-h-144"
	style="background-image: url({bg_image})"
>
	<!-- Overlay -->
	<div class="bg-primary-500/50 absolute inset-0 backdrop-blur-xs"></div>

	<!-- Content Box -->
	<div
		class="relative box-border w-full max-w-7xl rounded-2xl border-4 py-12 text-center shadow-lg sm:rounded-4xl sm:border-6 sm:py-16 md:py-20"
		style="border-color: white;"
	>
		<div class="flex flex-col items-center justify-center px-4">
			<div class="font-arial text-2xl font-bold sm:text-4xl md:text-6xl">
				{@render title?.()}
			</div>
			<div class="font-arial mt-4 text-sm font-semibold sm:text-base md:text-lg">
				{@render description?.()}
			</div>
		</div>
	</div>
</div>
