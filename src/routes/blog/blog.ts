import type {BlogFeedData} from '$lib/blog.js';

// TODO BLOCK redirect from the numbers or render UI to navigate to it

export const blog: BlogFeedData = {
	title: 'Ryan Atkinson',
	id: 'https://www.ryanatkn.com/', // TODO BLOCK `/blog` pathname?
	home_page_url: 'https://www.ryanatkn.com/',
	description: 'blog of a web developer building free and open source community software',
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
