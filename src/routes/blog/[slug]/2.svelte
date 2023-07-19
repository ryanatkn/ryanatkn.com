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
			This website's <a href="https://github.com/ryanatkn/ryanatkn.com">source code</a> is hosted on
			<a href="https://pages.github.com/">GitHub Pages</a>, a free static host that lets me use my
			own domain.
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="implementation">Implementation</HashLink>
		</h2>
		<p>
			Here's <a href="https://github.com/ryanatkn/ryanatkn.com/pull/12/files">the GitHub PR</a>.
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="conclusion">Conclusion</HashLink>
		</h2>
		<p>So,..</p>
		<p>
			I also maintain <a href="https://ryanatkn.github.io/corpus-activity-streams"
				>these alternative docs</a
			>
			for the <a href="https://wikipedia.org/wiki/ActivityStreams">ActivityStreams</a> vocabulary of
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>, the protocol behind
			Mastodon.
		</p>
	</section>
	<hr />
	<section>
		<div class="prose"><h2><HashLink slug="replies">Replies</HashLink></h2></div>
		<BlogReplies {host} {id} />
	</section>
</div>
