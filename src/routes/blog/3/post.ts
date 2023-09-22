// TODO maybe revert this to Svelte module context?

import type {FeedItemData} from '$lib/feed';

export const post: FeedItemData = {
	id: 'https://www.ryanatkn.com/blog/3',
	title: 'My role is builder not steward',
	url: 'https://www.ryanatkn.com/blog/my-role-is-builder-not-steward',
	date_published: '2023-07-24T01:50:35.017Z',
	date_modified: '2023-07-24T01:50:35.017Z',
	summary:
		"I describe how I think I'm better suited for the builder roles when working on networked spaces, and how I like them, but I don't like steward roles and the responsibilities they carry, nor am I motivated to improve at them. Also, how I implemented allowlisted Mastodon comments on my static blog with TypeScript, Svelte, and SvelteKit.",
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
