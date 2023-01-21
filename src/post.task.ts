import type {Task} from '@feltcoop/gro';
import {z} from 'zod';
import {stripStart, stripEnd} from '@feltcoop/util/string.js';
import {formatFile} from '@feltcoop/gro/dist/format/formatFile.js';

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
	run: async ({args, fs, log, invokeTask}) => {
		const {url, date} = args;

		const {origin, pathname} = new URL(url);

		const path = stripEnd(stripStart(pathname, '/'), '/');

		// Find the next module to create.
		let postPath: string;
		let index = 0;
		while (true) {
			postPath = toPostPath(pathname, index);
			// eslint-disable-next-line no-await-in-loop
			if (await fs.exists(postPath)) {
				index++;
			} else {
				break;
			}
		}

		const unformatted = `
			<script lang="ts" context="module">
				import type {FeedItemData} from '$lib/feed';
				export const post: FeedItemData = {
					id: '${origin}/${path}/${index}',
					title: 'Some title todo',
					url: '${origin}/${path}/some-title-todo',
					date_published: '${date}',
					date_modified: '${date}',
					summary: 'todo',
					tags: ['todo'],
				};
			</script>
			<script lang="ts">
				import {base} from '$app/paths';
			</script>
			<p>
				<a href="{base}/a/b/c">a local link</a>
			</p>
		`;
		const formatted = await formatFile(fs, postPath, unformatted);

		await fs.writeFile(postPath, formatted);

		await invokeTask('gen');

		log.info(`created empty blog post with index ${index} at ${postPath}`);
	},
};

const toPostPath = (pathname: string, index: number): string =>
	'src/routes' + pathname + '/[slug]/' + index + '.svelte';
