import type {BlogFeed} from '$lib/blog.js';
import {posts} from '$routes/blog/posts.js';

// TODO BLOCK redirect from the numbers

// TODO BLOCK see the gen file, this has a circular dependency with `posts`,
// maybe have the user define the feed metadata, and then also generate this module?
// where does that metadata belong? `src/blog/metadata.ts` and `src/blog/feed.ts`?

// TODO should this module be `blog` instead of `feed`? `items` instead of `posts`?

export const feed: BlogFeed = {
	title: 'Ryan Atkinson',
	id: 'https://www.ryanatkn.com/',
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
	items: posts,
};
