<script lang="ts" context="module">
	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/2',
		title: 'Blog comments with Mastodon on a static website with SvelteKit',
		url: 'https://www.ryanatkn.com/blog/blog-comments-with-mastodon-on-a-static-sveltekit-website',
		date_published: '2023-07-19T21:44:17.224Z',
		date_modified: '2023-07-19T21:44:17.224Z',
		summary: 'Adding Mastodon comments to my static blog with TypeScript, Svelte, and SvelteKit.',
		tags: [
			'web',
			'ActivityPub',
			'ActivityStreams',
			'Fediverse',
			'social media',
			'design',
			'technology',
			'software',
		],
	};

	// TODO use `HashLink` info to automatically generate an index
	const sections = ['introduction', 'implementation', 'conclusion', 'replies'];
</script>

<script lang="ts">
	import BlogReplies from '$lib/BlogReplies.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';

	const host = 'mstdn.social';
	const id = '110702983310017651';
</script>

<div>
	<section class="prose">
		<br />
		<BlogPostIndex {sections} />
	</section>
	<section class="prose">
		<h2>
			<HashLink slug="introduction">Introduction</HashLink>
		</h2>
		<p>
			<a href="https://github.com/ryanatkn/ryanatkn.com">This repo</a> is hosted on
			<a href="https://pages.github.com/">GitHub Pages</a>, a free static host that lets me use my
			own domain.
		</p>
		<hr />
	</section>
	<section>
		<div class="prose"><h2><HashLink slug="replies">Replies</HashLink></h2></div>
		<BlogReplies {host} {id} />
	</section>
</div>
