<div class="markup">
	<h1>What we're doing @feltcoop</h1>
	<p>2022 May 1</p>
	<p>
		I've been building an open source web project with <a href="https://twitter.com/greatbaconbits"
			>@greatbaconbits</a
		>
		fulltime for a year, and we <a href="https://twitter.com/feltcoop">@feltcoop</a> recently
		<a href="https://twitter.com/feltcoop/status/1519703424433934336">tweeted about it</a> and
		started <a href="https://tinyletter.com/FeltCoop">a monthly newsletter</a>.
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
			>, and other <a href="https://wikipedia.org/wiki/Social_software">social software</a>
		</li>
		<li>
			is currently <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a>,
			and we hope to reach alpha this year, beta optimistically
		</li>
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
			powerful in 1, supporting both realtime and asynchronous communications, collaborative
			everywhere
		</li>
		<li>
			fullstack modding, so devs and endusers have proper access and power over their UX and
			systems, so we bridge more of the gap between programming & using
			<ul>
				<li>
					devs get open source where they can author and extend components, clients, and servers
				</li>
				<li>
					endusers get a composable text language with a rich vocabulary that can be used to write
					chat messages, forum and blog posts, todo items, and so on, and also construct both their
					social spaces and the client's entire UI
				</li>
				<li>
					clients have a <a href="https://wikipedia.org/wiki/Client_(computing)#Thick">thickness</a>
					optimized for UX
				</li>
				<li>
					both server and clients are open source and our APIs are open, so clients can be modified
					and created from scratch
				</li>
				<li>security and performance are unfortunate constraints and sometimes buzzkills :\</li>
			</ul>
		</li>
	</ul>
	<p>
		It's a big set of goals, and we think we have useful contributions particularly around UX. We
		care about interoperability, so we want our software to play nicely with standardized
		ecosystems.
	</p>
	<p>
		We're calling Felt <a href="https://github.com/feltcoop/felt-server"
			>"a tool for building and maintaining communities"</a
		>. Some details:
	</p>
	<ul>
		<li>easily selfhosted, targeting $5/mo VPS</li>
		<li>using tech like Postgres, Node, TypeScript, Svelte, SvelteKit, and websockets</li>
		<li>we're using it professionally to build itself under democratic control</li>
		<li>we want to use it personally</li>
		<li>goal is to become a <a href="https://platform.coop">platform co-op</a></li>
	</ul>
	<p>
		As toolmakers we want to help users bring their own visions to life, and have a beneficial
		relationship with technology. We'll provide defaults & templates, and users can modify the
		software for their own needs.
	</p>
	<p>
		We'll support simple+scalable static web publishing like blogs, along with hobby-grade realtime
		social experiences & games.
	</p>
	<p>As users, we want a professional, trusted, incentives-aligned operator & we'll pay for it.</p>
	<p>
		As service providers, we want to build reliable orgs to operate infra to help users succeed.
	</p>
	<p>As devs, we want to build great software for users, prioritizing endusers over operators</p>
	<p>
		The idea is to make <a href="https://github.com/feltcoop">the software</a> we want to use, at
		<a href="https://www.felt.social">the company</a> we want to work for, providing the service we want
		to pay for.
	</p>
	<hr />
	<p>
		Of course, all of this is subject to change. I'm just speaking as one member with no knowledge
		of the future.
	</p>
	<p>
		More at <a href="https://github.com/feltcoop">github.com/feltcoop</a> and
		<a href="https://www.felt.social">felt.social</a>
	</p>
	<hr />
	<h2>More on the design</h2>
	<p>
		We want to build software tools that anyone can use to explore the endless terrain of
		collaborative experiences, so you could take a larger role in designing your media, if you want.
		A key here is to make a great media sharing UX, so some % of ppl make+share useful+cool stuff🏞
	</p>
	<p>
		One aspect of community software full of interesting opportunities is how to govern shared
		spaces -- exercising power, communicating rules and nudging norms, making collective decisions,
		scripting governance processes over time, etc. We'll give this a lot of attention before beta.
	</p>
	<hr />
	<h2>Business and ownership</h2>
	<p>
		<strong>business model</strong>: no ads, no crypto,
		<a href="https://wikipedia.org/wiki/MIT_License">free & fully open source</a>; users pay for
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
		ambitious startup, and we don't feel threatened by other service providers taking some or most
		of the pie. The terms we're competing on don't require that we have a monopoly on hosting the
		service.
	</p>
	<p>So what does success look like?</p>
	<p>
		I would consider it a great success if one day, democratically selected experts make the
		difficult operational decisions and I, web developer, get to stick to webdev
	</p>
	<p>
		And success today? Structuring incentives to create the best software we can & executing
		capably, while enjoying the process, focusing on principles, and building good relationships.
	</p>
	<hr />
	<h2>Tech notes</h2>
	<p>
		We tried to be thoughtful about our tech stack given the assumption that we'll be in the
		JS+node+npm ecosystem. We chose the web because we think it's the best way to deliver the UX we
		want to the most people, and we chose these specific technologies because of familiarity and
		fondness.
	</p>
	<h3>on the shoulders of giants on the backs of turtles</h3>
	<p>Postgres and nginx are solid</p>
	<p>Node and TypeScript are productive</p>
	<p>
		Svelte and SvelteKit have been a fantastic set of tools for making UIs. We don't yet use some of
		SvelteKit's flagship features like endpoints, but we feel highly productive working with it, and
		its flexibility appears legitimately amazing. We've been deprioritizing full SSR but it's a
		relief to know it's there when we're ready for it.
	</p>
	<p>the Web has unrealized potential</p>
	<h3>scaling (and not)</h3>
	<p>
		Our focus on "small communities" relates to a deflating fact about our software: the realtime
		stuff doesn't (yet?) scale. We're optimizing for realtime interactive social environments with
		human-scale groups of people on a single machine w/ web tech. That sets quite a few limits.
	</p>
	<p>
		We also support non-realtime usecases that scale to more users like blogs and similar web
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
		trying to write it modularly and with good principles, like a unified serializable event stream
		for the client and server, so better tools could be built on parts of the foundation, we hope.
	</p>
	<h3>interop and decentralization</h3>
	<p>
		We care a lot about interoperability and giving users choices. We try to use
		<a href="https://json-schema.org/">JSON Schema</a>
		where it makes sense, and we support both RESTful-ish http endpoints and websockets using
		<a href="https://www.jsonrpc.org/specification">JSON-RPC 2.0</a>.
	</p>
	<p>
		We're trying to follow <a href="https://www.w3.org/TR/activitystreams-core/"
			>the ActivityStreams vocabulary spec</a
		>
		that's used in the fediverse and Mastodon, but we have our own bespoke client-server protocol that
		works over http and websockets.
	</p>
	<p>
		Though we have a centralized Node server today, one future possibility is to support
		decentralized backends like ActivityPub and Matrix.
	</p>
	<p>nothing's set in stone🪨</p>
	<hr />
	<h2>Cool ok</h2>
	<p>
		find us @feltcoop on <a href="https://twitter.com/feltcoop">Twitter</a> and
		<a href="https://github.com/feltcoop">GitHub</a>
		and read
		<a href="https://tinyletter.com/FeltCoop">our monthly newsletter</a>
	</p>
</div>
