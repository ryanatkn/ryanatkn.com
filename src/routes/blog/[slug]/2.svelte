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
	const sections = [
		{slug: 'introduction', name: 'Introduction'},
		{slug: 'implementation', name: 'Implementation'},
		{slug: 'conclusion', name: 'Conclusion'},
		{slug: 'references', name: 'References'},
		{slug: 'replies', name: 'Replies'},
	];
</script>

<script lang="ts">
	import BlogReplies from '$lib/BlogReplies.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';

	// https://fosstodon.org/@rauschma/110728406134660568
	// const host = 'fosstodon.org';
	// const id = '110728406134660568';
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
			This website is a bundle of plain static files - HTML, JavaScript, CSS, and some images -
			hosted for free by <a href="https://pages.github.com/">GitHub Pages</a>. In addition to this
			blog post content, which is available as <a href="">an Atom feed</a>, this page makes calls to
			a Mastodon API at <a href="https://hachyderm.io/">hachyderm.io</a> to load blog comments. The
			site is just a bunch of static files made with
			<a href="https://svelte.dev/">Svelte</a>
			and
			<a href="https://kit.svelte.dev/">SvelteKit</a>
			- here's
			<a href="https://github.com/ryanatkn/ryanatkn.com">the source code</a>.
		</p>
		<p>
			Static sites are cheap to serve and easy to reason about, but they have limitations. I like
			computers because they are dynamic, and static sites seem to be in friction with this idea.
			Big tech companies made big platforms by making their content dynamic in the 00's and 10's of
			the 21st century.
		</p>
		<p>
			The comments below are powered by <a href="https://joinmastodon.org/">Mastodon</a>, an
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
			<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>.
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
		<p>
			Recapping, this is a static site hosted by GitHub with dynamic commenting powered by Mastodon.
			They charge no money for these services, and you can fund them in different ways.
		</p>
		<p>
			We have allowlist-based moderation through likes by the author, and a good effort at
			efficiency. I may have missed it, but I didn't see a way in the API to get favourites for many
			statuses at once - I make an API call for every post with 1+ likes.
		</p>
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
	<section class="prose">
		<h2>
			<HashLink slug="conclusion">References</HashLink>
		</h2>
		<ul>
			<li>
				<a href="https://cassidyjames.com/blog/fediverse-blog-comments-mastodon/">
					"Toot toot! Mastodon-powered Blog Comments"
				</a>
			</li>
			<li>
				<a href="https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/">
					"Client-side comments with Mastodon on a static Jekyll website"
				</a>
			</li>
		</ul>
	</section>
	<hr />
	<section>
		<div class="prose"><h2><HashLink slug="replies">Replies</HashLink></h2></div>
		<BlogReplies {host} {id} />
	</section>
</div>
