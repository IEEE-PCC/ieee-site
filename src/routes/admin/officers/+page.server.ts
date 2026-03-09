import { getOfficers, setOfficers } from '$lib/server/data';
import type { Officer } from '$lib/types';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform, fetch }) => {
	const officers = await getOfficers(platform, fetch);
	return { officers };
};

function extractOfficer(
	formData: FormData,
	existingId?: string
): (Omit<Officer, 'id'> & { id: string }) | null {
	const name = formData.get('name') as string;
	const jobTitle = formData.get('jobTitle') as string;
	const year = formData.get('year') as string;
	const major = formData.get('major') as string;
	const imageUrl = formData.get('imageUrl') as string;
	const linkedIn = (formData.get('linkedIn') as string) || '';
	const email = (formData.get('email') as string) || '';
	const description = formData.get('description') as string;

	if (!name || !jobTitle || !year || !major || !imageUrl || !description) {
		return null;
	}

	return {
		id: existingId ?? crypto.randomUUID(),
		name,
		jobTitle,
		year,
		major,
		imageUrl,
		linkedIn,
		email,
		description
	};
}

type OfficerCategory = 'execOfficers' | 'committeeOfficers' | 'councilor';

export const actions: Actions = {
	create: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const category = formData.get('category') as OfficerCategory;

		const officer = extractOfficer(formData);
		if (!officer) {
			return fail(400, {
				error: 'Name, job title, year, major, image URL, and description are required'
			});
		}

		const officers = await getOfficers(platform, fetch);
		if (!officers[category]) {
			return fail(400, { error: 'Invalid category' });
		}

		officers[category].push(officer);
		await setOfficers(platform, officers);

		return { success: true };
	},

	update: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const category = formData.get('category') as OfficerCategory;
		const index = parseInt(formData.get('index') as string);

		const officers = await getOfficers(platform, fetch);
		if (
			!officers[category] ||
			!Number.isInteger(index) ||
			index < 0 ||
			index >= officers[category].length
		) {
			return fail(400, { error: 'Invalid category or index' });
		}

		const existingId = officers[category][index].id;
		const officer = extractOfficer(formData, existingId);
		if (!officer) {
			return fail(400, { error: 'Required fields missing' });
		}

		officers[category][index] = officer;
		await setOfficers(platform, officers);

		return { success: true };
	},

	delete: async ({ request, platform, fetch }) => {
		const formData = await request.formData();
		const category = formData.get('category') as OfficerCategory;
		const index = parseInt(formData.get('index') as string);

		const officers = await getOfficers(platform, fetch);
		if (
			!officers[category] ||
			!Number.isInteger(index) ||
			index < 0 ||
			index >= officers[category].length
		) {
			return fail(400, { error: 'Invalid category or index' });
		}

		officers[category].splice(index, 1);
		await setOfficers(platform, officers);

		return { success: true };
	}
};
