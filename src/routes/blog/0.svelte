<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import {feedData} from '$lib/feedData';

	const post = feedData.items[0];
</script>

<div class="markup">
	<BlogPostHeader {post} />
	<p>
		I've been building an open source web project focused on community software with <a
			href="https://twitter.com/greatbaconbits">Hamilton Reed</a
		>
		fulltime for a year. We <a href="https://twitter.com/feltcoop">@feltcoop</a> recently started a
		<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a>
		and (gulp) a podcast called
		<a href="https://www.felt.social/toolmakersforum">Toolmakers Forum</a>. I also
		<a href="https://twitter.com/ryanatkn/status/1524796706675621888">tweeted about the podcast</a> and
		my plans to write about its ideas on this blog.
	</p>
	<p><a href="https://github.com/feltcoop/felt-server">The software</a>:</p>
	<ul>
		<li>
			is a toolkit and server for building and maintaining communities, publishing to the web, and
			collaboratively working with information. It has aspects of a <a
				href="https://wikipedia.org/wiki/Content_management_system">content management system</a
			>,
			<a href="https://wikipedia.org/wiki/Knowledge_management_software"
				>knowledge management software</a
			>, and other <a href="https://wikipedia.org/wiki/Social_software">social</a> and
			<a href="https://wikipedia.org/wiki/Collaborative_software">collaborative software</a>. We're
			aiming for a batteries-included, deeply customizable experience with a small footprint.
		</li>
		<li>
			is currently <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a>,
			and we hope to reach alpha this year, beta optimistically
		</li>
		<li>targets underserved niches</li>
	</ul>
	<blockquote>
		‼ please note this pre-alpha software is <strong>not yet secure</strong>, so use it at your own
		risk and please don't pipe it data that you don't want public (also, we don't yet operate a
		public instance)
	</blockquote>
	<p>What are these underserved niches?</p>
	<ul>
		<li>small communities</li>
		<li>
			a single app with chats+forums+todos+etc that's perhaps less slick than each but far more
			powerful in 1, supporting both realtime and asynchronous communications, collaborative
			everywhere
		</li>
		<li>
			fullstack modding, so devs and endusers have proper access and power over their UX and
			systems, so we bridge more of the gap between programming and using
			<ul>
				<li>
					devs get open source where they can author and extend components, clients, and servers
				</li>
				<li>
					endusers get:
					<ul>
						<li>
							a comfortably familiar environment that looks like existing social apps, but more
							deeply customizable and flexible
						</li>
						<li>
							a <a href="https://github.com/pngwn/MDsveX">composable text language</a> with a rich vocabulary
							that can be used to write chat messages, forum and blog posts, todo items, and so on, and
							also construct both social spaces and the entire client UI
						</li>
						<li>
							easy-to-use plugins, mods, modules, etc, made by us at Felt and hopefully a community
							of developer-users
						</li>
						<li>
							programmery-things like recording events and authoring scripts, and lots more we think
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
	<p>
		We're calling Felt <a href="https://github.com/feltcoop/felt-server"
			>"a tool for building and maintaining communities"</a
		>.
	</p>
	<ul>
		<li>easily selfhosted, targeting $5/mo VPS</li>
		<li>uses tech like Postgres, Node, TypeScript, Svelte, SvelteKit, and websockets</li>
		<li>we're using it professionally to build itself under democratic control</li>
		<li>we want to use it personally and make stuff with it</li>
		<li>goal is to become a <a href="https://platform.coop">platform co-op</a></li>
	</ul>
	<p>
		It's a big set of goals, and we think we have useful contributions particularly around UX. (see
		below for <a href="#interop">more on interop</a>) We think we see an opportunity to hit a sweet
		spot for small communities with our set of design and tech choices.
	</p>
	<h2>The projects:</h2>
	<p>We have a handful of software repos, none of which are yet production ready:</p>
	<ul>
		<li>
			<a href="https://github.com/feltcoop/felt-server">@feltcoop/felt-server</a> – the community software
		</li>
		<li>
			<a href="https://github.com/feltcoop/felt">@feltcoop/felt</a> – reusable library of components
			and other code for building things from simple websites to realtime interactive multiplayer experiences
			(eventually this will include much of what's currently in felt-server)
		</li>
		<li>
			<a href="https://github.com/feltcoop/felt-template">@feltcoop/felt-template</a> – a static web
			app template with SvelteKit and Felt for quickly creating new projects
		</li>
		<li>
			<a href="https://github.com/feltcoop/gro">@feltcoop/gro</a> – a toolkit that extends SvelteKit
			with things we find useful for making web apps; it's used by all of our other projects
		</li>
		<li>
			<a href="https://github.com/feltcoop/dealt">@feltcoop/dealt</a> – we haven't touched it in a minute,
			and there's not much there yet, but it's a fun side project to showcase how the software can be
			used
		</li>
	</ul>
	<h2>In summary:</h2>
	<p>As software users, we want awesome tools that we can tailor to our needs.</p>
	<p>
		As platform users, we want a professional, trusted, incentives-aligned operator, and we'll pay
		for it.
	</p>
	<p>
		As service providers, we want to build reliable orgs to operate infra to help users succeed.
	</p>
	<p>As devs, we want to build great software for people, prioritizing endusers over operators.</p>
	<p>
		As toolmakers we want to help users bring their own visions to life and support a beneficial
		relationship with technology. We'll provide defaults and templates, and users can modify the
		software for their own needs. We'll support simple and scalable static web publishing like blogs
		and RSS feeds, along with the tools to make hobby-grade realtime social experiences and games.
	</p>
	<blockquote>
		"hobby-grade" is how I like to frame it today, but "for srs Professionals" is an eventual
		target; it's still early and I don't want to overpromise
	</blockquote>
	<p>
		The idea is to make <a href="https://github.com/feltcoop">the software</a> we want to use, at
		<a href="https://www.felt.social">the company</a> we want to work for, providing the service we want
		to pay for.
	</p>
	<p>
		We're working in the open at <a href="https://github.com/feltcoop">github.com/feltcoop</a>
	</p>
	<hr />
	<h2>Everyone can be a toolmaker:</h2>
	<p>
		Instead of being limited to filling digital boxes designed by tech companies, anyone should be
		able to design their own box. Or forget boxes even, we're in the digital realm. We see examples
		of what's possible in all sorts of products over decades, especially in games, and I believe
		there's fresh opportunities to do this with web tech.
	</p>
	<p>
		We want to build software tools that anyone can use to explore the vast terrain of collaborative
		experiences, so you could take a larger role in designing your media, if you want. A key here is
		to make a great media sharing UX, so some % of people make and share useful and cool stuff, and
		everyone benefits.
	</p>
	<hr />
	<h2>Sharing spaces with others:</h2>
	<p>
		One aspect of community software that's full of interesting opportunities is how to govern
		shared spaces: things like exercising power, communicating and enforcing rules, nudging norms,
		making collective decisions, scripting governance processes over time, and so on. Each group of
		people has distinct needs.
	</p>
	<p>
		Our perspective as toolmakers is that we'll attempt to support a wide range possibilities, from
		traditional moderator setups to democratic control and much more, and provide templates and
		guidance to help communities achieve their goals. We'll give this a lot of attention before
		beta, but I suspect the truly good stuff is years away, maybe using standards that
		<a href="https://metagov.org/">Metagov</a> is developing.
	</p>
	<hr />
	<h2>Business and ownership:</h2>
	<p>
		<strong>business model</strong>: no ads, no crypto,
		<a href="https://wikipedia.org/wiki/MIT_License">free and fully open source</a>; users pay for
		service and if it's sustainable we'll creatively subsidize users
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
		ambitious startup, and we don't feel threatened by other service providers taking some or most
		of the pie. The terms we're competing on don't require that we have a monopoly on hosting the
		service.
	</p>
	<p>So what does success look like?</p>
	<p>
		In the not-too-distant future, I'm excited to find and fund three more colleagues and turn our <a
			href="https://github.com/feltcoop/felt/blob/main/GOVERNANCE.md"
			>Temporary Benevolent Dictatorship</a
		> into a real co-op.
	</p>
	<p>
		I would consider it a great success if one day, democratically selected experts make the
		difficult operational decisions and I, web developer, get to stick to webdev.
	</p>
	<p>
		And success today? Structuring incentives to create the best software we can and executing
		capably, while enjoying the process, focusing on principles, and building good relationships.
	</p>
	<hr />
	<h2>Tech notes:</h2>
	<p>
		We tried to be thoughtful about our tech stack given the assumption that we'll be in the
		JS+node+npm ecosystem. We chose the web because we think it's the best way to deliver the UX we
		want to the most people, and we chose these specific technologies because of fit, familiarity,
		and productivity.
	</p>
	<h3>on the shoulders of giants on the backs of turtles:</h3>
	<p>the Web has vast unrealized potential</p>
	<p>Node and TypeScript are productive</p>
	<p>Postgres and nginx are solid</p>
	<p>
		Svelte and SvelteKit have been a fantastic set of tools for making UIs. We don't yet use some of
		SvelteKit's flagship features like endpoints, but we feel productive and delighted working with
		it, and its flexibility is a wonder. We've been deprioritizing full SSR but it's a relief to
		know it's there when we're ready for it. It's amazing how much of the load SvelteKit takes off
		our shoulders.
	</p>
	<h3>customizable and extensible:</h3>
	<p>
		Both the server and clients are open source and our APIs are open, so clients can be modified or
		created from scratch. We'll try to maximize the freedoms of users and developers, but security
		and performance are unfortunate constraints and sometimes buzzkills :\
	</p>
	<p>
		Our client has a <a href="https://wikipedia.org/wiki/Client_(computing)#Thick">thickness</a>
		optimized for UX over long sessions, which means a lot of JS and client-side caching, and thanks
		to SvelteKit we think we'll also be able to deliver good experiences in many cases with fast loadtimes
		and minimal JS.
	</p>
	<h3>scaling (and not):</h3>
	<p>
		Our focus on "small communities" relates to a potentially deflating fact about our software: the
		realtime stuff doesn't scale. (yet? idk) We're optimizing to quickly iterate on interactive
		social environments with human-scale groups of people on a single machine with web tech. The
		limits may appear restrictive compared to the infinite cloud worlds, but these tradeoffs give us
		a simple, highly productive environment that's powerful in the small, and maybe small
		communities are good too.
	</p>
	<p>
		We (will) also support non-realtime usecases that scale to more users like blogs and similar web
		publishing, much for free thanks to SvelteKit.
	</p>
	<blockquote>
		Today, <a href="https://github.com/feltcoop/felt-server">felt-server</a> supports only
		<code
			><a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node"
				>@sveltejs/adapter-node</a
			></code
		> -- we'd like to be compatible with as many of SvelteKit's adapters as possible, but that's a distant
		hope.
	</blockquote>
	<p>
		Even though our code isn't pushing the boundaries of performance and enterprise readiness, we're
		trying to write it modularly and with good principles, so hopefully it evolves gracefully and
		enables better tools to be built on its foundations. (for example, we have a unified
		serializable event stream for the client and server API that works for frictionless realtime
		broadcasting and already has bare-but-never-out-of-date docs -- we're cutting a lot of corners
		but also investing a lot in tech up front)
	</p>
	<h3 id="interop">interop and decentralization:</h3>
	<p>
		Giving users choices is a principle I want to adhere to, and that includes interoperability, but
		we're a 2 person team with limited resources trying to deliver a specific UX. Today this means
		we have a centralized Node server, and a future possibility is to support decentralized backends
		like ActivityPub and Matrix.
	</p>
	<p>
		We're trying to follow <a href="https://www.w3.org/TR/activitystreams-core/"
			>the ActivityStreams vocabulary spec</a
		>
		that's used in the fediverse and Mastodon (and I made some
		<a href="https://ryanatkn.github.io/corpus-activity-streams/">unofficial docs</a>), but we have
		our own bespoke client-server protocol that works over http and websockets. I think we can
		generate OpenAPI schemas from our source of truth, which would give us greatly expanded access
		to existing tooling.
	</p>
	<p>
		We try to use
		<a href="https://json-schema.org/">JSON Schema</a>
		where it makes sense, and we support both RESTful-ish http endpoints and websockets using
		<a href="https://www.jsonrpc.org/specification">JSON-RPC 2.0</a>.
	</p>
	<p>
		We want to be good citizens of open standards, not just do our own thing off in the corner, but
		we have very specific ideas of what we want to build for small communities, and decentralized
		tech isn't optimal for today's goals. I personally think decentralized technologies are the
		future and I would love to help Felt be compatible with standard protocols once we have our
		desired UX.
	</p>
	<hr />
	<h2>Cool ok:</h2>
	<p>
		find <a href="https://www.felt.social">us</a> @feltcoop on
		<a href="https://twitter.com/feltcoop">Twitter</a> and
		<a href="https://github.com/feltcoop">GitHub</a>, read
		<a href="https://tinyletter.com/FeltCoop">our monthly newsletter</a>, and look
		<a href="https://www.felt.social/toolmakersforum">a podcast</a>
	</p>
</div>
