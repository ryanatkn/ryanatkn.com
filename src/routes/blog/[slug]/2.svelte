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
	// const host = 'mstdn.social';
	// const id = '110702983310017651';
	const host = 'hachyderm.io';
	const id = '110729727683117713';
</script>

<div class="width_md">
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
			hosted for free by <a href="https://pages.github.com/">GitHub Pages</a>. GitHub efficiently
			serves the blog post content at scale, including
			<a href="https://www.ryanatkn.com/feed.xml">the Atom feed</a>, and I don't have to worry about
			operations or hugs of death.
			<a href="https://github.com/ryanatkn/ryanatkn.com">The source code</a>
			that generates these files is written in <a href="https://svelte.dev/">Svelte</a> with
			<a href="https://kit.svelte.dev/">SvelteKit</a>.
		</p>
		<p>
			Although static, this site also has dynamic behavior. If you click the "load posts" button
			below, your browser sends a request to a <a href="https://joinmastodon.org/">Mastodon</a>
			instance that hosts <a href="https://hachyderm.io/@ryanatkn">my account</a> on
			<a href="https://hachyderm.io/">hachyderm.io</a>. Mastodon is an
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
			<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>. It requests information about a
			<a href="https://hachyderm.io/@ryanatkn">a post I made</a> that references this blog post
			using <a href="https://docs.joinmastodon.org/methods/statuses/#context">this API endpoint</a>.
			If the request is successful, some JavaScript runs on your machine to display the data, and
			then suddenly, comments.
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
			If you're technically-minded, you may be interested in <a
				href="https://ryanatkn.github.io/corpus-activity-streams">these alternative docs</a
			>
			that I maintain for the
			<a href="https://wikipedia.org/wiki/ActivityStreams">ActivityStreams</a>
			vocabulary of Mastodon's protocol
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>.
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="references">References</HashLink>
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
	</section>
</div>
<BlogReplies {host} {id} />
