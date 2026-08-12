import { getTimeline } from '$lib/server/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const timeline = await getTimeline(platform, fetch);
	return { timeline };
};
