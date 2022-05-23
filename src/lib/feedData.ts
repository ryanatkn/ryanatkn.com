import type {FeedData} from '$lib/feed';

export const feedData: FeedData = {
	title: 'Ryan Atkinson',
	id: 'https://www.ryanatkn.com/',
	home_page_url: 'https://www.ryanatkn.com/',
	description: 'blog of a web developer making open source community software',
	icon: 'https://www.ryanatkn.com/favicon.png',
	favicon: 'https://www.ryanatkn.com/favicon.png',
	author: {
		name: 'Ryan Atkinson',
		url: 'https://www.ryanatkn.com/',
		email: 'mail@ryanatkn.com',
	},
	atom: {
		feed_url: 'https://www.ryanatkn.com/feed.xml',
	},
	items: [
		{
			id: 'https://www.ryanatkn.com/blog/0',
			title: 'A year of making open source web community software',
			url: 'https://www.ryanatkn.com/blog/0',
			date_published: '2022-05-13T01:42:23.000Z',
			date_modified: '2022-05-13T01:42:23.000Z',
			summary:
				'I discuss my work on open source community software called Felt over the last year, giving a brief overview of the design and technology choices, and announcing our newsletter and podcast at FeltCoop.',
			tags: ['web', 'technology', 'software', 'opensource', 'community'],
		},
		{
			id: 'https://www.ryanatkn.com/blog/1',
			title: 'An ongoing attempt to credit my influences',
			url: 'https://www.ryanatkn.com/blog/1',
			date_published: '2022-05-23T18:38:44.607Z',
			date_modified: '2022-05-23T18:38:44.607Z',
			summary:
				'I attempt to give credit to the people and projects that have influenced my work. This is an impossible task so it will be an evolving process.',
			tags: ['credit'],
		},
	],
};
