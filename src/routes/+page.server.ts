import { getEvents } from '$lib/server/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const events = await getEvents(platform, fetch);
	return { events };
};
