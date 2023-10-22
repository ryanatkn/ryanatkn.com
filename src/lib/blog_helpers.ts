import {exists} from '@grogarden/gro/exists.js';
import {strip_end} from '@grogarden/util/string.js';
import {join} from 'node:path';

import type {BlogPostId, BlogPostData, BlogPostItem, BlogPostModule} from '$lib/blog.js';

export const resolve_blog_post_item = (
	blog_post_id: BlogPostId,
	blog_url: string,
	post: BlogPostData,
): BlogPostItem => {
	const final_blog_url = strip_end(blog_url, '/');
	return {
		id: final_blog_url + '/' + blog_post_id,
		url: final_blog_url + '/' + post.slug,
		blog_post_id,
		title: post.title,
		slug: post.slug,
		date_published: post.date_published,
		date_modified: post.date_modified,
		summary: post.summary,
		tags: post.tags ?? [],
		comments: post.comments,
	};
};

/**
 * Returns an array of all of the sequential blog post ids starting with 1.
 * When it fails to find the next id, the sequence ends.
 */
export const collect_blog_post_ids = async (blog_dir: string): Promise<BlogPostId[]> => {
	const blog_post_ids: BlogPostId[] = [];

	let blog_post_id: BlogPostId = 1;
	while (true) {
		// eslint-disable-next-line no-await-in-loop
		if (!(await exists(to_blog_post_path(blog_dir, blog_post_id)))) {
			break;
		}
		blog_post_ids.push(blog_post_id);
		blog_post_id++;
	}

	return blog_post_ids;
};

export const load_blog_post_modules = (
	blog_post_ids: BlogPostId[],
	blog_dirname: string,
): Promise<BlogPostModule[]> =>
	Promise.all(
		blog_post_ids.map(async (item) => import(`$routes/${blog_dirname}/${item}/+page.svelte`)),
	);

export const to_next_blog_post_id = (blog_post_ids: BlogPostId[]): BlogPostId => {
	const last = blog_post_ids.at(-1);
	return last === undefined ? 1 : last + 1;
};

export const to_blog_post_path = (blog_dir: string, blog_post_id: BlogPostId): string =>
	join(blog_dir, blog_post_id + '/+page.svelte');
