<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="blog">
	<LinkPath path={$page.url.pathname}><Favicon /></LinkPath>
</div>

<div class="markup">
	<h1>What we're doing @feltcoop</h1>
	<p>2022 May 1</p>
	<blockquote>
		this is an extended and more polished version of <a
			href="https://twitter.com/ryanatkn/status/1520521806091849729">this Twitter thread</a
		>
	</blockquote>
	<p>
		I've been building an open source web project with <a href="https://twitter.com/greatbaconbits"
			>@greatbaconbits</a
		>
		fulltime for a year & we <a href="https://twitter.com/feltcoop">@feltcoop</a>
		<a href="https://twitter.com/feltcoop/status/1519703424433934336" rel="noreferrer"
			>tweeted about it</a
		>
	</p>
	<p><a href="https://github.com/feltcoop/felt-server">the software💚</a>:</p>
	<ul>
		<li>
			is a toolkit and server for building and maintaining communities, publishing to the web, and
			collaboratively working with information
		</li>
		<li>is currently still pre-alpha, and we hope to reach alpha this year, beta optimistically</li>
		<li>targets underserved niches</li>
	</ul>
	<blockquote>
		please note this pre-alpha software should absolutely in no circumstances be piped data that you
		don't want public, <strong>it is not yet secure</strong>
	</blockquote>
	<p>What are these underserved niches?</p>
	<ul>
		<li>small communities</li>
		<li>
			a single app with chats+forums+todos+etc that's perhaps less slick than each but far more
			powerful in 1 -- both realtime and asynchronous communications, collaborative to the core
		</li>
		<li>
			fullstack modding, so devs and endusers have proper access and power over their UX, so we
			bridge more of the gap between programming & using
			<ul>
				<li>
					devs get open source where they can author and extend components, clients, and servers
				</li>
				<li>
					endusers get a composable text language with a rich vocabulary that can be used to write
					chat messages, forum and blog posts, todo items, and so on, and also construct both their
					social spaces and the client's entire UI
				</li>
				<li>security and performance are unfortunate constraints and sometimes buzzkills :\</li>
			</ul>
		</li>
	</ul>
	<p>
		We're calling it <a href="https://github.com/feltcoop/felt-server"
			>"a tool for building and maintaining communities"</a
		>:
	</p>
	<ul>
		<li>easily selfhosted, targeting $5/mo VPS</li>
		<li>
			using tech like Postgres, Node, TypeScript, Svelte, SvelteKit, websockets, thicknsmart clients
		</li>
		<li>we're using it professionally to build itself under democratic control</li>
		<li>we want to use it personally</li>
		<li>goal is to become a <a href="https://platform.coop">platform co-op</a></li>
	</ul>
	<p>
		Our focus on "small communities" relates to a deflating fact about our software: the realtime
		stuff doesn't (yet?) scale. We're optimizing for realtime interactive social environments with
		human-scale groups of people on a single machine w/ web tech. We also support non-realtime
		usecases that scale to more users like blogs and similar web publishing, much for free thanks to
		SvelteKit.
	</p>
	<blockquote>
		Today, felt-server only supports `@sveltejs/adapter-node` -- we'd like to be compatible with as
		many of SvelteKit's adapters as possible, but that's a distant hope.
	</blockquote>
	<p>
		Even though our code isn't pushing the boundaries of performance and enterprise readiness, we're
		trying to write it modularly & w/ good principles, like a unified serializable event stream for
		the client and server, so better tools could be built on this foundation, we hope.
	</p>
	<p>
		We also tried to be thoughtful about our tech stack, given the assumption that we'll be in the
		JS+node+npm ecosystem.
	</p>
	<p>
		One choice was to use SvelteKit, and although we don't yet use some of its flagship features, we
		feel productive working with it and in awe of its flexibility and promise.
	</p>
	<p>
		We'll use SvelteKit features like endpoints eventually; we may let 1.0 shake out because we're
		deprioritizing full SSR.
	</p>
	<p>(btw, SvelteKit🧡🧡 it's so good)</p>
	<blockquote>
		Though we have a centralized Node server today, one future possibility is to also support a
		decentralized backend like Matrix. We're trying to follow <a
			href="https://www.w3.org/TR/activitystreams-core/">the ActivityStreams vocabulary spec</a
		> that's used in the fediverse and Mastodon.
	</blockquote>
	<hr />
	<p>
		One goal is to build software tools that anyone can use to explore the endless terrain of
		collaborative experiences, so you could take a larger role in designing your media, if u want
	</p>
	<p>
		a key here is to make a great media sharing UX, so some % of ppl make+share useful+cool stuff🏞
	</p>
	<hr />
	<p>
		<strong>business model</strong>: no ads, no krypt0,
		<a href="https://en.wikipedia.org/wiki/MIT_License">free & fully open source</a>; users pay for
		service & if it's sustainable we'll creatively subsidize users
	</p>
	<p>
		<strong>ownership/control</strong>: self-funded worker co-op with plans to become a
		<a href="https://platform.coop">platform co-op</a>, is forprofit but co-op could choose to
		become a nonprofit
	</p>
	<p>
		How does this business model work, giving away the software for free? Because the product we're
		selling isn't the open source software, it's the service and network.
	</p>
	<p>
		We think we can reach sustainability at usercounts that look *very* small compared to a typical
		ambitious startup.
	</p>
	<p>We don't feel threatened by other service providers taking some or most of the pie.</p>
	<hr />
	<p>What does success look like?</p>
	<p>
		I would consider it a great success if one day, democratically elected experts make the
		difficult operational decisions and I, web developer, get to stick to webdev
	</p>
	<p>
		And success today? Structuring incentives to create the best software we can & executing
		capably, while enjoying the process, focusing on principles, and building good relationships.
	</p>
	<hr />
	<p>
		One aspect of community software full of interesting opportunities is how to govern shared
		spaces -- exercising power, communicating rules and nudging norms, making collective decisions,
		scripting governance processes over time, etc.
	</p>
	<p>We'll give this a lot of attention before beta.</p>
	<hr />
	<p>
		As toolmakers we want to help users execute their own visions. We'll provide defaults &
		templates, and users can modify the software for their own needs.
	</p>
	<p>
		We'll support simple+scalable static web publishing like blogs, along with hobby-grade realtime
		social experiences & games.
	</p>
	<p>As users, we want a professional, trusted, incentives-aligned operator & we'll pay for it.</p>
	<p>
		As service providers, we want to build reliable orgs to operate infra to help our users succeed.
	</p>
	<p>
		As devs, we want to build great software for our users, prioritizing endusers over operators
	</p>
	<hr />
	<p>
		The idea is to make the software we want to use, at <a href="https://www.felt.social"
			>the company</a
		> we want to work for, providing the service we want to pay for.
	</p>
	<hr />
	<blockquote>
		all of this is subject to change, because I'm just speaking as one member with no knowledge of
		the future
	</blockquote>
	<p>
		more here: <a href="https://github.com/feltcoop">github.com/feltcoop</a>
	</p>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--font_size_xl3);
	}
</style>
