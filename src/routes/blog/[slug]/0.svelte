<script lang="ts" context="module">
	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/0',
		title: 'Making free and open source web community software',
		url: 'https://www.ryanatkn.com/blog/making-free-and-open-source-web-community-software',
		date_published: '2022-05-13T01:42:23.000Z',
		date_modified: '2022-11-29T01:42:23.000Z',
		summary:
			'I discuss my work on open source community software called Felt over the last year, giving a brief overview of the design and technology choices, and announcing our newsletter and podcast at FeltCoop.',
		tags: ['web', 'technology', 'software', 'open source', 'community'],
	};
</script>

<div class="prose">
	<p>
		<a href="https://www.felt.dev/">
			<img
				style:float="right"
				style:width="100px"
				style:margin-left="20px"
				src="/felt.png"
				alt="a microscopic-fiber-textured green heart with the word felt cut out"
				title="felt.dev"
			/></a
		>
		<br />
		I've been making free and open source web community software with
		<a href="https://12mod12.com/">Hamilton Reed</a>
		(<a href="https://hachyderm.io/@greatbacon">Mastodon</a>,
		<a href="https://github.com/greatbacon">GitHub</a>) full-time
		<a href="https://github.com/feltjs/felt-server/graphs/contributors">since April 2021</a>. It's
		been two and a half years since we first met in December 2019 and started self-funded part-time
		work on what would become <a href="https://github.com/feltjs">@feltjs</a>. We recently started a
		<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a>
		and a podcast produced by Hamilton called
		<a href="https://www.felt.social/toolmakersforum">Toolmakers Forum</a>. I plan to write about
		Felt's ideas on this blog.
	</p>
	<p>The main software <a href="https://github.com/feltjs/felt-server">felt-server</a>:</p>
	<ul>
		<li>
			is an extensible NodeJS server that we describe as a programmable platform for hobbyists and
			human-scale communities. The main UI looks like Discord and Slack on the surface, and it has
			aspects of a <a href="https://wikipedia.org/wiki/Content_management_system"
				>content management system</a
			>
			and
			<a href="https://wikipedia.org/wiki/Knowledge_management_software"
				>knowledge management software</a
			> in a collaborative environment. We're aiming for a batteries-included, deeply customizable experience
			with a small footprint, that feels familiar and surprisingly powerful.
		</li>
		<li>is designed for small groups</li>
		<li>
			is multipurpose, so the same toolkit can be used for many kinds of communities and websites
		</li>
		<li>
			is open source and designed for fullstack customization, which means devs and end-users have
			proper access and power over their UX and systems and code, and we bridge more of the gap
			between programming and using
		</li>
		<li>
			is currently <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a>,
			and we hope to reach alpha in Q3 2023
		</li>
	</ul>
	<blockquote>
		‼ please note this pre-alpha software is <strong>not yet secure</strong>, so use it at your own
		risk and please don't pipe it data that you don't want public (also, we don't yet operate a
		public instance)
	</blockquote>
	<p>
		Fullstack customization is key to why I want to work on Felt, but it has a lot of unknowns and
		we need to implement it to understand it. (name pending - maybe "web engine" is a helpful
		framing) For devs, it means we'll have open source components, clients, and servers that are
		designed to be extended and plugged and swapped. For end-users it means:
	</p>
	<ul>
		<li>
			a comfortably familiar environment that looks like existing social apps, but more deeply
			customizable and flexible
		</li>
		<li>
			a composable text language with a rich vocabulary that can be used to write chat messages,
			blog posts, forum replies, todo items, and so on, and also construct both social spaces and
			the entire client UI
		</li>
		<li>
			easy-to-use plugins, mods, modules, etc, made by us at Felt and hopefully a community of
			developer-users, and clear paths to learning the technical skills to make your own stuff
		</li>
		<li>
			programmery-things like recording events and authoring scripts, and composing them with things
			like governance processes (e.g. "execute this script if the vote passes")
		</li>
	</ul>
	<p>
		We think of Felt similar to a smartphone, in terms of packing many tools into one object: it
		performs well for many tasks and often it's all you need and want, but sometimes you need more
		specialized tools for a task. The current featureset is a single app with
		chats+forums+todos+more that's perhaps less slick than each but far more powerful in 1,
		supporting both realtime and asynchronous communications, and collaborative everywhere, and
		we'll prioritize interoperability to make Felt fit into workflows it doesn't know about. (this
		is complicated, see below for <a href="#interop">more on interop</a>)
	</p>
	<ul>
		<li>
			easily selfhosted, targeting the low-end VPS tier (~$4/mo), will remain lightweight but
			extensible
		</li>
		<li>uses tech like Postgres, Node, TypeScript, Svelte, and SvelteKit</li>
		<li>we want to make stuff with it</li>
	</ul>
	<p>
		We'll provide defaults and templates, and users can modify the software for their own needs.
		We'll support simple and scalable static web publishing like blogs and RSS/Atom feeds, and also
		provide tools to make realtime social experiences and games that inherit your social context
		automatically. We want creating tools and sharing them to be a normal part of the experience.
	</p>
	<p>
		It's a big set of goals, and we think we have useful contributions particularly around UX. We
		think we see an opportunity to hit a sweet spot for small communities with our set of design and
		tech choices. Our
		<a
			href="https://www.felt.social/toolmakersforum/episode/9-big-ideas-in-our-community-software-part-1"
			>9th</a
		>
		and
		<a
			href="https://www.felt.social/toolmakersforum/episode/10-big-ideas-in-our-community-software-part-2"
			>10th</a
		> podcast episodes go into more detail on the main ideas.
	</p>
	<h2>The projects</h2>
	<p>We have a handful of software repos, none of which are yet production ready:</p>
	<ul>
		<li>
			<a href="https://github.com/feltjs/felt-server">@feltjs/felt-server</a> – a programmable platform
			for hobbyists and human-scale communities, the Node.js server that's selfhostable and available
			as a library on npm
		</li>
		<li>
			<a href="https://github.com/feltjs/felt-ui">@feltjs/felt-ui</a> – styles and UI components for
			Svelte and SvelteKit 💚
		</li>
		<li>
			<a href="https://github.com/feltjs/felt-template">@feltjs/felt-template</a> – a static web app
			template with SvelteKit, TypeScript, and Felt for quickly creating new projects - in the future
			it will support quickly creating a custom server project, too.
		</li>
		<li>
			<a href="https://github.com/feltjs/util">@feltjs/util</a> – JS utilities to complement the modern
			web platform 🦕🐋
		</li>
		<li>
			<a href="https://github.com/feltjs/gro">@feltjs/gro</a> – a toolkit that extends SvelteKit and
			Vite with things we find useful for making web apps; it's used by all of our other projects
		</li>
	</ul>
	<h2>Summary</h2>
	<p>
		With Felt, I hope we can make the role of toolmaker more accessible to more people on the web,
		to help them bring their ideas to life, while supporting beneficial relationships with
		technology. I like our combination of solid technical foundations, lightweight implementation,
		and DIY hackability.
	</p>
	<hr />
	<h2>Wait the blog post isn't done?</h2>
	<p>
		I'm having difficulty summarizing the project: it's big and there are many unknowns. I'll write
		more followup blog posts, hopefully more coherent than this one, but for now I'll add a few more
		thoughts below.
	</p>
	<hr />
	<h2>Everyone can be a toolmaker</h2>
	<p>
		Instead of being limited to filling digital boxes designed by tech companies, anyone should be
		able to design their own box. Or forget boxes even, we're digitized. We see examples of what's
		possible in all sorts of products over decades, especially in games, and I believe there's fresh
		opportunities to do this with web tech.
	</p>
	<p>
		We want to build software tools that anyone can use to explore the vast terrain of collaborative
		experiences, so you could take a larger role in designing your media, if you want. A key here is
		to make a great media sharing UX, so some % of people make and share useful and cool stuff, and
		everyone benefits.
	</p>
	<hr />
	<h2>Sharing spaces with others</h2>
	<p>
		One aspect of community software that's full of interesting opportunities is how to govern
		shared spaces: things like exercising power, communicating and enforcing rules, nudging norms,
		making collective decisions, scripting governance processes over time, and so on. Each group of
		people has distinct needs.
	</p>
	<p>
		We're collaborating with PhD candidate Jane Im (<a href="https://imjane.net/">imjane.net</a>) on
		designs including research-backed user-driven governance. Her paper "Yes: Affirmative Consent as
		a Theoretical Framework for Understanding and Imagining Social Platforms" (<a
			href="https://consentful.systems/">consentful.systems</a
		>), which credits <a href="https://www.consentfultech.io/">The Consentful Tech Project</a>, has
		been a major source of inspiration for how we think about designing software.
	</p>
	<p>
		Our perspective as toolmakers is that we'll attempt to support a wide range of possibilities,
		from traditional moderator setups to democratic control and much more, and provide templates and
		guidance to help communities achieve their goals. We'll give this a lot of attention before
		beta, but I suspect the delightfully good stuff is 1-2+ years away, maybe using standards that
		<a href="https://metagov.org/">Metagov</a> is developing. I'm also keeping related projects
		<a href="https://communityrule.info/">CommunityRule</a>
		and <a href="https://policykit.org/">PolicyKit</a> in mind.
	</p>
	<hr />
	<h2>Business and ownership</h2>
	<p>
		We haven't done the legal work to make it official, but the Felt project trademarks and domains
		(like <a href="/felt.png">the green heart logo</a> and
		<a href="https://www.felt.dev/">felt.dev</a>) will be owned and managed by some kind of
		nonprofit entity. This is a commitment to the public open source community that these are
		community assets.
	</p>
	<hr />
	<h2>Tech notes</h2>
	<p>
		We tried to be thoughtful about our tech stack given the assumption that we'll be in the
		JS+node+npm ecosystem. We chose the web because we think it's the best way to deliver the UX we
		want to the most people, and we chose these specific technologies because of fit, familiarity,
		and productivity.
	</p>
	<h3>on the shoulders of giants on the backs of turtles</h3>
	<p>The web is everywhere and has much unrealized potential.</p>
	<p>
		Node.js, TypeScript, Postgres, nginx, and Linux are all productive and capable of delivering a
		good UX in combination.
	</p>
	<p>
		Svelte, SvelteKit, and Vite have been fantastic for making UIs. We don't yet make
		<a
			href="https://github.com/feltjs/felt-server/blob/main/src/docs/known-issues.md#not-using-sveltekits-server-side-data-loading"
			>full use of SvelteKit's features</a
		>, but we feel highly productive and literally delighted working with it, and its flexibility is
		a wonder.
	</p>
	<h3>customizable and extensible</h3>
	<p>
		Both the server and (future) clients are open source and our APIs are open, so clients can be
		modified or created from scratch. We use TypeScript and Svelte across the full stack, and we try
		to leverage the benefits of integration when available, like sharing types, helpers, and
		schemas. We'll try to maximize the freedoms of users and developers, but security and
		performance are unfortunate constraints and sometimes buzzkills :\
	</p>
	<p>
		Our client has a <a href="https://wikipedia.org/wiki/Client_(computing)#Thick">thickness</a>
		optimized for a powerful and low-latency UX over long sessions, which means a lot of JS and client-side
		caching, and thanks to SvelteKit we should be able to deliver good experiences in many cases with
		fast loadtimes and minimal or zero JS.
	</p>
	<h3>scaling (and not)</h3>
	<p>
		Our focus on "small communities" relates to a potentially deflating fact about our software: it
		doesn't scale to large numbers of people or some kinds of heavy load. Felt can't be the best
		solution to all problems, and tradeoffs are unavoidable.
	</p>
	<div>We're optimizing to:</div>
	<ul>
		<li>quickly iterate on social experiences with human-scale groups of people</li>
		<li>
			on a single machine (running a server and local database with light resource requirements)
		</li>
		<li>with web tech (this puts us in a particular ecosystem of software)</li>
	</ul>
	<p>
		The limits may appear restrictive compared to the infinite cloud worlds that can host a global
		social network, but these choices and tradeoffs give us a highly productive environment with low
		resource needs that's powerful in the small, and maybe small communities are good too.
	</p>
	<blockquote>
		Today, <a href="https://github.com/feltjs/felt-server"><code>@feltjs/felt-server</code></a>
		supports only
		<code
			><a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node"
				>@sveltejs/adapter-node</a
			></code
		> – we'd like to be compatible with as many SvelteKit adapters as possible, giving operators access
		to more scalable cloud backends, but we haven't worked it into our roadmap
	</blockquote>
	<p>
		We should be able to support non-realtime usecases that scale to more users like blogs and
		similar web publishing, much for free thanks to SvelteKit. We're prioritizing flexibility and UX
		over the ability to handle massive amounts of data, and we'll improve various kinds of scaling
		over time.
	</p>
	<p>
		Even though our code isn't pushing the boundaries of gamedev-level performance and enterprise
		readiness, we're trying to write it modularly and with good principles, so hopefully it evolves
		gracefully and enables better tools to be built on its foundations. We're cutting a lot of
		corners but also investing a lot in particular parts of the tech up front, trying to plan for
		the long run to maximize power for the user.
	</p>
	<h3 id="interop">interop and decentralization</h3>
	<p>
		I value giving users choices, and that includes <a
			href="https://www.eff.org/deeplinks/2019/10/adversarial-interoperability"
			>cooperative interoperability</a
		>, but we're a 2 person team with limited resources trying to deliver a specific UX. Today this
		means we have a centralized Node server with a lot of homemade solutions. One of my
		long/medium-long term goals is to support at least one federated/decentralized standard like
		<a href="https://www.w3.org/TR/activitypub/">ActivityPub</a>.
	</p>
	<p>
		Given Felt's small-scale design and selfhostability, it may help to think of it as "<a
			href="https://wikipedia.org/wiki/Polycentric">polycentric</a
		>", where each community is a silo of self-governed data, and a service may host one or more
		communities. In combination with clients that connect to multiple services, I think
		"decentralized" is an appropriate description, but not in the way some people want. I won't be
		satisfied until Felt can federate with the wider world, especially for user identity.
	</p>
	<p>
		In our data system, we're trying to follow <a href="https://www.w3.org/TR/activitystreams-core/"
			>the ActivityStreams vocabulary spec</a
		>
		that's used in the fediverse and Mastodon (and I made some
		<a href="https://ryanatkn.github.io/corpus-activity-streams/">unofficial docs</a>), but we have
		our own bespoke client-server protocol that works over http and websockets, and our database
		tables don't map to ActivityStreams vocabulary, only <code>Entity</code> objects do. We publish
		<a href="https://github.com/feltjs/felt-server/blob/main/src/static/schemas/vocab.json"
			>a JSON Schema with our vocabulary</a
		>, and we could generate OpenAPI schemas from our source of truth, which would give us greatly
		expanded access to existing tooling, but we have no plans for that yet.
	</p>
	<p>
		We try to use
		<a href="https://json-schema.org/">JSON Schema</a>
		where it makes sense, and we support both RESTful-ish http endpoints and websockets using
		<a href="https://www.jsonrpc.org/specification">JSON-RPC 2.0</a>.
	</p>
	<p>
		We want to be good citizens of open standards, not just do our own thing detached from open
		ecosystems, but we have very specific ideas of what we want to build for small communities, and
		federated tech isn't optimal for today's goals. I personally think decentralized technologies
		are the future and I would want to help Felt move with the times.
	</p>
	<blockquote>
		"decentralized" means a lot of things, and while I think it's a broadly inevitable future, I
		believe the rather important details of ownership and power have yet to be determined, and my
		hope is that justice-oriented movements like <a href="https://platform.coop/"
			>platform cooperatives</a
		>
		and <a href="https://getdweb.net/principles/">the DWeb</a>
		do better than the <a href="https://wikipedia.org/wiki/Rent-seeking">rent-seeking</a> and
		financializing that dominates today; I want to own (or at least co-own) the digital ground under
		my own feet, don't you<a href="https://wikipedia.org/wiki/Golden_Rule">?</a>
	</blockquote>
	<hr />
	<h2>Find us</h2>
	<ul>
		<li>
			@feltjs on
			<a href="https://github.com/feltjs">GitHub</a> &
			<a href="https://www.npmjs.com/org/feltjs">npm</a>
		</li>
		<li>
			@feltcoop on
			<a href="https://github.com/feltcoop">GitHub</a>,
			<a href="https://www.npmjs.com/org/feltcoop">npm</a>,
			<a href="https://twitter.com/feltcoop">Twitter</a> &
			<a href="https://www.youtube.com/@feltcoop">YouTube</a>
		</li>
		<li>
			also <a href="https://tinyletter.com/FeltCoop">a monthly newsletter</a> and
			<a href="https://www.felt.social/toolmakersforum">podcast</a>
		</li>
	</ul>
</div>
