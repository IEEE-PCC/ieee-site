<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import { base } from '$app/paths';

	interface Props {
		name?: string;
		jobTitle?: string;
		year?: string;
		major?: string;
		imageUrl?: string;
		linkedIn?: string;
		email?: string;
		description?: import('svelte').Snippet;
	}

	let {
		name = '',
		jobTitle = '',
		year = '',
		major = '',
		imageUrl = '',
		linkedIn = '',
		email = '',
		description
	}: Props = $props();
</script>

<div class="border-primary-500 max-w-sm rounded rounded-lg border-3 shadow-lg">
	<div class="flex h-30 w-full items-center justify-center">
		<!-- Placeholder for profile picture -->
		<div class="relative mt-15 flex w-25 items-center justify-center">
			<Avatar src={imageUrl} {name} size="md" rounded="rounded-full" shadow="sm" />
		</div>
	</div>
	<br />
	<br />
	<div class="mb-2 text-center text-xl font-bold">
		{name}
		<p class="text-primary-500">{jobTitle}</p>
	</div>
	<div class="mx-auto block w-max">
		<a href={'mailto:' + email} class="inline-block" aria-hidden="true">
			<button class="h-10 w-10  font-bold" aria-hidden="true">
				<i class="fas fa-envelope fa-lg text-primary-500"></i>
			</button>
		</a>
		<a href={linkedIn} class="inline-block" aria-hidden="true">
			<button class="h-10 w-10  font-bold " aria-hidden="true">
				<i class="fab fa-linkedin fa-lg text-primary-500"></i>
			</button>
		</a>
	</div>
	<div class="mb-5 items-center px-8 py-2">
		<p class="py-1"><strong>YEAR:</strong> {year}</p>
		<p class="py-1"><strong>MAJOR:</strong> {major}</p>
		<p class="py-1"><strong>DESCRIPTION:</strong> {@render description?.()}</p>
	</div>
</div>
