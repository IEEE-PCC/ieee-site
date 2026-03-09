import { redirect, fail } from '@sveltejs/kit';
import { getSessionToken } from '../../../hooks.server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, platform }) => {
	const adminPassword =
		platform?.env?.ADMIN_PASSWORD || (import.meta.env.DEV ? 'admin' : undefined);
	if (adminPassword) {
		const expectedToken = await getSessionToken(adminPassword);
		if (cookies.get('admin_session') === expectedToken) {
			throw redirect(303, '/admin');
		}
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies, platform }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;

		const adminPassword =
			platform?.env?.ADMIN_PASSWORD || (import.meta.env.DEV ? 'admin' : undefined);

		if (!adminPassword || password !== adminPassword) {
			return fail(401, { error: 'Invalid password' });
		}

		const token = await getSessionToken(adminPassword);
		cookies.set('admin_session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !import.meta.env.DEV,
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/admin');
	}
};
