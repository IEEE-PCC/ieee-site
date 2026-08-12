export interface EventData {
	id?: string;
	title: string;
	date: string;
	location: string;
}

export interface Officer {
	id?: string;
	name: string;
	jobTitle: string;
	year: string;
	major: string;
	imageUrl: string;
	linkedIn: string;
	email: string;
	description: string;
}

export interface OfficersData {
	execOfficers: Officer[];
	committeeOfficers: Officer[];
	councilor: Officer[];
}

export interface TimelineEntry {
	id?: string;
	date: string;
	title: string;
	description: string;
	icon: string;
	color: string;
}

export interface VisionCard {
	title: string;
	description: string;
	borderColor: string;
}

export interface FaqItem {
	value: string;
	icon: string;
	title: string;
	content: string;
	contentType: 'text' | 'list';
}

export interface AboutData {
	visionCards: VisionCard[];
	faqItems: FaqItem[];
}
