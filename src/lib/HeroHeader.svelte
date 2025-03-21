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
		class="relative rounded-4xl border border-8 border-white px-8 py-12 text-center shadow-lg md:px-16 md:py-20 lg:px-140
           lg:py-50 dark:border-white"
	>
		<div class="font-arial bg-transparent pb-6 text-6xl font-bold">{@render title?.()}</div>
		<div class="font-arial text-lg">
			{@render description?.()}
		</div>
	</div>
</div>
