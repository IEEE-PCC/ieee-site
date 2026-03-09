import { redirect, type Handle } from '@sveltejs/kit';

const SESSION_COOKIE = 'admin_session';

async function hmacSign(password: string): Promise<string> {
	const encoder = new TextEncoder();
	const key = await crypto.subtle.importKey(
		'raw',
		encoder.encode(password),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	const signature = await crypto.subtle.sign('HMAC', key, encoder.encode('admin_session'));
	const bytes = new Uint8Array(signature);
	return 'sess_' + Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function getSessionToken(password: string): Promise<string> {
	return hmacSign(password);
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

		const expectedToken = await getSessionToken(adminPassword);

		if (sessionCookie !== expectedToken) {
			throw redirect(303, '/admin/login');
		}

		event.locals.authenticated = true;
	}

	return resolve(event);
};
