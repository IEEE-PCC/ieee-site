<script lang="ts">
	import type { EventData } from '$lib/types';

	interface Props {
		eventsData: EventData[];
	}

	let { eventsData }: Props = $props();
</script>

<div
	class="overflow-x-auto rounded-lg px-2 pb-8 shadow-lg [-webkit-overflow-scrolling:touch] sm:px-8"
>
	<table
		class="mx-auto w-full max-w-5xl table-auto border-separate border-spacing-0 rounded-lg shadow-sm"
	>
		<thead>
			<tr
				class="bg-gradient-to-r from-blue-500 to-blue-600 text-white dark:from-blue-800 dark:to-blue-900"
			>
				<th
					class="border border-gray-200 px-3 py-2 text-sm font-semibold tracking-wide uppercase sm:px-4 sm:text-lg dark:border-gray-700"
					>Event Name</th
				>
				<th
					class="border border-gray-200 px-3 py-2 text-sm font-semibold tracking-wide uppercase sm:px-4 sm:text-lg dark:border-gray-700"
					>Date</th
				>
				<th
					class="border border-gray-200 px-3 py-2 text-sm font-semibold tracking-wide uppercase sm:px-4 sm:text-lg dark:border-gray-700"
					>Location</th
				>
			</tr>
		</thead>
		<tbody>
			{#each eventsData as event}
				<tr
					class="border-b transition-colors odd:bg-gray-100 even:bg-white hover:bg-gray-100 dark:border-gray-600 dark:odd:bg-gray-800 dark:even:bg-gray-900 dark:hover:bg-gray-800"
				>
					<td class="border border-gray-200 p-3 text-sm sm:p-4 sm:text-base dark:border-gray-700"
						>{event.title}</td
					>
					<td
						class="border border-gray-200 p-3 text-sm whitespace-nowrap sm:p-4 sm:text-base dark:border-gray-700"
						>{event.date}</td
					>
					<td class="border border-gray-200 p-3 text-sm sm:p-4 sm:text-base dark:border-gray-700">
						{#if event.location.startsWith('http')}
							<a
								href={event.location}
								target="_blank"
								class="relative z-20 block rounded-full bg-blue-100 px-3 py-1 text-center text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-700"
							>
								View Map
							</a>
						{:else}
							<p>{event.location}</p>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
