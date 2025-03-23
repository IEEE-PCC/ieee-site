import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const eventsFilePath = path.resolve('static/data/events.json');

// Helper function to read events data from a file
function readEventsData() {
	if (!fs.existsSync(eventsFilePath)) {
		throw new Error('Events data file not found');
	}

	const eventsData = fs.readFileSync(eventsFilePath, 'utf-8');
	return JSON.parse(eventsData);
}

// Validate the month format (YYYY-MM)
function validateMonth(month: string | null): boolean {
	if (!month) return true; // If no month is provided, it's considered valid
	const regex = /^\d{4}-(0[1-9]|1[0-2])$/; // Format: YYYY-MM
	return regex.test(month);
}

export async function GET({ url }) {
	try {
		// Extract the 'month' query parameter
		const month = url.searchParams.get('month');

		// Validate month if it's provided
		if (month && !validateMonth(month)) {
			return json({ error: 'Invalid month format. Use YYYY-MM.' }, { status: 400 });
		}

		// Read events data from file
		const eventsJson = readEventsData();

		// Filter events based on the month
		let filteredEvents = eventsJson;
		if (month) {
			filteredEvents = eventsJson.filter(
				(event: { date: string }) => event.date.includes(month) // Assumes date is in 'YYYY-MM-DD' format
			);
		}

		// Return the filtered events as JSON
		return json(filteredEvents);
	} catch (error) {
		console.error('Error fetching events:', error);
		return json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
