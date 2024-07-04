import type {Task} from '@ryanatkn/gro';
import {z} from 'zod';
import {format_file} from '@ryanatkn/gro/format_file.js';
import {mkdir, writeFile} from 'node:fs/promises';
import {cwd} from 'node:process';
import {dirname, join} from 'node:path';

import {collect_blog_post_ids, to_next_blog_post_id} from '$lib/blog_helpers.js';

// TODO consider `_` args like `new` and `0` to bump the `updated` date
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

		const blog_post_ids = collect_blog_post_ids(blog_dir);

		const next_blog_post_id = to_next_blog_post_id(blog_post_ids);

		const next_blog_post_path = join(blog_dir, next_blog_post_id + '/+page.svelte');

		const unformatted = `
			<script lang="ts" context="module">
				import type {Blog_Post_Data} from '$lib/blog.js';

				export const post = {
					title: 'Some title todo',
					slug: 'some-title-todo',
					date_published: '${date}',
					date_modified: '${date}',
					summary: 'todo',
					tags: ['todo'],
				} satisfies  Blog_Post_Data;
			</script>

			<script lang="ts">
				import {base} from '$app/paths';
			</script>

			<p>
				<a href="{base}/a/b/c">todo a local link example</a>
			</p>
		`;
		const formatted = await format_file(unformatted, {parser: 'svelte'});

		await mkdir(dirname(next_blog_post_path), {recursive: true});
		await writeFile(next_blog_post_path, formatted, 'utf8');

		await invoke_task('gen');

		log.info(`created empty blog post with index ${next_blog_post_id} at ${next_blog_post_path}`);
	},
};
