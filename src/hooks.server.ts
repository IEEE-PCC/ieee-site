import { redirect, type Handle } from '@sveltejs/kit';

const SESSION_COOKIE = 'admin_session';

function hashToken(password: string): string {
	// Simple deterministic token from password (not crypto-grade, but sufficient for session cookie)
	let hash = 0;
	for (let i = 0; i < password.length; i++) {
		const char = password.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0;
	}
	return 'sess_' + Math.abs(hash).toString(36);
}

export function getSessionToken(password: string): string {
	return hashToken(password);
}

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	// Only guard /admin routes (except the login page itself)
	if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
		const sessionCookie = event.cookies.get(SESSION_COOKIE);
		const adminPassword =
			event.platform?.env?.ADMIN_PASSWORD || (import.meta.env.DEV ? 'admin' : undefined);

		if (!adminPassword) {
			throw redirect(303, '/admin/login');
		}

		const expectedToken = getSessionToken(adminPassword);

		if (sessionCookie !== expectedToken) {
			throw redirect(303, '/admin/login');
		}

		event.locals.authenticated = true;
	}

	return resolve(event);
};
