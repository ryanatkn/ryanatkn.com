import {exists} from '@grogarden/gro/exists.js';
import {strip_end} from '@grogarden/util/string.js';
import { join } from 'node:path';

import type { BlogId, BlogPostData, BlogPostItem } from '$lib/blog.js';

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



export const collect_blog_ids = async (blog_dir: string): Promise<BlogId[]> => {
	const items: number[] = [];

	let i = 1;
	while (true) {
		// eslint-disable-next-line no-await-in-loop
		if (!(await exists(join(blog_dir, `${i}/+page.svelte`)))) {
			break;
		}
		items.push(i);
		i++;
	}

	return items;
};
