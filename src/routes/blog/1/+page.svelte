<script lang="ts" module>
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Modeling virtual social spaces: in this house we post cat pics on Saturday',
		slug: 'modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday',
		date_published: '2023-01-22T21:44:17.224Z',
		date_modified: '2023-01-28T17:20:51.259Z',
		summary:
			'Proposing a model for one of the central aspects of online communities: the virtual social space.',
		tags: ['web', 'community', 'social media', 'design', 'technology', 'software'],
		comments: {
			url: 'https://hci.social/@ryanatkn/109768104377997044',
			type: 'mastodon',
		},
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import Blog_Post from '@ryanatkn/fuz_blog/Blog_Post.svelte';

	// TODO cache for Mastodon
	// import {onMount} from 'svelte';
	// import {DEV} from 'esm-env';
	// import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	// let cache: Fetch_Value_Cache | undefined | null = $state();
	// onMount(async () => {
	// 	if (DEV) {
	// 		cache = new Map((await import('../mastodon_dev_cache_data.js')).mastodon_dev_cache_data);
	// 	} else {
	// 		cache = null;
	// 	}
	// });
</script>

<Blog_Post {post}>
	<section>
		<h2>Introduction</h2>
		<p>
			As I work on social software, I've been thinking about virtual social spaces and how I don't
			know enough about them. This post outlines a simple model:
		</p>
		<ul>
			<li><strong>virtual</strong>: existing not physically but through software</li>
			<li><strong>social</strong>: including multiple people</li>
			<li><strong>space</strong>: a context containing and governing our interactions</li>
		</ul>
		<p>
			So a virtual social space is a software-mediated context of multiplayer interaction. We're all
			familiar with them – they include our messaging apps, social media feeds, forums etc. By
			modeling the virtual social space, we can more easily imagine reshaping them for our
			individual and collective benefit.
		</p>
	</section>

	<section>
		<h2>The example</h2>
		<p>
			In the software I work on, a hub is a grouping of any number of virtual social spaces. Simple!
			Except neither humans nor networks are simple, and it becomes a situation when they're
			combined. To help us along, we'll analyze virtual social spaces with a hypothetical usecase.
			Let's say I have a public web forum containing a specific space that has some very strict
			rules: participants are allowed to post only on Saturday, and posts must contain pictures of
			cats they know personally. We'll use this example to think concretely about the model.
		</p>
		<h2>The model</h2>
		<p>
			To construct our model, we define 5 powers or abilities provided to actors in the space. You
			can probably think of more, but these get us pretty far:
		</p>
		<ol>
			<li><strong>control</strong></li>
			<li><strong>access</strong></li>
			<li><strong>interaction</strong></li>
			<li><strong>curation</strong></li>
			<li><strong>distribution</strong></li>
		</ol>
		<h3>control</h3>
		<p>
			<strong>Control</strong> is the manifestation of power over the space. When I first create my
			forum and the space containing the cat pictures, the software gives me control over
			everything. One example is the ability to name the space. Given the design goals of the space,
			I choose the common and descriptive name
			<a href="https://mastodon.social/tags/caturday">Caturday</a>. More abstractly, control is the
			center around which the space exists: I, as the creator and administrator of this tiny web
			forum, have carved a distinct boundary of control out of the infinite virtual void. The
			software doesn't necessarily have to grant all of that control to me, but it does in this
			case. In our model, the control power controls the other 4 powers. Naturally.
		</p>
		<h3>access</h3>
		<p>
			Now that I have control over my tiny world, I want others to join so we can enjoy it together. <strong
				>Access</strong
			>
			is the ability to enter the space. It's similar to the "read permission" of a document. For Caturday
			I exercise my control over the space to choose public access, meaning everyone is welcome, even
			those creepy surveillance drones disguised as well-meaning people, because I'm prioritizing open
			participation over privacy to get more cat pics and joy. Additionally, even though we have a Saturday-themed
			space, actors can <em>read</em> posts any time. Now that people can access it, our virtual space
			is social!
		</p>
		<h3>interaction</h3>
		<p>
			We have a publicly accessible social space, but nothing much is happening yet. <strong
				>Interaction</strong
			> describes the things people can do in the space. It's like the "write permission" of a document.
			To make Caturday live up to its name, I again exercise my control, this time defining the rules
			of interaction in the space:
		</p>
		<ul>
			<li>actors can <em>post</em> only on Saturday</li>
			<li>
				each post must include exactly one image (photograph, painting, etc) of a cat or cats that
				the poster personally knows, with an optional short bit of text
			</li>
			<li>
				actors can <em>react</em> to each others' posts, on Saturday only, in one of three ways: an emoji,
				a BIG emoji, or a tiny bit of text (let's say max 24 characters)
			</li>
		</ul>
		<h3>curation</h3>
		<p>
			Now that we've defined the rules of interaction, let's talk about the meta layer of activities
			around those interactions. When people visit the space with cat pictures, I want them to be
			able to choose how they see and use the content. People may choose to:
		</p>
		<ul>
			<li>view all of the posts in a single feed with the most recent at the top</li>
			<li>view posts sorted by most all-time big emoji reactions, excluding the text reactions</li>
			<li>view posts grouped by cat, so we can see each cat change over time</li>
			<li>
				view only the posts they've reacted to, with the most recent listed first, so they can show
				their friend their favorites in person
			</li>
			<li>
				today is Saturday! view the flurry activity with random sorting, excluding posts they've
				already seen
			</li>
		</ul>
		<p>And so on, deep into the kaleidoscope of human creativity.</p>
		<p>
			In our model, we define these meta-interactions of organizing and managing posts as <strong
				>curation</strong
			>. Depending on your point of view, good curation may be even more important than the core
			interactions of posting and reacting. If our goal is to maximize our collaborative agency,
			creativity, and utility (joy) within the constraints of the space, which it is in this case,
			we want users to be able to create those views themselves, and then easily share them with
			others. So, I exercise control over the space to grant participants various powers of
			curation.
		</p>
		<h3>distribution</h3>
		<p>
			We now have posts, reactions, and all sorts of ways to view them. The final power in our model
			is <strong>distribution</strong>, the ability to communicate the space's data beyond its
			boundaries. In our hypothetical, we explicitly support distribution in a few open-ended ways,
			so the joy of each post can spread wherever it's wanted:
		</p>
		<ul>
			<li>social media share buttons (only to the good sites in our case)</li>
			<li>a lightweight way to embed a post on any website</li>
			<li>a data service that sends post data to anyone who asks for it (an API)</li>
		</ul>
		<p>
			By intentionally designing how distribution works in the space, we unlock another dimension of
			creativity that reaches the wider world beyond our little web forum. Technically every reader
			already has the data, but explicit distribution powers enable an ecosystem more readily.
		</p>
		<h2>Conclusion</h2>
		<p>We started with the idea of control over a virtual social space, and then:</p>
		<ul>
			<li>
				decided who gets access, public in this case (and mostly ungated, but that's another post)
			</li>
			<li>and what interactions are available to them</li>
			<li>
				and then how they're able to curate the data from those interactions, creating new metadata
				and interactions
			</li>
			<li>and then how we can support distribution of that data and metadata to the wider world</li>
		</ul>
		<p>
			This model seems useful for exploring the rich territory available to us when designing our
			virtual social spaces.
		</p>
		<p>
			So when dog folks come along with their predictable request, we can say, ah yes, they want us
			to exercise our control over the space to change the rules of interaction, so every dog can
			have its day too.
		</p>
	</section>

	<hr />

	<section>
		<h2>Acknowledgements</h2>
		<p>
			Special thanks to <a
				href="https://sipa.fiu.edu/people/faculty/modern-languages/rosario-medardo.html"
				>Medardo Rosario</a
			> for help with revisions.
		</p>
		<p>
			One of my primary influences on this work is "Modular Politics: Toward a Governance Layer for
			Online Communities" (<a href="https://arxiv.org/abs/2005.13701">arxiv.org/abs/2005.13701</a>)
			by Nathan Schneider (<a href="https://nathanschneider.info/">nathanschneider.info</a>) and
			colleagues.
		</p>
		<p>
			My thinking on this subject is rooted in the perspective of consent for all involved actors,
			informed by the paper "Yes: Affirmative Consent as a Theoretical Framework for Understanding
			and Imagining Social Platforms" (<a href="https://consentful.systems">consentful.systems</a>)
			by Jane Im (<a href="https://imjane.net/">imjane.net</a>) and colleagues.
		</p>
	</section>

	<hr />

	<section>
		<h2>P.S.</h2>
		<p>Some questions from this:</p>
		<ul>
			<li>
				We've defined some hard-to-enforce rules of interaction, like personally knowing the cat.
				How could authentic participation be incentivized/enforced?
			</li>
			<li>
				What mechanisms can we use to collectively exert control over each of the other powers in
				the model? What could it look like to have public control over the space?
			</li>
			<li>
				How does gating fit into this model? What are the ways we can gate public and private
				access? And the other powers?
			</li>
		</ul>
	</section>
</Blog_Post>
