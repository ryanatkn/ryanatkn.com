import type {FeedData} from '$lib/feed';
import {post as post0} from '../routes/blog/[slug]/0.svelte';

// TODO BLOCK probably generate `feedData.json` or `blog.json` from the svelte files,
// and for the top-level data, could use a gen file
// that imports the blog json from a specific module, or perhaps from the root +page exports that data
// (similar to frontmatter, but using Svelte semantics, problem is we may want tools to write back to this data,
// so maybe we'd prefer a JSON file instead that's imported by the svelte?)

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
	items: [post0],
};
