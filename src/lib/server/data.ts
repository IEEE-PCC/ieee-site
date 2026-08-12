import type { EventData, OfficersData, TimelineEntry, AboutData } from '$lib/types';

type FetchFn = typeof fetch;

async function getFromKV<T>(
	platform: App.Platform | undefined,
	fetchFn: FetchFn,
	key: string,
	staticPath: string
): Promise<T> {
	// Try KV first (production)
	if (platform?.env?.SITE_DATA) {
		const kv = platform.env.SITE_DATA;
		const data = await kv.get(key, 'json');
		if (data) return data as T;

		// Auto-seed: KV exists but key is empty — load from static and store
		const fallback = await fetchFromStatic<T>(fetchFn, staticPath);
		await kv.put(key, JSON.stringify(fallback));
		return fallback;
	}

	// Dev fallback: no KV available, read from static JSON
	return fetchFromStatic<T>(fetchFn, staticPath);
}

async function putToKV<T>(platform: App.Platform | undefined, key: string, data: T): Promise<void> {
	if (!platform?.env?.SITE_DATA) {
		console.log(`[dev] Would write to KV key "${key}":`, JSON.stringify(data).slice(0, 200));
		return;
	}
	await platform.env.SITE_DATA.put(key, JSON.stringify(data));
}

async function fetchFromStatic<T>(fetchFn: FetchFn, path: string): Promise<T> {
	const response = await fetchFn(path);
	return response.json() as Promise<T>;
}

// Events
export async function getEvents(
	platform: App.Platform | undefined,
	fetchFn: FetchFn
): Promise<EventData[]> {
	return getFromKV<EventData[]>(platform, fetchFn, 'events', '/api/events.json');
}

export async function setEvents(
	platform: App.Platform | undefined,
	events: EventData[]
): Promise<void> {
	await putToKV(platform, 'events', events);
}

// Officers
export async function getOfficers(
	platform: App.Platform | undefined,
	fetchFn: FetchFn
): Promise<OfficersData> {
	return getFromKV<OfficersData>(platform, fetchFn, 'officers', '/api/officers.json');
}

export async function setOfficers(
	platform: App.Platform | undefined,
	officers: OfficersData
): Promise<void> {
	await putToKV(platform, 'officers', officers);
}

// Timeline
export async function getTimeline(
	platform: App.Platform | undefined,
	fetchFn: FetchFn
): Promise<TimelineEntry[]> {
	return getFromKV<TimelineEntry[]>(platform, fetchFn, 'timeline', '/api/timeline.json');
}

export async function setTimeline(
	platform: App.Platform | undefined,
	timeline: TimelineEntry[]
): Promise<void> {
	await putToKV(platform, 'timeline', timeline);
}

// About
export async function getAbout(
	platform: App.Platform | undefined,
	fetchFn: FetchFn
): Promise<AboutData> {
	return getFromKV<AboutData>(platform, fetchFn, 'about', '/api/about.json');
}

export async function setAbout(
	platform: App.Platform | undefined,
	about: AboutData
): Promise<void> {
	await putToKV(platform, 'about', about);
}
