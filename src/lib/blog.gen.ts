import type {Gen} from '@grogarden/gro/gen.js';
import {cwd} from 'node:process';
import {join, relative} from 'node:path';

import {create_atom_feed} from '$lib/feed.js';
import type{ BlogPostModule} from '$lib/blog.js';
import {collect_blog_ids, resolve_blog_post_item} from '$lib/blog_helpers.js';

// TODO extract to @fuz.dev/fuz_blog

export const gen: Gen = async ({origin_id}) => {
	// TODO parameterize
	const dir = cwd();
	const blog_dirname = 'blog';
	const blog_dir = join(dir, 'src/routes', blog_dirname); // TODO routes should be read from SvelteKit config

	const generated_by = relative(dir, origin_id);

	const {feed} = await import(join(blog_dir, 'feed.js')); // TODO BLOCK using this is a problem because it relies on `posts`

	const blog_ids = await collect_blog_ids(blog_dir);

	const modules: BlogPostModule[] = await Promise.all(
		blog_ids.map(async (item) => import(`$routes/${blog_dirname}/${item}/+page.svelte`)),
	);

	// TODO BLOCK zod schema validation including parsing the status context url (with zod?)
	// for (const mod of modules) {
	// 	validate_blog_post(mod.post)
	// }

	const blog_url = feed.id + blog_dirname;

	const items = modules.map((mod, i) => resolve_blog_post_item(i + 1, blog_url, mod.post));

	return [
		{
			filename: join(dir, 'static/blog/feed.xml'),
			content: create_atom_feed(feed),
		},
		{
			filename: join(blog_dir, 'posts.ts'),
			content: `
				// generated by ${generated_by}

				import type {BlogPostItem} from '$lib/blog.js';

				export const posts: BlogPostItem[] = [${items.map((item) => JSON.stringify(item)).join(',')}];

				// generated by ${generated_by}
			`,
		},
		...(await Promise.all(
			modules.map(async (item, i) => {
				const post = item.post;
				const slug = post.slug;
				const blog_id = i + 1;
				return {
					filename: join(blog_dir, slug, '+page.svelte'),
					content: `
						<!-- generated by ${generated_by} -->

						<script lang="ts">
							import BlogPost${blog_id} from '../${blog_id}/+page.svelte';
						</script>

						<BlogPost${blog_id} />

						<!-- generated by ${generated_by} -->
					`,
				};
			}),
		)),
	];
};

// const to_prerender_entries = (blog: Feed): string[] => {
// 	const entries = [];
// 	for (let index = 0; index < blog.items.length; index++) {
// 		const item = blog.items[index];
// 		const {pathname} = new URL(item.url);
// 		entries.push(pathname);
// 		// replace the last segment with the index
// 		for (let i = pathname.length - 1; i >= 0; i--) {
// 			if (pathname[i] === '/') {
// 				entries.push(pathname.substring(0, i + 1) + (1 + index));
// 				break;
// 			}
// 		}
// 	}
// 	return entries;
// };
