// TODO maybe revert this to Svelte module context?

import type {FeedItemData} from '$lib/feed';

export const post: FeedItemData = {
	id: 'https://www.ryanatkn.com/blog/3',
	title: "I'm more builder than steward",
	url: 'https://www.ryanatkn.com/blog/allowlisted-comments-on-a-static-blog-with-mastodon',
	date_published: '2023-07-24T01:50:35.017Z',
	date_modified: '2023-07-24T01:50:35.017Z',
	summary:
		'I describe how I am and want to be more of a builder of networked spaces than a steward of them. Also, how I implemented allowlisted Mastodon comments on my static blog with TypeScript, Svelte, and SvelteKit.',
	tags: [
		'web',
		'personal',
		'builders',
		'stewards',
		'networked spaces',
		'blog comments',
		'Mastodon',
		'ActivityPub',
		'ActivityStreams',
		'Fediverse',
		'design',
		'technology',
		'software',
	],
};
