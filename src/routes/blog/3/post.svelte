<script lang="ts">
	import {base} from '$app/paths';

	import BlogComments from '$lib/BlogComments.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';
	import {prod_content_security_policy} from '$routes/security';
	import {page} from '$app/stores';

	// TODO BLOCK `a post I made`

	// https://fosstodon.org/@rauschma/110728406134660568
	// const host = 'fosstodon.org';
	// const id = '110728406134660568';
	const host = 'mstdn.social';
	const id = '110702983310017651';
	// const host = 'hachyderm.io';
	// const id = '110729727683117713';

	const sections = [
		{slug: 'introduction', name: 'Introduction'},
		{slug: 'limitations', name: 'Limitations'},
		{slug: 'implementation', name: 'Implementation'},
		{slug: 'conclusion', name: 'Conclusion'},
		{slug: 'references', name: 'References'},
		{slug: 'comments', name: 'Comments'},
	];
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
			This website is a bundle of plain static files, including HTML, JavaScript, CSS, some images,
			and <a href="{base}/blog/feed.xml">an Atom feed</a>
			for the blog, viewable
			<a href="https://github.com/ryanatkn/ryanatkn.com/tree/deploy">here on the 'deploy' branch</a>
			of <a href="https://github.com/ryanatkn/ryanatkn.com">the git repo</a>.
			<a href="https://pages.github.com/">GitHub Pages</a>
			hosts those files for free, published right here as a website to
			<code>{$page.url.host}</code>. The cost of serving these static files is very low, so "free
			for open source" and even "free" are common cloud offerings today in 2023. Thanks, GitHub, for
			being host of the day. It doesn't get much simpler than this.
		</p>
		<aside>
			The website's final output files are HTML, JS, and CSS, but <a
				href="https://github.com/ryanatkn/ryanatkn.com">the source code</a
			>
			that generates these files is written in <a href="https://typescriptlang.org/">TypeScript</a>
			and <a href="https://svelte.dev/">Svelte</a> using
			<a href="https://kit.svelte.dev/">SvelteKit</a> and <a href="https://vitejs.dev/">Vite</a>. I
			recommend them with enthusiasm.
		</aside>
		<p>
			Although static to its bones, this site also has dynamic behavior, thanks to the power of
			scripting. Click the "load comments" button below under the <a href="#comments">"Comments"</a>
			heading of the post, your browser sends a request to a
			<a href="https://joinmastodon.org/">Mastodon</a>
			instance that hosts <a href="https://hachyderm.io/@ryanatkn">my account</a> on
			<a href="https://hachyderm.io/">hachyderm.io</a>. Mastodon is an
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
			<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>. It requests information about a
			<a href="https://hachyderm.io/@ryanatkn">a post I made</a> that references this blog post. If the
			request is successful, some JavaScript runs on your machine to display the comments. My host hachyderm.io
			has its unauthenticated API enabled, so we can request data without any logins or other complexity.
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="limitations">Limitations</HashLink>
		</h2>
		<ul>
			<li>
				Supports only one kind of moderation, allowlisting via favourites. Reactive moderation,
				where the author could allow all comments by default and block to hide, may be possible with
				the public API, but I need to look into it more. I also personally don't want anyone
				publishing content to my website without my explicit approval, and I want to set the
				expectation that your replies will generally not appear on my website.
			</li>
			<li>
				no authentication
				<ul>
					<li>only 60 posts can be fetched</li>
					<li>no taking actions directly on the page (favouriting, replying)</li>
				</ul>
			</li>
		</ul>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="implementation">Implementation</HashLink>
		</h2>
		<p>
			Here's <a href="https://github.com/ryanatkn/ryanatkn.com/pull/12/files">the GitHub PR</a>.
		</p>
		<p>
			To avoid some possible security and privacy issues that arise when you inject arbitrary HTML
			into the page like I'm doing, I added a fairly restrictive <a
				href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">content security policy</a
			>. It disallows arbitrary third party requests, so it may break if my Mastodon host
			hachyderm.io changes how it loads resources. If something goes wrong or changes, having icons
			break is an acceptable failure until I can review the situation. For my visitors, it's a
			potentially worse experience but it's safer. Here's the CSP that's applied in
			<a href="https://github.com/ryanatkn/ryanatkn.com/blob/main/src/routes/%2Blayout.svelte"
				>the main +layout.svelte</a
			>:
		</p>
		<blockquote style:font-family="var(--font_family_mono)">
			{prod_content_security_policy}
		</blockquote>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="conclusion">Conclusion</HashLink>
		</h2>
		<p>
			Recapping, this is a static site hosted by GitHub with commenting that's
			dynamically-loaded-on-demand from Mastodon on <a href="https://hachyderm.io/">hachyderm.io</a>
			with an allowlist managed by the author through Mastodon favourites. They charge no money for these
			services, and you can fund them in different ways.
		</p>
		<p>
			We have allowlist-based moderation through likes by the author, and a good effort at
			efficiency given the constraints of the API. I may have missed it, but I didn't see a way in
			the API to get favourites for many statuses at once - I make an API call for every post with
			1+ likes.
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
		<p>
			I took the main ideas from the following posts, and added favourite-to-allowlist for basic
			moderation.
		</p>
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
		<div class="prose"><h2><HashLink slug="comments">Comments</HashLink></h2></div>
		<BlogComments {host} {id} />
	</section>
</div>
