import {SvelteComponent, getContext, setContext} from 'svelte';
import type {Flavored} from '@grogarden/util/types.js';

import type {Feed} from '$lib/feed.js';

export interface BlogFeed extends Feed {
	items: BlogPostItem[];
}

/**
 * The author-defined data for each post.
 */
export interface BlogPostData {
	title: string;
	slug: string;
	date_published: string; // TODO maybe calculated instead of manually defined?
	date_modified: string; // TODO maybe calculated instead of manually defined?
	summary: string;
	tags?: string[];
	comments?: {
		url: string;
		type: 'mastodon';
	};
}

export interface BlogPostModule {
	post: BlogPostData;
	default: typeof SvelteComponent<any>;
}

export type BlogPostId = Flavored<number, 'BlogPostId'>;

export interface BlogPostItem extends BlogPostData {
	/**
	 * Blog post path with `blog_post_id`.
	 */
	id: string;

	/**
	 * Blog post path with `slug`.
	 */
	url: string;

	/**
	 * Incrementing 1-based integer.
	 */
	blog_post_id: BlogPostId;

	tags: string[]; // required
}

const KEY = Symbol('blog_feed');

export const get_blog_feed = (): BlogFeed => getContext(KEY);

export const set_blog_feed = (feed: BlogFeed): BlogFeed => setContext(KEY, feed);
