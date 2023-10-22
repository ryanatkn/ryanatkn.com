import type {Task} from '@grogarden/gro';
import {z} from 'zod';
import {format_file} from '@grogarden/gro/format_file.js';
import {writeFile} from 'node:fs/promises';
import {cwd} from 'node:process';
import {join} from 'node:path';

import {collect_blog_post_ids, to_next_blog_post_id} from '$lib/blog_helpers.js';

const Args = z
	.object({
		date: z.string({description: "the post's date_published"}).optional(),
	})
	.strict();
type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	summary: 'create a new blog post',
	Args,
	run: async ({args, log, invoke_task}) => {
		const {date = new Date().toISOString()} = args;

		// TODO @multiple parameterize and refactor
		const dir = cwd();
		const blog_dirname = 'blog';
		const routes_path = 'src/routes'; // TODO read from SvelteKit config;
		const blog_dir = join(dir, routes_path, blog_dirname);

		const blog_post_ids = await collect_blog_post_ids(blog_dir);

		const next_blog_post_id = to_next_blog_post_id(blog_post_ids);

		const next_blog_post_path = join(blog_dir, next_blog_post_id + '/+page.svelte');

		const unformatted = `
			<script lang="ts" context="module">
				import type {BlogPostData} from '$lib/blog.js';

				export const post = {
					title: 'Some title todo',
					slug: 'some-title-todo',
					date_published: '${date}',
					date_modified: '${date}',
					summary: 'todo',
					tags: ['todo'],
				} satisfies  BlogPostData;
			</script>

			<script lang="ts">
				import {base} from '$app/paths';
			</script>

			<p>
				<a href="{base}/a/b/c">todo a local link example</a>
			</p>
		`;
		const formatted = await format_file(unformatted, {parser: 'svelte'});

		await writeFile(next_blog_post_path, formatted);

		await invoke_task('gen');

		log.info(`created empty blog post with index ${next_blog_post_id} at ${next_blog_post_path}`);
	},
};
