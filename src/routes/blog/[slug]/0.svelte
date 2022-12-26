<script lang="ts">
	import {base} from '$app/paths';

	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import {feedData} from '$lib/feedData';

	// TODO refactor this probably, maybe putting the post in context
	const post = feedData.items[0];
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPostHeader {post} />
<p>
	I've been building an open source web project focused on community software with <a
		href="https://12mod12.com/">Hamilton Reed</a
	>
	(<a href="https://twitter.com/greatbaconbits">Twitter</a>,
	<a href="https://github.com/greatbacon">GitHub</a>) fulltime for a year,
	<a href="https://github.com/feltcoop/felt-server/graphs/contributors">since April 2021</a>. It's
	been two and a half years since we first met in December 2019 to talk about a potential
	collaboration. We
	<a href="https://twitter.com/feltcoop">@feltcoop</a>
	recently started a
	<a href="https://tinyletter.com/FeltCoop">monthly newsletter</a>
	and (gulp) a podcast called
	<a href="https://www.felt.social/toolmakersforum">Toolmakers Forum</a>. I plan to write about its
	ideas on this blog.
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
		aiming for a batteries-included, deeply customizable experience with a small footprint, that
		feels familiar and surprisingly powerful.
	</li>
	<li>is designed for small communities</li>
	<li>
		is multipurpose, so the same toolkit can be used for many kinds of communities along with
		standalone websites
	</li>
	<li>
		is open source and designed for fullstack customization, which means devs and endusers have
		proper access and power over their UX and systems and code, and we bridge more of the gap
		between programming and using
	</li>
	<li>
		is currently <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a>, and
		we hope to reach alpha in Q1 2023
	</li>
</ul>
<blockquote>
	‼ please note this pre-alpha software is <strong>not yet secure</strong>, so use it at your own
	risk and please don't pipe it data that you don't want public (also, we don't yet operate a public
	instance)
</blockquote>
<p>
	Fullstack customization is key to why I want to work on Felt, but it has a lot of unknowns and we
	need to implement it to understand it. For devs, it means we'll have open source components,
	clients, and servers that are designed to be extended and plugged and swapped. For endusers it
	means:
</p>
<ul>
	<li>
		a comfortably familiar environment that looks like existing social apps, but more deeply
		customizable and flexible
	</li>
	<li>
		a <a href="https://svelte.dev/">composable text language</a> with a rich vocabulary that can be used
		to write chat messages, forum and blog posts, todo items, and so on, and also construct both social
		spaces and the entire client UI
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
	specialized tools for a task. The current featureset is a single app with chats+forums+todos+more
	that's perhaps less slick than each but far more powerful in 1, supporting both realtime and
	asynchronous communications, and collaborative everywhere, and we'll prioritize interoperability
	to make Felt fit into workflows it doesn't know about. (this is complicated, see below for <a
		href="#interop">more on interop</a
	>)
</p>
<p>
	We're calling Felt's server <a href="https://github.com/feltcoop/felt-server"
		>"a tool for building and maintaining communities"</a
	>.
</p>
<ul>
	<li>easily selfhosted, targeting the low end VPS tier (~$5/mo)</li>
	<li>uses tech like Postgres, Node, TypeScript, Svelte, SvelteKit, and websockets</li>
	<li>we want to use it personally and make stuff with it</li>
	<li>we're using it professionally to build itself under democratic control</li>
	<li>
		we plan for the operator to become a <a href="https://platform.coop">platform co-op</a> and the software
		project a nonprofit
	</li>
</ul>
<p>
	We'll provide defaults and templates, and users can modify the software for their own needs. We'll
	support simple and scalable static web publishing like blogs and RSS feeds, along with the tools
	to make realtime social experiences and games.
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
<h2>The projects:</h2>
<p>We have a handful of software repos, none of which are yet production ready:</p>
<ul>
	<li>
		<a href="https://github.com/feltcoop/felt-server">@feltcoop/felt-server</a> – the community software
		that's both deployable and available as a library on npm
	</li>
	<li>
		<a href="https://github.com/feltcoop/felt">@feltcoop/felt</a> – reusable library of components and
		other code for building things from simple websites to realtime interactive multiplayer experiences
		(eventually this will include much of what's currently in @feltcoop/felt-server)
	</li>
	<li>
		<a href="https://github.com/feltcoop/felt-template">@feltcoop/felt-template</a> – a static web app
		template with SvelteKit, TypeScript, and Felt for quickly creating new projects - in the future it
		will support quickly creating a custom server project, too.
	</li>
	<li>
		<a href="https://github.com/feltcoop/gro">@feltcoop/gro</a> – a toolkit that extends SvelteKit and
		Vite with things we find useful for making web apps; it's used by all of our other projects
	</li>
	<li>
		<a href="https://github.com/feltcoop/dealt">@feltcoop/dealt</a> – we haven't touched it in a minute,
		and there's not much there yet, but it's a fun side project to showcase how the software can be used
	</li>
</ul>
<h2>In summary:</h2>
<p>As software users, we want easy-to-use and powerful tools that we can tailor to our needs.</p>
<p>
	As platform users, we want a professional, trusted, incentives-aligned operator, and we'll pay for
	it.
</p>
<p>As service providers, we want to build reliable orgs to operate infra to help users succeed.</p>
<p>
	As devs, we want to build great software for people, usually prioritizing endusers over operators.
</p>
<p>
	As toolmakers we want to help users bring their own visions to life and support beneficial
	relationships with technology.
</p>
<p>
	The idea is to make <a href="https://github.com/feltcoop">the software</a> we want to use, at
	<a href="https://www.felt.social">the company</a> we want to work for, providing the service we want
	to pay for.
</p>
<p>
	more at <a href="https://github.com/feltcoop">github.com/feltcoop</a>
</p>
<hr />
<h2>Wait the blog post isn't done?</h2>
<p>
	I'm having difficulty summarizing the project: it's big, there's many unknowns, and my
	summarization skills could certainly improve. I'll write more followup blog posts, hopefully more
	coherent than this one, but for now I'll add a few more thoughts below.
</p>
<hr />
<h2>Everyone can be a toolmaker:</h2>
<p>
	Instead of being limited to filling digital boxes designed by tech companies, anyone should be
	able to design their own box. Or forget boxes even, we're in the digital realms. We see examples
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
	One aspect of community software that's full of interesting opportunities is how to govern shared
	spaces: things like exercising power, communicating and enforcing rules, nudging norms, making
	collective decisions, scripting governance processes over time, and so on. Each group of people
	has distinct needs.
</p>
<p>
	We're collaborating with PhD student Jane Im (<a href="https://imjane.net/">imjane.net</a>) on
	designs including research-backed user-driven governance. Her paper "Yes: Affirmative Consent as a
	Theoretical Framework for Understanding and Imagining Social Platforms" (<a
		href="https://consentful.systems">consentful.systems</a
	>), which credits <a href="https://www.consentfultech.io/">The Consentful Tech Project</a>, has
	been a major source of inspiration for how we think about designing software.
</p>
<p>
	Our perspective as toolmakers is that we'll attempt to support a wide range of possibilities, from
	traditional moderator setups to democratic control and much more, and provide templates and
	guidance to help communities achieve their goals. We'll give this a lot of attention before beta,
	but I suspect the delightfully good stuff is 1-2+ years away, maybe using standards that
	<a href="https://metagov.org/">Metagov</a> is developing. I'm also keeping related projects
	<a href="https://communityrule.info/">CommunityRule</a>
	and <a href="https://policykit.org/">PolicyKit</a> in mind.
</p>
<hr />
<h2>Business and ownership:</h2>
<p>
	<a href="https://www.felt.social">felt.social</a> is a separate entity from Felt the software
	project. We haven't done the legal work to make it official, but the Felt project trademarks and
	domains (like <a href="{base}/felt.png">the green heart logo</a> and
	<a href="https://www.felt.dev">felt.dev</a>) will be owned and managed by some kind of nonprofit
	entity, not the
	<a href="https://www.felt.social">felt.social</a> co-op. The co-op is just one stakeholder from the
	perspective of governing the Felt project. This is a commitment to the public open source community
	that these are community assets.
</p>
<p>
	<strong>felt.social business model</strong>: no ads, no crypto, free and fully open source (<a
		href="https://wikipedia.org/wiki/MIT_License">permissively licensed</a
	>, not "<a href="https://en.wikipedia.org/wiki/Open-core_model">open core</a>") - users pay for
	service and if it's sustainable we'll creatively subsidize users for more equitable access
</p>
<p>
	<strong>felt.social ownership/control</strong>: self-funded worker co-op with plans to become a
	<a href="https://platform.coop">platform co-op</a>, is forprofit but co-op could choose to become
	a nonprofit (this seems likely? we just don't know yet, and we promise we won't sell out our
	community for a bigmoney #exit)
</p>
<p>
	How does this business model work, giving away the software for free? Because the product we're
	selling isn't the open source software, it's the service and network.
</p>
<p>
	We think we can reach sustainability at usercounts that look *very* small compared to a typical
	ambitious startup, and we don't feel threatened by other service providers taking some or most of
	the pie. The terms we're competing on don't require that we have a monopoly on hosting the
	service.
</p>
<p>So what does success look like?</p>
<p>
	The goal for sustainability is to be able to fund, and then find, three more colleagues and turn
	our <a href="https://github.com/feltcoop/felt/blob/main/GOVERNANCE.md"
		>Temporary Benevolent Dictatorship</a
	> into a real co-op. Five is the number of people required to form a Colorado cooperative; Hamilton
	lives there and although we're a remote team, it has some of the best-developed cooperative laws in
	the United States.
</p>
<p>
	I would consider it a great success if one day, democratically selected experts make the difficult
	operational decisions and I, web developer, get to stick to webdev.
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
	want to the most people, and we chose these specific technologies because of fit, familiarity, and
	productivity.
</p>
<h3>on the shoulders of giants on the backs of turtles:</h3>
<p>the Web is everywhere and has vast unrealized potential</p>
<p>Node, TypeScript, Postgres, and nginx are productive and solid</p>
<p>
	Svelte, SvelteKit, and Vite have been a fantastic set of tools for making UIs. We don't yet use
	some of SvelteKit's flagship features like endpoints, but we feel productive and literally
	delighted working with it, and its flexibility is a wonder. We've been deprioritizing full SSR but
	it's a relief to know it's there when we're ready for it. It's amazing how much of the load
	SvelteKit lifts from our shoulders.
</p>
<h3>customizable and extensible:</h3>
<p>
	Both the server and clients are open source and our APIs are open, so clients can be modified or
	created from scratch. We'll try to maximize the freedoms of users and developers, but security and
	performance are unfortunate constraints and sometimes buzzkills :\
</p>
<p>
	Our client has a <a href="https://wikipedia.org/wiki/Client_(computing)#Thick">thickness</a>
	optimized for a powerful and low-latency UX over long sessions, which means a lot of JS and client-side
	caching, and thanks to SvelteKit we should be able to deliver good experiences in many cases with fast
	loadtimes and minimal or zero JS.
</p>
<h3>scaling (and not):</h3>
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
	Today, <a href="https://github.com/feltcoop/felt-server"><code>@feltcoop/felt-server</code></a>
	supports only
	<code
		><a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node"
			>@sveltejs/adapter-node</a
		></code
	> – we'd like to be compatible with as many SvelteKit adapters as possible, giving operators access
	to more scalable cloud backends, but we haven't worked it into our roadmap
</blockquote>
<p>
	We should be able to support non-realtime usecases that scale to more users like blogs and similar
	web publishing, much for free thanks to SvelteKit. We're prioritizing flexibility and UX over the
	ability to handle massive amounts of data, and we'll improve various kinds of scaling over time.
</p>
<p>
	Even though our code isn't pushing the boundaries of performance and enterprise readiness, we're
	trying to write it modularly and with good principles, so hopefully it evolves gracefully and
	enables better tools to be built on its foundations. We're cutting a lot of corners but also
	investing a lot in particular parts of the tech up front, trying to plan for the long run to
	maximize power for the user.
</p>
<h3 id="interop">interop and decentralization:</h3>
<p>
	Giving users choices is a principle I want to adhere to, and that includes <a
		href="https://www.eff.org/deeplinks/2019/10/adversarial-interoperability"
		>cooperative interoperability</a
	>, but we're a 2 person team with limited resources trying to deliver a specific UX. Today this
	means we have a centralized Node server with a lot of homemade solutions. One of my
	long/medium-long term goals is to support at least one decentralized standard like
	<a href="https://www.w3.org/TR/activitypub/">ActivityPub</a>
	(my current interest) and Matrix.
</p>
<p>
	In our data system, we're trying to follow <a href="https://www.w3.org/TR/activitystreams-core/"
		>the ActivityStreams vocabulary spec</a
	>
	that's used in the fediverse and Mastodon (and I made some
	<a href="https://ryanatkn.github.io/corpus-activity-streams/">unofficial docs</a>), but we have
	our own bespoke client-server protocol that works over http and websockets, and our database
	tables don't map to ActivityStreams vocabulary, only <code>Entity</code> objects do. We could generate
	OpenAPI schemas from our source of truth, which would give us greatly expanded access to existing tooling,
	but we have no plans yet.
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
	decentralized tech isn't optimal for today's goals. I personally think decentralized technologies
	are the future and I would love to help Felt be compatible with standard protocols once we have
	our desired UX.
</p>
<blockquote>
	"decentralized" means a lot of things, and while I think it's a broadly inevitable future, I
	believe the rather important details of ownership and power have yet to be determined, and my hope
	is that justice-oriented movements like <a href="https://platform.coop/">platform cooperatives</a>
	and <a href="https://getdweb.net/principles/">the DWeb</a>
	do better than the <a href="https://wikipedia.org/wiki/Rent-seeking">rent-seeking</a> and
	financializing that dominates today; I want to own (or at least co-own) the digital ground under
	my own feet, don't you<a href="https://wikipedia.org/wiki/Golden_Rule">?</a>
</blockquote>
<hr />
<h2>Ok cool?</h2>
<p>
	find <a href="https://www.felt.social">us</a> @feltcoop on
	<a href="https://twitter.com/feltcoop">Twitter</a> &
	<a href="https://github.com/feltcoop">GitHub</a> &
	<a href="https://www.youtube.com/@feltcoop">YouTube</a>, read
	<a href="https://tinyletter.com/FeltCoop">our monthly newsletter</a>, and look
	<a href="https://www.felt.social/toolmakersforum">a podcast</a>
</p>
