import { getOfficers } from '$lib/server/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const officers = await getOfficers(platform, fetch);
	return { officers };
};
