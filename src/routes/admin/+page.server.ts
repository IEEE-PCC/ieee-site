import { getEvents, getOfficers, getTimeline } from '$lib/server/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const [events, officers, timeline] = await Promise.all([
		getEvents(platform, fetch),
		getOfficers(platform, fetch),
		getTimeline(platform, fetch)
	]);

	return {
		counts: {
			events: events.length,
			officers:
				officers.execOfficers.length +
				officers.committeeOfficers.length +
				officers.councilor.length,
			timeline: timeline.length
		}
	};
};
