import {SvelteComponent, getContext, setContext} from 'svelte';
import {strip_end} from '@grogarden/util/string.js';

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

export interface BlogPostItem extends BlogPostData {
	/**
	 * Blog path with post blog_id.
	 */
	id: string;

	/**
	 * Blog path with post slug.
	 */
	url: string;

	/**
	 * Incrementing 1-based integer.
	 */
	blog_id: number;

	tags: string[]; // required
}

export const resolve_blog_post_item = (
	blog_id: number,
	blog_url: string,
	post: BlogPostData,
): BlogPostItem => {
	const final_blog_url = strip_end(blog_url, '/');
	return {
		id: final_blog_url + '/' + blog_id,
		url: final_blog_url + '/' + post.slug,
		blog_id,
		title: post.title,
		slug: post.slug,
		date_published: post.date_published,
		date_modified: post.date_modified,
		summary: post.summary,
		tags: post.tags ?? [],
		comments: post.comments,
	};
};

const KEY = Symbol('blog_feed');

export const get_blog_feed = (): BlogFeed => getContext(KEY);

export const set_blog_feed = (feed: BlogFeed): BlogFeed => setContext(KEY, feed);
