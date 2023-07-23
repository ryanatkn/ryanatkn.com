<script lang="ts" context="module">
	import {base} from '$app/paths';

	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/0',
		title: 'Making free and open source web community software',
		url: 'https://www.ryanatkn.com/blog/making-free-and-open-source-web-community-software',
		date_published: '2022-05-13T01:42:23.000Z',
		date_modified: '2023-07-23T17:12:50.674Z',
		summary:
			'I discuss my work on open source community software called feltjs, giving a brief overview of the design and technology choices, and announcing our newsletter and podcast.',
		tags: ['web', 'technology', 'social', 'software', 'open source', 'community', 'FOSS'],
	};
</script>

<div class="prose">
	<p>
		<a href="https://www.felt.dev/">
			<img
				style:float="right"
				style:width="144px"
				style:margin-left="20px"
				style:margin-top="20px"
				src="/felt.png"
				alt="a microscopic-fiber-textured green heart with the word felt cut out"
				title="felt.dev"
			/></a
		>
		<br />
		I've been making free and open source web community software with
		<a href="https://12mod12.com/">Hamilton Reed</a> full-time
		<a href="https://github.com/feltjs/felt-server/graphs/contributors">since April 2021</a>. (he's
		@greatbacon on <a href="https://github.com/greatbacon">GitHub</a> and
		<a href="https://hachyderm.io/@greatbacon">Mastodon</a>) We've been working quietly in public
		and leaving a trail of informal documentation through
		<a href="https://github.com/feltjs/felt-server/pulls">GitHub PRs</a>. We'll announce when we
		reach alpha in Q3 2023.
	</p>
	<p>
		Hamilton and I first met in December 2019 and started self-funded part-time work on what would
		become <a href="https://github.com/feltjs">@feltjs</a>. One of the main ideas was to make tools
		to help people be creative together. Visit
		<a href="https://www.felt.dev/">felt.dev</a>
		to see where we are. If you want to consume our media, we publish a
		<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a>
		and a podcast produced by Hamilton called
		<a href="https://www.felt.social/toolmakersforum">Toolmakers Forum</a>.
	</p>
	<p>
		Our main project is <a href="https://github.com/feltjs/felt-server">felt-server</a>, an
		extensible Node.js server and web frontend described as "a programmable platform for hobbyists
		and human-scale communities". The main UI looks like Discord and Slack on the surface, and it
		has aspects of a
		<a href="https://wikipedia.org/wiki/Content_management_system">content management system</a>
		and
		<a href="https://wikipedia.org/wiki/Knowledge_management_software"
			>knowledge management software</a
		> in a collaborative environment. We're aiming for a batteries-included, deeply customizable experience
		with a small footprint, that feels familiar and surprisingly powerful. Calling it a "programmable
		platform" is the best we have right now.
	</p>
	<p>
		felt-server targets a specific UX. Instead of trying to replace any of today's large platforms,
		we think of felt-server as filling a niche that venture-funded startups and other commercial
		interests rationally ignore.
	</p>
	<ul>
		<li>
			it's made by and for devs, hobbyists, selfhosters, tinkerers, techies, lazy automation
			enjoyers - it should give you all the control you want, and remain a relatively simple project
			that's easy and cheap to self-host
		</li>
		<li>
			designed for small groups - scaling to thousands of people is less important than the depth of
			interaction and richness of capabilities
		</li>
		<li>
			multipurpose, extensible, and interoperable, so the same toolkit can be used for many kinds of
			communities and websites and problems - felt-server can run some of your friendly bots in the
			clouds with a nice web GUI
		</li>
		<li>
			is free and open source with a documented API, and it's designed for fullstack customization,
			which means devs and end-users have proper access and power over their UX and systems and
			code, and we bridge more of the gap between programming and using
		</li>
	</ul>
	<p>
		Fullstack customization is key to why I want to work on Felt, but it's just a vague idea with
		some glimmers of promise scattered around. The point is to help you solve your problems, so we
		design the system holistcally with that in mind - the UX is the DX is the UX. For devs, this
		means we'll have open source components, clients, and servers that are designed to be extended
		and plugged and swapped. It also means our system vocabulary is exposed in the UX, so the system
		itself is more visible and directly interactive. For end-users it means:
	</p>
	<ul>
		<li>
			a comfortable environment that looks like existing social apps, but when you go digging you
			find it's deeply customizable and flexible, and now it makes sense that people say all these
			seemingly different web experiences were "made with feltjs"
		</li>
		<li>
			a user-friendly text language (not Markdown but similar) with access to a rich vocabulary that
			can be used to write chat messages, blog posts, forum replies, todo items, and so on, and also
			construct both social spaces and the entire client UI, making it an accessible experience to
			design and share UI
		</li>
		<li>
			easy-to-use plugins/mods/applets made by both feltjs and hopefully a community of
			developer-users, and clear paths to learning the technical skills to make your own stuff -
			making things should be only as complex as necessary
		</li>
		<li>
			integration of low-level systems with high-level UX, like integrated interactive
			documentation, a contextmenu UI pattern for digging into anything, and recording events and
			authoring scripts and then composing them, like with governance processes (e.g. "execute this
			script if the vote passes")
		</li>
	</ul>
	<p>
		We'll provide defaults and templates, and users can modify the software for their own needs.
		We'll support simple and scalable static web publishing like blogs and RSS/Atom feeds, and also
		provide tools to make realtime social experiences and games that inherit your social context,
		enabling beginners to participate in the creative process. We want the act of creating tools and
		sharing them to be a normal and expected part of the experience.
	</p>
	<p>
		It's a big set of goals, and we think we have useful contributions particularly around UX. We
		think we see an opportunity to hit an under-served sweet spot for small communities with our set
		of design and tech choices. Our
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
			Vite with things we find useful for making web apps - it's used by all of our other projects
		</li>
	</ul>
	<p>
		With feltjs, I hope we can make the role of toolmaker more accessible to more people on the web,
		to help them bring their ideas to life, while supporting beneficial relationships with
		technology. I like our combination of solid technical foundations, lightweight implementation,
		and DIY hackability. So far it's been fun.
	</p>
	<hr />
	<h2>Find us</h2>
	<ul>
		<li>
			@feltjs on
			<a href="https://github.com/feltjs">GitHub</a> and
			<a href="https://www.npmjs.com/org/feltjs">npm</a>
		</li>
		<li>
			<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a> and
			<a href="https://www.felt.social/toolmakersforum">podcast</a>
		</li>
	</ul>
	<hr />
	<h2>P.S.</h2>
	<p>
		I'm having difficulty summarizing the project: it's big and there are many unknowns. The ideas
		below seem important to include but not that important, and you may not be the right audience.
		Thanks for reading.
	</p>
	<hr />
	<h2>Everyone can be a toolmaker</h2>
	<p>
		Instead of being limited to filling digital boxes designed by tech companies, anyone should be
		able to design their own box and share that pattern with others. We see examples of what's
		possible in all sorts of products over decades, especially in games, and there's fresh
		opportunities to do this with web tech.
	</p>
	<p>
		I want software for exploring the vast potential of collaborative experiences on the web, so you
		could take a larger role in designing your media, if you want. A key here is to make a great
		media sharing UX, so some fraction of people make and share useful and cool stuff, and everyone
		benefits. Also, creating the tools of creation should be open and ecosystemified, so we can
		experiment for our particular situations.
	</p>
	<hr />
	<h2>Business and ownership</h2>
	<p>
		We haven't done the legal work to make it official, but the feltjs trademarks and domains (like <a
			href="/felt.png">the green heart logo</a
		>
		and
		<a href="https://www.felt.dev/">felt.dev</a>) will be owned and managed by some kind of
		nonprofit entity. This is a commitment to the public open source community that these are
		community assets.
	</p>
	<p>
		Originally, I thought I was going to operate a hosting company as a platform co-op at <a
			href="https://www.felt.social/">felt.social</a
		>. We're making selfhostable software, but not everyone wants to self-host, so we can offer it
		for a fee and make a sustainable open source endeavor in one move. However, we won't get the
		best software if a hosting company has too much influence over the software's development, and
		it turns out that I want my life to be focused on software development, and I'll gladly pay
		money to people who enjoy operations in exchange for a simpler life. Hamilton may continue
		pursuing felt.social as a cooperatively owned host, he'll just need 4 cofounders instead of 3 to
		officially start the co-op in Colorado, and I would love to be a paying customer.
	</p>
	<hr />
	<h2>Sharing spaces with others</h2>
	<p>
		One aspect of community software that's full of interesting opportunities is how to govern
		shared spaces - things like exercising power, communicating and enforcing rules, nudging norms,
		making collective decisions, scripting governance processes over time, and so on. Each group of
		people has distinct needs. I wrote about modeling social spaces in <a
			href="{base}/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday"
			>my second blog post</a
		>.
	</p>
	<p>
		For part of 2021 and 2022 we collaborated with PhD candidate Jane Im (<a
			href="https://imjane.net/">imjane.net</a
		>) on designs related to research-backed user-driven governance. Her paper "Yes: Affirmative
		Consent as a Theoretical Framework for Understanding and Imagining Social Platforms" (<a
			href="https://consentful.systems/">consentful.systems</a
		>), which credits <a href="https://www.consentfultech.io/">The Consentful Tech Project</a>, has
		been a major source of inspiration for how we think about designing software.
	</p>
	<p>
		Our perspective as toolmakers is that we'll attempt to support a wide range of possibilities,
		from traditional moderator setups to democratic control and much more, and provide templates and
		guidance to help communities achieve their goals. We'll give this a lot of attention before
		beta, but I suspect the good stuff is years away, maybe using standards that
		<a href="https://metagov.org/">Metagov</a> is developing. I'm also following related projects
		<a href="https://communityrule.info/">CommunityRule</a>
		and <a href="https://policykit.org/">PolicyKit</a>.
	</p>
	<hr />
	<h2>Tech notes</h2>
	<p>
		We tried to be thoughtful about our tech stack to be friendly to beginners without compromising
		on the UX we deliver. We chose the web because we think it's the best way to deliver the UX we
		want to the most people, and we chose JS, Node.js, and npm because of fit, familiarity, and
		productivity.
	</p>
	<p>
		Our code is written for Node.js today, but we should be able to offer significant runtime
		flexibility in the long term, largely thanks to <a href="https://kit.svelte.dev/">SvelteKit</a>,
		so you may choose Deno, Bun, a cloud platform's serverless offerings, or whatever else is in the
		Node.js legacy compat space. We're trying to minimize our exposure to Node-specific APIs to keep
		portability high. Node.js a practical choice, not an idealized one.
	</p>
	<h3>on the shoulders of giants on the backs of turtles</h3>
	<p>
		The web is everywhere and has a lot of unrealized potential. Node.js, Postgres, nginx, and Linux
		are all productive and capable of delivering a good UX in combination. TypeScript, Svelte,
		SvelteKit, and Vite have been fantastic for making UIs. We don't yet make
		<a
			href="https://github.com/feltjs/felt-server/blob/main/src/docs/known-issues.md#not-using-sveltekits-server-side-data-loading"
			>full use of SvelteKit's features</a
		>, but we feel productive and literally delighted working with it.
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
		doesn't scale to large numbers of people or some kinds of heavy load. felt-server can't be the
		best solution to all problems, so we make tradeoffs intentionally to serve a particular UX.
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
		Given felt-server's small-scale design and selfhostability, it may help to think of it as "<a
			href="https://wikipedia.org/wiki/Polycentric">polycentric</a
		>", where each community or "hub" is a silo of self-governed data, and a service may host one or
		more hubs. In combination with clients that connect to multiple services, I think
		"decentralized" is an appropriate description, but not in the way some people want. I won't be
		satisfied until felt-server can federate with the wider world, especially for user identity.
	</p>
	<blockquote>
		I don't know which standards will or should win with identity, that's out of my expertise, but I
		have to make decisions for users, and I'm currently planning on supporting <a
			href="https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)">OpenID Connect</a
		>
		(OIDC) to complement our current password-in-a-cookie authentication. I like how the
		<a href="https://atproto.com/">AT Protocol</a> uses domains for identity. Compared to ActivityPub
		identities, they offer significantly better portability and stability. Together with subdomains,
		I like the combination of user-friendliness, flexibility, and DNS-derived authority.
	</blockquote>
	<p>
		In our data system, we're trying to follow <a href="https://www.w3.org/TR/activitystreams-core/"
			>the ActivityStreams vocabulary spec</a
		>
		that's used in <a href="https://www.w3.org/TR/activitypub/">ActivityPub</a> and
		<a href="https://joinmastodon.org/">Mastodon</a>
		(and I made some
		<a href="https://ryanatkn.github.io/corpus-activity-streams/">unofficial docs</a>), but we have
		our own bespoke client-server protocol that works over http and websockets, and our database
		tables don't map to ActivityStreams vocabulary, only <code>Entity</code> objects do. We publish
		<a href="https://github.com/feltjs/felt-server/blob/main/src/static/schemas/vocab.json"
			>a JSON Schema with our vocabulary</a
		>, and we could generate OpenAPI schemas from our source of truth, which would give us greatly
		expanded access to existing tooling, but we have no plans for that yet.
	</p>
	<p>
		We publish <a
			href="https://github.com/feltjs/felt-server/blob/main/src/static/schemas/vocab.json"
			>schemas of our vocabulary</a
		>
		using
		<a href="https://json-schema.org/">JSON Schema</a>, and we support both RESTful-ish http
		endpoints and websockets using
		<a href="https://www.jsonrpc.org/specification">JSON-RPC 2.0</a>. We'll have a better docs
		website online soon.
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
			<a href="https://github.com/feltjs">GitHub</a> and
			<a href="https://www.npmjs.com/org/feltjs">npm</a>
		</li>
		<li>
			<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a> and
			<a href="https://www.felt.social/toolmakersforum">podcast</a>
		</li>
	</ul>
</div>
