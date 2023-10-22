import type {Task} from '@grogarden/gro';
import {z} from 'zod';
import {strip_start, strip_end} from '@grogarden/util/string.js';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';
import {writeFile} from 'node:fs/promises';

// TODO probably source this from `gro.config.ts` or other config
const DEFAULT_URL = 'https://www.ryanatkn.com/blog';

const Args = z
	.object({
		url: z.string({description: 'url to the blog post directory'}).default(DEFAULT_URL),
		date: z.string({description: "the post's date_published"}).default(new Date().toISOString()),
	})
	.strict();
type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	summary: 'create a new blog post',
	Args,
	run: async ({args, log, invoke_task}) => {
		const {url, date} = args;

		const {origin, pathname} = new URL(url);

		const path = strip_end(strip_start(pathname, '/'), '/');

		// Find the next module to create.
		let postPath: string;
		let index = 0;
		while (true) {
			postPath = toPostPath(pathname, index);
			// eslint-disable-next-line no-await-in-loop
			if (await exists(postPath)) {
				index++;
			} else {
				break;
			}
		}

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

		await writeFile(postPath, formatted);

		await invoke_task('gen');

		log.info(`created empty blog post with index ${index} at ${postPath}`);
	},
};

const toPostPath = (pathname: string, index: number): string =>
	'src/routes' + pathname + '/[slug]/' + index + '.svelte';
