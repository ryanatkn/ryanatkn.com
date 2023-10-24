<script lang="ts" context="module">
	import type {BlogPostData} from '$lib/blog.js';

	export const post = {
		title: 'Modeling virtual social spaces: the roles of steward, operator, and builder',
		slug: 'modeling-virtual-social-spaces-the-roles-of-steward-operator-and-builder',
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
		comments: {
			type: 'mastodon',
			// TODO replace with final url
			url: 'https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959',
		},
	} satisfies BlogPostData;
</script>

<script lang="ts">
	import {page} from '$app/stores';

	import Toot from '$lib/Toot.svelte';
	import HashLink from '$lib/HashLink.svelte';
	// TODO finish draft (and think of a better way to do them)
	// import BlogPost from '$lib/BlogPost.svelte';
	import {mastodon_cache} from '$routes/blog/mastodon_cache.js';
	import {get_blog_feed} from '$lib/blog.js';

	const feed = get_blog_feed();

	let embedded_toot_loading: boolean | undefined;
	let embedded_toot_load_time: number | undefined;

	// TODO @multiple avoid loading in production, lazy import?
	const cache = import.meta.env.DEV ? mastodon_cache : null;
</script>

<!-- TODO finish draft (and think of a better way to do them) -->
<!-- <BlogPost {post}> -->
<div class="width_md">
	<section style:padding-top="var(--spacing_2)" class="prose spaced">
		<p>
			This post began as a demo using <a href="https://joinmastodon.org/">Mastodon</a>
			to add comments to my blog posts, but it morphed into a followup to my second blog post,
			<a href={feed.items[1].url}>"{feed.items[1].title}"</a>, with a heaping dose of navel gazing.
		</p>
		<p>
			This is a <a href="https://wikipedia.org/wiki/Static_web_page">static website</a>, meaning I
			upload some plain files and <a href="https://pages.github.com/">my free web host</a> does the rest.
			There's no server running any logic of mine, and the infrastructure requirements are very simple
			and cheap. GitHub offers the service for free in part because of its low cost. It's also the simplest
			possible flow for me as the author.
		</p>
		<details>
			<summary>click for technical details</summary>
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
					<a href="https://github.com/ryanatkn/ryanatkn.com/archive/refs/heads/deploy.zip" download
						>a zip file</a
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
					Although completely static, this site has the dynamic behavior of fetching data at runtime
					in your browser from <a href="https://hci.social/">my Mastodon host</a>, thanks to the
					power of scripting and
					<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>. Static AND
					dynamic??
				</p>
			</aside>
		</details>
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
			Great, so I can have a static blog and dynamic comments too? Technically yes, but there's more
			to consider than tech. Should anyone be able to leave a comment and reach other readers,
			automatically without my involvement? Certainly not, this isn't my first day on the Internet.
			I feel both a responsibility and desire to curate out spam, abuse, and other bad vibes. This
			is my personal space that I share publicly, and few of us appreciate it when other people muck
			up our happy places, even moreso when that muck affects other friendly visitors.
		</p>
		<p>
			So, I resigned myself to the idea that if I want to enable comments, I need curation that's
			proactive, not reactive. People submit comments, and I can approve them on my own time
			according to my own whims.
		</p>
		<p>
			Sounds like a plan, so how to implement? I could make a post on Mastodon linking to this blog
			post, and then people could reply with their preferred Mastodon client and account, and I'd
			get notified. I want some of those comments to appear on my blog, and I want Mastodon and the
			static files to handle it all, so we can discuss without leaving Mastodon, and I can curate
			without changing my blog.
		</p>
		<p>I took the main idea of client-side Mastodon comments from these blog posts:</p>
		<ul>
			<li>
				<a href="https://cassidyjames.com/blog/fediverse-blog-comments-mastodon/">
					"Toot toot! Mastodon-powered Blog Comments"
				</a>
				by <a href="https://cassidyjames.com/">Cassidy James</a>
			</li>
			<li>
				<a href="https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/">
					"Client-side comments with Mastodon on a static Jekyll website"
				</a>
				by <a href="https://jan.wildeboer.net/">Jan Wildeboer</a>
			</li>
		</ul>
		<p>
			But those implementations have no moderation - anyone can reply on Mastodon, and the comment
			appears on the blog. Even if they had a mechanism for blocking individual posts, I find that
			to be an unreasonable burden in this context. I don't want The Internet to have publishing
			capabilities on my blog. I won't turn this into a space that requires me to be vigilant.
		</p>
		<p>
			Not just that, I don't want even well-meaning people to have the expectation that their words
			will appear here. Even if it's good and relevant content, that's what Mastodon is for! This
			blog is a personal project to support my goal of producing good software, and I'll include
			outside contributions if I feel like it at the time, don't ask me why, idk. I'll burn out or
			stop caring enough under any other arrangement.
		</p>
		<aside>
			I know I'm more sensitive than most here - more on this ahead. The road gets rocky.
		</aside>
	</section>
	<section>
		<div class="prose spaced">
			<h2>Implementing Mastodon comments</h2>
			<p>Our design now has its requirements:</p>
			<ul>
				<li>start with a static website, just a bundle of files hosted cheaply on the web</li>
				<li>on Mastodon, make a post per blog post, and replies can appear as comments here</li>
				<li>fetch comments dynamically on each visitor's machine, with no authentication needed</li>
				<li>proactive moderation, so only comments I approve will appear</li>
			</ul>
			<p>
				<a href="https://docs.joinmastodon.org/">Mastodon docs</a> in hand, I set out to implement.
				Here's
				<a href="https://github.com/ryanatkn/ryanatkn.com/pull/12">the first messy pass on GitHub</a
				>. Scroll down to the bottom of the page to see the comments or expand this demo:
			</p>
		</div>
		<details>
			<summary style:margin-bottom="var(--spacing_xs)"
				>click for an example of an embedded toot with technical details</summary
			>
			<aside>
				<div class="prose">
					<p>
						When I ran into the API limitation, my motivation dried up. I plan to pick it back up
						and publish reusable code, eventually, but for now, be aware <a
							href="https://github.com/ryanatkn/ryanatkn.com/pull/12">the code for this work</a
						> is a big unfinished mess.
					</p>
					<p>
						With some JS, via <a href="https://svelte.dev/">Svelte</a> in this case, we can embed a
						toot, like
						<a href="https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959"
							>the one I made for this blog post</a
						>:
					</p>
				</div>
				<Toot
					storage_key="3_embedded"
					{cache}
					initial_show_settings={true}
					initial_url={post.comments.url}
					bind:loading={embedded_toot_loading}
					bind:load_time={embedded_toot_load_time}
				/>
				<div class="prose">
					<p>
						When you click the "load toot" button, your browser sends a request to a <a
							href="https://joinmastodon.org/">Mastodon</a
						>
						instance at
						<a href="https://hci.social/">mastodon.ryanatkn.com</a>
						that hosts
						<a href="https://mastodon.ryanatkn.com/@ryanatkn">my account</a>. Mastodon is an
						<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>-compatible app in the
						<a href="https://wikipedia.org/wiki/Fediverse">Fediverse</a>.
					</p>
					<p>
						Your browser requests information about <a
							href="https://mastodon.ryanatkn.com/@ryanatkn">the post I made</a
						>
						for this blog post. If the request is successful, some JavaScript runs on your machine to
						display the "comments", replies to my post that I've "favourited". My host mastodon.ryanatkn.com
						has its unauthenticated API enabled (in other words, "secure mode" has not been enabled,
						meaning
						<a href="https://docs.joinmastodon.org/admin/config/#authorized_fetch"
							><code>AUTHORIZED_FETCH</code></a
						>
						is the default <code>false</code>), so we can request data without any logins or other
						complexity.
					</p>
					<p>
						If you like <a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a> you may be
						interested in
						<a href="https://ryanatkn.github.io/corpus-activity-streams">these alternative docs</a>
						that I maintain for the protocol's
						<a href="https://wikipedia.org/wiki/ActivityStreams">ActivityStreams</a>
						vocabulary.
					</p>
				</div>
			</aside>
		</details>
		<div class="prose">
			<p>
				But there's a huge caveat - I failed to implement proactive moderation to the degree I
				wanted. My implementation uses Mastodon likes (favourites) for moderation: if I like a post,
				it appears here. If I don't like a post, your client simply ignores it.
			</p>
			<p>
				The problem is, for proactive moderation that requires no vigilance, if a post was edited
				after I favourited it, it should be ignored. I can always re-favourite the post and build
				nice tools to streamline the process.
			</p>
			<p>
				However I couldn't find a way in the Mastodon API to get the <code>created_at</code> of a
				favourite without authentication (<a
					href="https://docs.joinmastodon.org/methods/statuses/#favourited_by">1</a
				>, <a href="https://docs.joinmastodon.org/methods/favourites/">2</a>, caveat, I may be
				ignorant on API usage details from here on, please correct me by
				<a href={post.comments.url}>replying on Mastodon</a>, and things may have changed by the
				time you read this since I last checked in October 2023).
			</p>
			<p>
				Without knowing when a favourite was created, I can't conditionally hide posts that were
				edited after my favourite. Maybe the commenter is a troll or spammer, luring me to favourite
				a post that then gets edited with an ad for a gambling website, or they get hacked by trolls
				or spammers. I don't want to be vigilant against the content of my blog changing for my
				visitors without my approval.
			</p>
			<details>
				<summary>click for technical details</summary>
				<aside>
					<p>
						An <a href="https://docs.joinmastodon.org/methods/favourites/"
							>endpoint to get a favourite's timestamp</a
						>
						exists, but it requires authentication, so we can't meet our requirements. The APIs just
						weren't designed for this usage - there are no good privacy-related or technical reasons
						for this information to be hidden. For example it could be added to the
						<a href="https://docs.joinmastodon.org/methods/statuses/#favourited_by">favourited_by</a
						>
						endpoint (the <code>created_at</code> there is for the account).
					</p>
					<p>
						The code uses the status <a
							href="https://docs.joinmastodon.org/methods/statuses/#context">context</a
						>
						endpoint to fetch information about the post I originally made. That data includes the replies,
						<code>descendants</code>. For each of those replies that have favourites, it then
						fetches
						<a href="https://docs.joinmastodon.org/methods/statuses/#favourited_by">favourited_by</a
						> to see if one of those favourites was me. If not, the post is ignored like the others who
						have no favourites.
					</p>
				</aside>
			</details>
			<p>
				So, my moderation UX is leaky due to an API limitation. I can't get the <a
					href="https://consentful.systems/">consentful</a
				> experience I need.
			</p>
		</div>
	</section>
	<section class="prose">
		<h2>Roles in a social space</h2>
		<p>
			What does this all have to do with virtual social spaces, stewards and operators and builders?
		</p>
		<p>I don't want to play steward to random actors on the Internet.</p>
		<aside>
			I use the word "steward" mainly thinking about <a href="https://newpublic.org/">New_ Public</a
			>'s use of the word like in
			<a href="https://newpublic.substack.com/p/introducing-our-community-stewards">this post</a>.
		</aside>
		<p>
			If I have a responsibility over a space, I am its steward. I am responsible for its health. We
			steward our homes. Fewer of us steward other people's homes, and fewer still steward public
			spaces.
		</p>
		<p>
			Our social software mediates shared spaces where we interact with each other. Stewardship over
			those spaces is an everpresent concern.
		</p>
		<p>
			The bigger and more open a space, the more challenging the role of steward becomes. Mastodon
			is a global federated social network with low barriers to entry. This means anyone can show up
			at any time and reply to my public posts. That's wonderful! And also, I don't want those
			replies to be distributed in spaces I steward.
		</p>
		<p>
			On Mastodon, I don't attempt to steward the replies to my posts - I'll ignore and block
			instead. I do however steward this blog. So given my proclivities that you've likely inferred
			by now, I want to minimize the stewarding work. I'm willing to favourite posts that I want to
			appear here, with all of the social complexities that carries, but the fact that edited posts
			require vigilance changes the equation.
		</p>
		<p>Let's step back and consider some of the roles in a social space:</p>
		<ul>
			<li>
				<strong>Stewards</strong> take responsibility for the intended qualities of the space. They interact
				with people and set the rules and norms. They're the mods, the admins, the organizers, the beloved
				and reviled gods above the forum. They deal with the complexities of managing the space with
				its people and technology.
			</li>
			<li>
				<strong>Operators</strong> make the space possible by running software on machines somewhere
				in the universe. They're the devops, the infrastructure providers, the webmasters, the people
				who keep the lights on. They deal with the complexities of running software on servers on atom-based
				servers.
			</li>
			<li>
				<strong>Builders</strong> make the software that operators run. They're the developers, technical
				writers, question answerers, and other community contributors that produce software. They deal
				with the complexities of designing, implementing, documenting, and supporting software.
			</li>
		</ul>
		<p>
			An implied role in this model is the "user" or "player" or some better word that refers to the
			people in a space.
		</p>
	</section>
	<section class="prose">
		<h2>Performing roles sustainably</h2>
		<p>
			In social spaces, I gravitate towards the role of builder. I like thinking about and making
			software. This is more than a mild preference, it's a way better fit for my skills, interests,
			and temperament.
		</p>
		<p>
			But software does nothing without operators to run it, and spaces rot without stewards to
			protect them. Builders provide just one part of the puzzle.
		</p>
		<p>
			When I started <a href="https://www.felt.dev/">Felt</a> with Hamilton and wrote the initial
			version of
			<a href={feed.items[0].url}>my first blog post</a>, I was sure I had to become an operator one
			day, because that's where the money is, so it's the obvious path to sustainably produce free
			community software. And also, somebody somewhere has to run the software, and I can do
			computer.
		</p>
		<p>
			But after a lot of brow furrowing and hard emotion (mostly fear - I mean, holding the reins of
			infrastructure that people depend on? having custody over those keys? international legal
			compliance? and safety? oof, the code already overflows my head I can't fit this stuff), I've
			come to terms with myself. I'm a builder, and that's enough. It's a big diverse world full of
			people who like and excel at the operator and steward roles, and I'll gladly pay them money or
			otherwise transact for their services.
		</p>
		<p>
			Of course, things aren't quite so simple. I'll help steward the public dev community for Felt,
			but we're doing things intentionally to reduce the stewardship burden - those spaces will
			remain on topic, we'll moderate behind a collectively-controlled actor so we're not exposed as
			individuals (e.g. "stewarded by Felt Co-op" at <a href="https://www.felt.dev/">felt.dev</a>),
			and we'll have a low tolerance for bad behavior. Hamilton will graciously be that community's
			operator, so I don't even need to hold keys. He'll also share the steward role with me and
			we'll look for people with that affinity to help us.
		</p>
		<p>
			I'll continue working on my open source projects, and my role there will become more stewardy
			over time whether I like it or not. I'll also operate some unimportant instances of Felt where
			the stakes are trivial. But I'll remain a builder first and stay in that lane.
		</p>
		<p>
			Thanks for visiting my space and considering these ideas. I invite you to comment on Mastodon
			if you're okay with it appearing here but don't expect it to :)
		</p>
	</section>
	<hr />
	<section>
		<div class="prose spaced">
			<h2><HashLink slug="comments">Comments</HashLink></h2>
		</div>
		<Toot
			replies
			storage_key="3_comments"
			{cache}
			initial_url={post.comments.url}
			initial_autoload={true}
		/>
	</section>

	<!-- TODO maybe expose -->
	<!-- <section class="prose">
		<h2>
			<HashLink slug="limitations">Limitations</HashLink>
		</h2>
		<p>
			I achieved most of the basic behavior I was looking for, allowlisting comments that are
			fetched at runtime. Many things could be improved:
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
		<blockquote style:font-family="var(--font_family_mono)">
			{prod_content_security_policy}
		</blockquote>
	</section> -->
	<!-- </BlogPost> -->
</div>

<style>
	/* TODO tricky layout issue, related to the leaky :last-child margin selectors */
	details:not([open]) summary {
		margin-bottom: 0;
	}
</style>
