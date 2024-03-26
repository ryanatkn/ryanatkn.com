import {exists} from '@ryanatkn/gro/fs.js';
import {strip_end} from '@ryanatkn/belt/string.js';
import {join} from 'node:path';

import type {Blog_Post_Id, Blog_Post_Data, Blog_Post_Item, Blog_Post_Module} from '$lib/blog.js';

export const resolve_blog_post_item = (
	blog_post_id: Blog_Post_Id,
	blog_url: string,
	post: Blog_Post_Data,
): Blog_Post_Item => {
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
export const collect_blog_post_ids = async (blog_dir: string): Promise<Blog_Post_Id[]> => {
	const blog_post_ids: Blog_Post_Id[] = [];

	let blog_post_id: Blog_Post_Id = 1;
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
	blog_post_ids: Blog_Post_Id[],
	blog_dirname: string,
): Promise<Blog_Post_Module[]> =>
	Promise.all(
		blog_post_ids.map(async (item) => import(`$routes/${blog_dirname}/${item}/+page.svelte`)),
	);

export const to_next_blog_post_id = (blog_post_ids: Blog_Post_Id[]): Blog_Post_Id => {
	const last = blog_post_ids.at(-1);
	return last === undefined ? 1 : last + 1;
};

export const to_blog_post_path = (blog_dir: string, blog_post_id: Blog_Post_Id): string =>
	join(blog_dir, blog_post_id + '/+page.svelte');
