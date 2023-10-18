import type {Feed} from '$lib/feed.js';
import {posts} from '$routes/blog/blog.js';

// TODO should this module be `blog` instead of `feed`?

export const feed: Feed = {
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
		feed_url: 'https://www.ryanatkn.com/blog/feed.xml',
	},
	items: posts,
};
