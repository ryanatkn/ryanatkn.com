<script lang="ts" context="module">
	import type {FeedItem} from '$lib/feed.js';

	export const post: FeedItem = {
		id: 'https://www.ryanatkn.com/blog/3',
		// TODO BLOCK maybe change to `Modeling virtual social spaces: the roles of Steward, Operator, and Builder`
		title: 'Modeling virtual social spaces: Stewards, Operators, and Builders',
		url: 'https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-stewards-operators-and-builders',
		date_published: '2023-07-24T01:50:35.017Z',
		date_modified: '2023-07-24T01:50:35.017Z',
		summary:
			'I describe how I like the builder role when working on social spaces, but less so the steward and operator roles and the responsibilities they carry. Also, how I implemented allowlisted Mastodon comments on my static blog with TypeScript, Svelte, and SvelteKit, but an API limitation compromised my desire to steward the comments.',
		tags: [
			'web',
			'personal',
			'builders',
			'stewards',
			'social spaces',
			'blog comments',
			'Mastodon',
			'ActivityPub',
			'ActivityStreams',
			'Fediverse',
			'design',
			'technology',
			'software',
		],
	};
</script>

<script lang="ts">
	import {page} from '$app/stores';

	import Toot from '$lib/Toot.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';
	import {prod_content_security_policy} from '$routes/security';
	import {to_api_status_url} from '$lib/mastodon';
	import {base} from '$app/paths';

	// https://hachyderm.io/@ryanatkn/110843291155970959
	const DEFAULT_TOOT_HOST = 'hachyderm.io';
	const DEFAULT_TOOT_ID = '110843291155970959';

	let embedded_toot_host = DEFAULT_TOOT_HOST;
	let embedded_toot_id = DEFAULT_TOOT_ID;
	let embedded_toot_url = to_api_status_url(embedded_toot_host, embedded_toot_id);

	let replies_toot_host = embedded_toot_host;
	let replies_toot_id = embedded_toot_id;
	let replies_toot_url = to_api_status_url(replies_toot_host, replies_toot_id);

	// TODO BLOCK incorporate https://newpublic.substack.com/p/the-secret-power-of-digital-dungeon?r=bveu&utm_campaign=post&utm_medium=web
	// probably mention the rooms/stool, bottlenecking

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

	/*

	- picture the flow starting from the user, to the steward who they interact with, to the operator stabilizing the ground under their feet to make the thing go, to the builder producing the thing at the origin, up the supply chain
	- stewards
	- operators
	- builders includes not just devs, but everyone involved in producing the software -- people writing documentation, people triaging issues, people in the community answering questions

	*/

	// TODO BLOCK put all post meta into context instead of hardcoding the link to post 2 (see the other posts too for their links)
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
				This post started as a demo using <a href="https://joinmastodon.org/">Mastodon</a>
				to add comments to my blog posts, but it morphed into a followup to my second blog post,
				<a
					href="https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday"
					>Modeling virtual social spaces: in this house we post cat pics on Saturday</a
				>, with a heaping dose of navel gazing.
			</p>
			<p>
				This is a <a href="https://wikipedia.org/wiki/Static_web_page">static website</a>, meaning I
				upload some plain files and GitHub does the rest. There's no server running any logic of
				mine, and the infrastructure requirements are very simple and cheap. GitHub offers the
				service for free in part because of its low cost. It's also the simplest possible flow for
				me as the author.
			</p>
			<p>
				There are downsides to static websites, of course. What if I wanted to let readers submit
				comments? A server somewhere would have to receive, store, and then serve your comment to
				other readers. Happily, Mastodon can do exactly that, using <a
					href="https://hci.social/@ryanatkn">my existing account</a
				>
				and <a href="https://hci.social">a server</a>
				that other people generously operate.
			</p>
			<p>
				Great, so I can have a static blog and dynamic comments too? Technically yes, but there's
				more to consider than tech. Should anyone be able to leave a comment and reach other
				readers, automatically without my involvement? Certainly not, this isn't my first day on the
				Internet. I feel both a responsibility and desire to curate out spam, abuse, and other bad
				vibes. This is my personal space that I share publicly, and few of us appreciate it when
				other people muck up our happy places, even moreso when that muck affects other friendly
				visitors.
			</p>
			<p>
				So, I resigned myself to the idea that if I want to enable comments, I need curation that's
				proactive, not reactive. People submit comments, and I can approve them on my own time
				according to my own whims.
			</p>
			<p>
				Ok, so how to add comments? I could make a post on Mastodon linking to this blog post, and
				then people could reply with their preferred Mastodon client and account, and I'd get
				notified. I want some of those replies to appear on my blog, and I want Mastodon and the
				static files to handle it all, so we can discuss without leaving Mastodon, and I can curate
				without changing my blog.
			</p>
			<p>To</p>
			<hr />
			<h1>TODO OLD STUFF</h1>
			<h1>TODO OLD STUFF</h1>
			<h1>TODO OLD STUFF</h1>
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
