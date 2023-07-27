<script lang="ts">
	import {base} from '$app/paths';
	import {page} from '$app/stores';
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {fade, slide} from 'svelte/transition';

	import Toots from '$lib/Toots.svelte';
	import HashLink from '$lib/HashLink.svelte';
	import BlogPostIndex from '$lib/BlogPostIndex.svelte';
	import {prod_content_security_policy} from '$routes/security';
	import Comment from '$lib/MastodonStatusItem.svelte';
	import Toot from '$lib/Toot.svelte';
	import CodeExample from '$routes/blog/3/CodeExample.svelte';
	import {load_from_storage, set_in_storage} from '$lib/storage';
	import {parse_status_context_url, to_status_url} from '$lib/mastodon';

	// TODO BLOCK `a post I made`

	// https://fosstodon.org/@rauschma/110728406134660568
	// const host = 'fosstodon.org';
	// const id = '110728406134660568';
	// tips
	// const host = 'mstdn.social';
	// const id = '110702983310017651';
	// const host = 'hachyderm.io';
	// const id = '110729727683117713';
	// https://hci.social/@cwebber@octodon.social/110775635568526227
	// https://octodon.social/@cwebber/110775634939683819
	let host = 'octodon.social';
	let id = '110775634939683819';
	const sync_from_url = (url: string) => {
		const parsed = parse_status_context_url(url);
		if (parsed) {
			host = parsed.host;
			id = parsed.id;
		}
		console.log(`parsed`, parsed);
	};

	let toot_url = to_status_url(host, id);
	$: sync_from_url(toot_url);

	const sections = [
		{slug: 'introduction', name: 'Introduction'},
		{slug: 'limitations', name: 'Limitations'},
		{slug: 'implementation', name: 'Implementation'},
		{slug: 'conclusion', name: 'Conclusion'},
		{slug: 'references', name: 'References'},
		{slug: 'comments', name: 'Comments'},
	];

	let loaded_status_key = 1;
	let loading: boolean | undefined;
	let load_time: number | undefined;

	const SHOW_TOOT_DETAILS = 'show_toot_details';
	let show_toot_details = load_from_storage(SHOW_TOOT_DETAILS, () => true); // TODO store?
	$: set_in_storage(SHOW_TOOT_DETAILS, show_toot_details); // TODO optimize setting
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
			for the blog, viewable on
			<a href="https://github.com/ryanatkn/ryanatkn.com/tree/deploy"
				>the <code>deploy</code> branch</a
			>
			of
			<a href="https://github.com/ryanatkn/ryanatkn.com">the git repo</a>. Those files are then
			hosted for free by <a href="https://pages.github.com/">GitHub Pages</a>, published right here
			as a website to
			<code>{$page.url.host}</code>. The cost of serving these static files is very low, so "free"
			is a common cloud offering for static sites in 2023. Thank you GitHub for being host of the
			day and keeping it simple.
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
			scripting. With some JS (via Svelte in this case) we can embed a toot:
		</p>
		<section class="embedded_status">
			<div class="embedded_status_inner">
				{#key loaded_status_key}
					<Toot {host} {id} let:item let:loading let:load bind:loading bind:load_time>
						<div class="embed_item">
							<div class="embed_item_inner">
								{#if loading !== false}
									<div transition:slide>
										<PendingButton pending={!!loading} on:click={load}>
											<span class="mammoth">🦣</span>
											<div>
												<div>load toot from</div>
												<code>{host}</code>
											</div>
										</PendingButton>
									</div>
								{:else if item}
									<div transition:slide class="width_full">
										<Comment {item} />
									</div>
								{/if}
								{#if !show_toot_details}
									<button
										title="show item details"
										class="plain icon_button"
										style:position="absolute"
										style:right="var(--spacing_sm)"
										style:bottom="var(--spacing_sm)"
										style:font-size="var(--size_lg)"
										on:click={() => {
											show_toot_details = true;
										}}>?</button
									>
								{/if}
							</div>
						</div>
					</Toot>
				{/key}
				{#if show_toot_details}
					<div class="embed_item" transition:fade>
						<div class="embed_item_inner">
							<form>
								<fieldset>
									<label>
										<div class="title">toot url</div>
										<input bind:value={toot_url} placeholder=">	" />
									</label>
								</fieldset>
							</form>
							<p class="width_full">the Svelte code:</p>
							<CodeExample
								code={`<Toot
	host=${'"' + host + '"'}
	id=${'"' + id + '"'}
	let:item
	let:loading
	let:load
	bind:loading
	bind:load_time
>
	{#if item}
		<Comment {item} />
	{:else ...}
</Toot>`}
							/>
							<div class="reset_wrapper">
								<div class="reset">
									<button
										on:click={() => {
											loading = undefined;
											load_time = undefined;
											loaded_status_key++;
										}}
										disabled={loading === undefined}>reset</button
									>{#if load_time !== undefined}<div class="loaded_message" transition:slide>
											loaded in {Math.round(load_time)}ms
										</div>{/if}
								</div>
								<button
									title="hide item details"
									class="plain icon_button"
									on:click={() => {
										show_toot_details = false;
									}}>🗙</button
								>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</section>
		<p>
			But that's not all. If you click the "load comments" button below under the heading <a
				href="#comments">"Comments"</a
			>, your browser sends a request to a
			<a href="https://joinmastodon.org/">Mastodon</a>
			instance at <a href="https://hachyderm.io/">hachyderm.io</a> that hosts
			<a href="https://hachyderm.io/@ryanatkn">my account</a>. Mastodon is an
			<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
			<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>. It requests information about a
			<a href="https://hachyderm.io/@ryanatkn">a post I made</a> that references this blog post. If
			the request is successful, some JavaScript runs on your machine to display the comments. My
			host hachyderm.io has its unauthenticated API enabled (in other words, "secure mode" has not
			been enabled, meaning
			<a href="https://docs.joinmastodon.org/admin/config/#authorized_fetch"
				><code>AUTHORIZED_FETCH</code></a
			>
			is the default <code>false</code>), so we can request data without any logins or other
			complexity.
		</p>
		<p>
			Not every reply to my post appears in the comments section below. It displays only those that
			I've explicitly favourited, aka liked or starred (here's <a
				href="https://docs.joinmastodon.org/methods/statuses/#favourited_by">the API endpoint</a
			>). This way, I have an allowlist managed by my Mastodon account, the same place I
			microblogged about this blog post, a place out there on the internet that magically operates
			free infrastructure for us, much like the free black box that is GitHub pages. (free, but
			also, financially supporting admins is good luck)
		</p>
	</section>
	<hr />
	<section class="prose">
		<h2>
			<HashLink slug="limitations">Limitations</HashLink>
		</h2>
		<p>
			I haven't spent a lot of time with Mastodon's API, so I may have chosen a subpar method of
			implementing allowlisting. I achieved the behavior I was looking for, with some caveats:
		</p>
		<ul>
			<li>
				Supports only one kind of moderation, allowlisting via favourites.
				<ul>
					<li>
						Reactive moderation, where the author could allow all comments by default (and block to
						show?), may be possible with the public API, but I would need to look into it more. I
						probably wouldn't switch to a denylist - I'd prefer to set the expectation that most
						replies won't appear here, because low effort replies would drown others out of the
						unathenticated request limits. Reactive moderation lowers the friction enough to change
						the experience for everyone, and also I don't want to develop a habit of moderating the
						internet.
					</li>
				</ul>
			</li>
			<li>
				no authentication
				<ul>
					<li>
						only 60 posts can be fetched? and there's no way to get page 2? maybe I'm holding the
						API wrong
					</li>
					<li>favourites are also limited (but pagination header?)</li>
					<li>is readonly - you can't take actions directly on the page (favouriting, replying)</li>
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
			To avoid some possible security and privacy issues from injecting Mastodon's arbitrary HTML
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
			Recapping, this is a static site hosted by GitHub with embedded toots and comments
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
		<div class="prose spaced">
			<h2><HashLink slug="comments">Comments</HashLink></h2>
			<details style:max-width="var(--width_sm)">
				<summary>the Svelte code:</summary>
				<CodeExample code={`<Toots\n\thost="${host}"\n\tid="${id}"\n/>`} />
			</details>
		</div>
		<Toots {host} {id} />
	</section>
</div>

<style>
	.embedded_status {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing_md);
		flex-wrap: wrap;
		padding: var(--spacing_md);
		border-radius: var(--border_radius_sm);
		background-color: var(--fg_1);
	}
	.embedded_status_inner {
		display: flex;
		/* flex-wrap: wrap; */
		width: 100%;
		gap: var(--spacing_md);
	}
	.embed_item {
		width: 100%;
		position: relative;
		background-color: var(--bg);
		border-radius: var(--border_radius_sm);
		padding: var(--spacing_xs);
		overflow: hidden;
	}
	.embed_item_inner {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.mammoth {
		font-size: var(--icon_size_md);
		padding: var(--spacing_md) 0;
	}
	.reset_wrapper {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.reset {
		display: flex;
		align-items: center;
	}
	/* TODO hacky */
	.reset :global(button) {
		margin-bottom: 0;
	}
	.loaded_message {
		margin-left: var(--spacing_md);
	}
</style>
