<script lang="ts">
	interface Event {
		location: string,
		title: string,
		date: string,
	}
	interface Props {
		eventsData: Event[];
	}

	let {eventsData}: Props = $props();
</script>

<div class="overflow-x-auto pb-8 px-4 sm:px-8 shadow-lg rounded-lg">
	<table class="mx-auto table-auto border-separate border-spacing-0 w-full max-w-5xl rounded-lg shadow-sm">
		<thead>
		<tr class="bg-gradient-to-r from-blue-500 to-blue-600 text-white dark:from-blue-800 dark:to-blue-900">
			<th class="px-4 py-2 text-lg font-semibold border border-gray-200 dark:border-gray-700 uppercase tracking-wide">Event Name</th>
			<th class="px-4 py-2 text-lg font-semibold border border-gray-200 dark:border-gray-700 uppercase tracking-wide">Date</th>
			<th class="px-4 py-2 text-lg font-semibold border border-gray-200 dark:border-gray-700 uppercase tracking-wide">Location</th>
		</tr>
		</thead>
		<tbody>
		{#each eventsData as event}
			<tr class="border-b dark:border-gray-600 odd:bg-gray-100 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
				<td class="p-4 border border-gray-200 dark:border-gray-700">{event.title}</td>
				<td class="p-4 border border-gray-200 dark:border-gray-700">{event.date}</td>
				<td class="p-4 border border-gray-200 dark:border-gray-700">
					{#if event.location.startsWith('http')}
						<a
							href={event.location}
							target="_blank"
							class="block relative z-20 py-1 px-3 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-700 transition-colors"
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