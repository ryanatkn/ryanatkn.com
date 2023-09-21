<script lang="ts">
	import {page} from '$app/stores';

	import Toot from '$lib/Toot.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';
	import {prod_content_security_policy} from '$routes/security';
	import {to_api_status_url} from '$lib/mastodon';

	// https://hachyderm.io/@ryanatkn/110843291155970959
	const DEFAULT_TOOT_HOST = 'hachyderm.io';
	const DEFAULT_TOOT_ID = '110843291155970959';

	let embedded_toot_host = DEFAULT_TOOT_HOST;
	let embedded_toot_id = DEFAULT_TOOT_ID;
	let embedded_toot_url = to_api_status_url(embedded_toot_host, embedded_toot_id);

	let replies_toot_host = embedded_toot_host;
	let replies_toot_id = embedded_toot_id;
	let replies_toot_url = to_api_status_url(replies_toot_host, replies_toot_id);

	// TODO BLOCK make the `reset` button work for the toot url, including whether it's enabled

	const sections = [
		{slug: 'description', name: 'Description'},
		{slug: 'limitations', name: 'Limitations'},
		{slug: 'conclusion', name: 'Conclusion'},
		{slug: 'references', name: 'References'},
		{slug: 'replies', name: 'Replies'},
	];

	let autoload: boolean;
	let loading: boolean | undefined;
	let load_time: number | undefined;

	// TODO BLOCK see `div class="reset"` below
</script>

<div class="width_md">
	<section class="prose">
		<br />
		<BlogPostIndex {sections} />
	</section>
	<hr />
	<section>
		<div class="prose">
			<h2>
				<HashLink slug="description">Description</HashLink>
			</h2>
			<p>
				This website is a bundle of static files served from a free host, and it also has
				reader-submitted comments through Mastodon. I made a Mastodon post and its replies are
				dynamically loaded by your browser. They're displayed if I've clicked the favourite button ★
				in my Mastodon client, otherwise your browser ignores the post. Assembled, we get
				allowlisted comments on a static blog with Mastodon.
			</p>
			<details>
				<summary>technical details</summary>
				<aside>
					<p>
						The site's files are being hosted for free by
						<a href="https://pages.github.com/">GitHub Pages</a>
						here at
						<code>{$page.url.host}</code>. They're viewable on
						<a href="https://github.com/ryanatkn/ryanatkn.com/tree/deploy"
							>the <code>deploy</code> branch</a
						>
						of
						<a href="https://github.com/ryanatkn/ryanatkn.com">the git repo</a> and downloadable as
						<a
							href="https://github.com/ryanatkn/ryanatkn.com/archive/refs/heads/deploy.zip"
							download>a zip file</a
						>. The cost of serving these static files is very low, so "free" is a common cloud
						offering for static sites in 2023. Thank you GitHub for being our freeloaded host of the
						day.
					</p>
					<p>
						The website's final output files are HTML, JS, and CSS (and mostly images in terms of
						bytes), but <a href="https://github.com/ryanatkn/ryanatkn.com">the source code</a>
						that generates these files is written in
						<a href="https://typescriptlang.org/">TypeScript</a>
						and <a href="https://svelte.dev/">Svelte</a> using
						<a href="https://kit.svelte.dev/">SvelteKit</a> and
						<a href="https://vitejs.dev/">Vite</a>. I recommend them with enthusiasm.
					</p>
					<p>
						Although completely static, this site has the dynamic behavior of fetching data at
						runtime in your browser from <a href="https://hachyderm.io/">my Mastodon host</a>,
						thanks to the power of scripting and
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>. Static AND
						dynamic??
					</p>
				</aside>
			</details>
			<p>
				With some JS (via <a href="https://svelte.dev/">Svelte</a> in this case) we can embed a
				toot, like
				<a href="https://hachyderm.io/@ryanatkn/110843291155970959"
					>the one I made for this blog post</a
				>:
			</p>
		</div>
		<section class="embedded_status">
			<Toot
				storage_key="embedded"
				bind:url={embedded_toot_url}
				bind:host={embedded_toot_host}
				bind:id={embedded_toot_id}
				bind:autoload
				bind:loading
				bind:load_time
			/>
		</section>
		<div class="prose">
			<details>
				<summary>technical details</summary>
				<aside>
					<p>
						When you click the "load toot" button, your browser sends a request to a <a
							href="https://joinmastodon.org/">Mastodon</a
						>
						instance at
						<a href="https://hachyderm.io/">hachyderm.io</a>
						that hosts
						<a href="https://hachyderm.io/@ryanatkn">my account</a>. Mastodon is an
						<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
						<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>.
					</p>
					<p>
						Your browser requests information about a <a href="https://hachyderm.io/@ryanatkn"
							>a post I made</a
						>
						at hachyderm.io that references this blog post at ryanatkn.com. If the request is successful,
						some JavaScript runs on your machine to display the "replies", replies to my post that I've
						"favourited". My host hachyderm.io has its unauthenticated API enabled (in other words, "secure
						mode" has not been enabled, meaning
						<a href="https://docs.joinmastodon.org/admin/config/#authorized_fetch"
							><code>AUTHORIZED_FETCH</code></a
						>
						is the default <code>false</code>), so we can request data without any logins or other
						complexity.
					</p>
				</aside>
			</details>
			<p>
				Not every reply to my post appears in the replies section below. It displays only those that
				I've explicitly favourited, aka liked or starred. This way, I have an allowlist managed by
				my Mastodon account, the same place I microblogged about this blog post, a place out there
				on the internet that magically operates free infrastructure for us, much like the free black
				box that is GitHub pages. (free, but also, financially supporting admins is good luck)
			</p>
		</div>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="limitations">Limitations</HashLink>
		</h2>
		<p>
			I achieved most of the basic behavior I was looking for, allowlisting replies that are fetched
			at runtime. Many things could be improved:
		</p>
		<ul>
			<li>supports only one kind of moderation, allowlisting via favourites by the author</li>
			<li>
				you can edit a post after I favourite it as a loophole to bypass my explicit approval - I
				was unable to fix this because the <code>created_at</code> of all the favourites is for the author
				object, and I see no way to get the necessary information for the favourite object
			</li>
			<li>favourites are also limited (but pagination header?)</li>
			<li>is readonly - you can't take actions directly on the page (favouriting, replying)</li>
			<li>
				only 60 posts are being fetched with no authentication, and I see no way in headers or the
				response or API docs to fetch page 2
			</li>
			<li>does not process headers for e.g. rate limiting</li>
		</ul>
		<p>
			To avoid some possible security and privacy issues from injecting HTML from Mastodon's API
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
			Recapping, this is a static site hosted by GitHub with embedded toots and replies
			dynamically-loaded-on-demand from Mastodon on <a href="https://hachyderm.io/">hachyderm.io</a>
			with an allowlist managed by the author through Mastodon favourites. They charge no money for these
			services, and you can fund them in different ways.
		</p>
		<p>
			We have allowlist-based moderation through likes by the author, and a good effort at
			efficiency given the constraints of the API. I may have missed it, but I didn't see a way in
			the API to get favourites for many statuses at once or otherwise query for statuses that a
			particular user had favourited - I make an API call for every post with 1+ likes to see if the
			author is among them.
		</p>
		<p>
			Here's <a href="https://github.com/ryanatkn/ryanatkn.com/pull/12/files">the GitHub PR</a> with
			the code and some more details.
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="references">References</HashLink>
		</h2>
		<p>
			I took the main idea of client-side replies from the following posts, and added
			favourite-to-allowlist for basic moderation:
		</p>
		<ul>
			<li>
				<a href="https://cassidyjames.com/blog/fediverse-blog-replies-mastodon/">
					"Toot toot! Mastodon-powered Blog Replies"
				</a>
				- <a href="https://cassidyjames.com/">Cassidy James</a>
			</li>
			<li>
				<a href="https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Replies/">
					"Client-side replies with Mastodon on a static Jekyll website"
				</a>
				- <a href="https://jan.wildeboer.net/">Jan Wildeboer</a>
			</li>
		</ul>
		<p>
			<a href="https://docs.joinmastodon.org/">Mastodon API</a> usage:
		</p>
		<ul>
			<li>
				<a href="https://docs.joinmastodon.org/methods/statuses/#get">GET /api/v1/statuses/:id</a> -
				called once for an embedded status and replies:
			</li>
			<li>
				<a href="https://docs.joinmastodon.org/methods/statuses/#context"
					>GET /api/v1/statuses/:id/context</a
				> - called once for the embedded status to get its descendants (replies) and ancestors
			</li>
			<li>
				<a href="https://docs.joinmastodon.org/methods/statuses/#favourited_by"
					>GET /api/v1/statuses/:id/favourited_by</a
				> - called for each descendent not by the main author that has at least one favourite
			</li>
		</ul>
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
	<section>
		<div class="prose spaced">
			<h2><HashLink slug="replies">Replies</HashLink></h2>
		</div>
		<Toot
			replies
			storage_key="replies"
			bind:url={replies_toot_url}
			bind:host={replies_toot_host}
			bind:id={replies_toot_id}
			bind:autoload
		/>
	</section>
</div>

<style>
	/* TODO tricky layout issue, related to the leaky :last-child margin selectors */
	details:not([open]) summary {
		margin-bottom: 0;
	}
</style>
