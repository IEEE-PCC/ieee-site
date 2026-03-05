import { getTimeline, setTimeline } from '$lib/server/data';
import type { TimelineEntry } from '$lib/types';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const timeline = await getTimeline(platform, fetch);
	return { timeline };
};

export const actions: Actions = {
	create: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const date = formData.get('date') as string;
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const icon = formData.get('icon') as string;
		const color = formData.get('color') as string;

		if (!date || !title || !description || !icon || !color) {
			return fail(400, { error: 'All fields are required' });
		}

		const timeline = await getTimeline(platform, fetch);
		const entry: TimelineEntry = {
			id: crypto.randomUUID(),
			date,
			title,
			description,
			icon,
			color
		};
		timeline.push(entry);
		await setTimeline(platform, timeline);

		return { success: true };
	},

	update: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const index = parseInt(formData.get('index') as string);
		const date = formData.get('date') as string;
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const icon = formData.get('icon') as string;
		const color = formData.get('color') as string;

		if (!date || !title || !description || !icon || !color) {
			return fail(400, { error: 'All fields are required' });
		}

		const timeline = await getTimeline(platform, fetch);
		if (index < 0 || index >= timeline.length) {
			return fail(400, { error: 'Invalid index' });
		}

		timeline[index] = { ...timeline[index], date, title, description, icon, color };
		await setTimeline(platform, timeline);

		return { success: true };
	},

	delete: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const index = parseInt(formData.get('index') as string);

		const timeline = await getTimeline(platform, fetch);
		if (index < 0 || index >= timeline.length) {
			return fail(400, { error: 'Invalid index' });
		}

		timeline.splice(index, 1);
		await setTimeline(platform, timeline);

		return { success: true };
	},

	reorder: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const from = parseInt(formData.get('from') as string);
		const to = parseInt(formData.get('to') as string);

		const timeline = await getTimeline(platform, fetch);
		if (from < 0 || from >= timeline.length || to < 0 || to >= timeline.length) {
			return fail(400, { error: 'Invalid index' });
		}

		const [item] = timeline.splice(from, 1);
		timeline.splice(to, 0, item);
		await setTimeline(platform, timeline);

		return { success: true };
	}
};
