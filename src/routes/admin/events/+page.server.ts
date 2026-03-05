import { getEvents, setEvents } from '$lib/server/data';
import type { EventData } from '$lib/types';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const events = await getEvents(platform, fetch);
	return { events };
};

export const actions: Actions = {
	create: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const date = formData.get('date') as string;
		const location = formData.get('location') as string;

		if (!title || !date || !location) {
			return fail(400, { error: 'All fields are required' });
		}

		const events = await getEvents(platform, fetch);
		const newEvent: EventData = {
			id: crypto.randomUUID(),
			title,
			date,
			location
		};
		events.push(newEvent);
		await setEvents(platform, events);

		return { success: true };
	},

	update: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const index = parseInt(formData.get('index') as string);
		const title = formData.get('title') as string;
		const date = formData.get('date') as string;
		const location = formData.get('location') as string;

		if (!title || !date || !location) {
			return fail(400, { error: 'All fields are required' });
		}

		const events = await getEvents(platform, fetch);
		if (index < 0 || index >= events.length) {
			return fail(400, { error: 'Invalid event index' });
		}

		events[index] = { ...events[index], title, date, location };
		await setEvents(platform, events);

		return { success: true };
	},

	delete: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const index = parseInt(formData.get('index') as string);

		const events = await getEvents(platform, fetch);
		if (index < 0 || index >= events.length) {
			return fail(400, { error: 'Invalid event index' });
		}

		events.splice(index, 1);
		await setEvents(platform, events);

		return { success: true };
	}
};
