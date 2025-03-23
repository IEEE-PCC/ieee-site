import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const eventsFilePath = path.resolve('static/data/timeline.json');

// Helper function to read events data from a file
function readEventsData() {
	if (!fs.existsSync(eventsFilePath)) {
		throw new Error('Events data file not found');
	}

	const eventsData = fs.readFileSync(eventsFilePath, 'utf-8');
	return JSON.parse(eventsData);
}

export async function GET() {
	try {
		// Read events data from file
		const officersJson = readEventsData();
		return json(officersJson);
	} catch (error) {
		console.error('Error fetching events:', error);
		return json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
