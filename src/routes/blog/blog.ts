import type {Blog_Feed_Data} from '$lib/blog.js';

export const blog: Blog_Feed_Data = {
	title: 'Ryan Atkinson',
	id: 'https://www.ryanatkn.com/',
	home_page_url: 'https://www.ryanatkn.com/',
	description: 'blog of a web developer building free and open source tools and toys',
	icon: 'https://www.ryanatkn.com/favicon.png',
	favicon: 'https://www.ryanatkn.com/favicon.png',
	author: {
		name: 'Ryan Atkinson',
		url: 'https://www.ryanatkn.com/',
		email: 'mail@ryanatkn.com',
	},
	atom: {
		feed_url: 'https://www.ryanatkn.com/blog/feed.xml',
	},
};
