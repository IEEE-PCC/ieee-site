import { getAbout } from '$lib/server/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const about = await getAbout(platform, fetch);
	return { about };
};
