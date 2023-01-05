<script lang="ts">
	interface ProjectInfo {
		title: string;
		description: string;
		links: string;
	}

	// TODO I moved the project info to this data format to quicky slap together a responsive layout
	// without changing the original tables, but it'd be much better
	// to write this in normal Svelte markup and use CSS to make a responsive layout
	const projects: ProjectInfo[] = [
		{
			title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
			description: 'free and open source software',
			links: '<a href="https://github.com/ryanatkn">GitHub</a>',
		},
		{
			title: '<a href="/blog">blog</a>',
			description: '<a href="https://www.ryanatkn.com/feed.xml">feed.xml</a>',
			links: '<a href="/blog">/blog</a>',
		},
		{
			title: '<a href="https://log.ryanatkn.com/">log</a>',
			description: 'devlog',
			links: '<a href="https://log.ryanatkn.com/">log.ryanatkn.com</a>',
		},
		{
			title: '<a href="https://felt.social">@feltcoop</a>',
			description: `a <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a> aspiring <a href="https://platform.coop">platform co-op</a> making free and open source community software`,
			links: `<a href="https://github.com/feltcoop">GitHub</a>, <a href="https://twitter.com/feltcoop">Twitter</a>, <a href="mailto:ryan@felt.social">ryan@felt.social</a>, <a href="mailto:team@felt.social">team@felt.social</a>`,
		},
		{
			title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
			description:
				'hobby project for fun and learning, <em>"tools and toys for expanding minds"</em>',
			links: '<a href="https://github.com/ryanatkn/cosmicplayground">GitHub</a>',
		},
		{
			title: '<a href="https://ryanatkn.github.io/svelte-snake-sports">Svelte Snake Sports</a>',
			description:
				'games of <a href="https://wikipedia.org/wiki/Snake_game">Snake</a> in <a href="https://svelte.dev/">Svelte</a> and <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: '<a href="https://github.com/ryanatkn/svelte-snake-sports">GitHub</a>',
		},
		{
			title: '<a href="/influences">my influences</a>',
			description: 'an ongoing attempt to credit my influences',
			links: '<a href="/influences">/influences</a>',
		},
	];
</script>

<section class="panel">
	<blockquote class="panel">
		<p>
			hello surfer! 🌤🌳🐿 You're at the web home of Ryan Atkinson. He's an open source web developer
			interested in collaborative digital mediums and realizing more of their potential to help us
			live well
		</p>
	</blockquote>
	<p>
		My main skill is coding frontend web apps and I also do some backend and database programming. I
		enjoy trying to make powerful tools that are easy to use, and I have a geeky interest in user
		interfaces and social systems. I work on open source software both as a fulltime profession and
		as a hobby.
	</p>
</section>

<section class="panel">
	<h2>Contact</h2>
	<ul>
		<li>
			<a href="mailto:mail@ryanatkn.com">mail@ryanatkn.com</a>
		</li>
		<li>
			public social media:
			<ul>
				<li>
					@ryanatkn on
					<a rel="me" href="https://github.com/ryanatkn">GitHub</a> and
					<a rel="me" href="https://lobste.rs/u/ryanatkn">Lobste.rs</a>
				</li>
				<li>
					Mastodon coding account: <a rel="me" href="https://hachyderm.io/@ryanatkn"
						>@ryanatkn@hachyderm.io</a
					>
				</li>
				<li>
					Mastodon professional account: <a rel="me" href="https://hci.social/@ryanatkn"
						>@ryanatkn@hci.social</a
					>
				</li>
				<li>
					@overtowed on
					<a rel="me" href="https://www.reddit.com/user/overtowed">Reddit</a> and
					<a rel="me" href="https://news.ycombinator.com/user?id=overtowed">orangesite</a>
				</li>
			</ul>
		</li>
	</ul>
</section>

<section class="panel">
	<h2>Ongoing projects</h2>
	<table>
		<tbody
			>{#each projects as project}<tr
					><td>{@html project.title}</td><td>{@html project.description}</td><td
						>{@html project.links}</td
					></tr
				>{/each}</tbody
		>
	</table>
	<div class="cards">
		{#each projects as project}<div class="card markup padded-md">
				<p>{@html project.title}</p>
				<p>{@html project.description}</p>
				<p>{@html project.links}</p>
			</div>{/each}
	</div>
</section>

<style>
	blockquote {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	section {
		padding: var(--spacing_lg);
	}
	section > *:last-child {
		margin-bottom: 0;
	}
	h2 {
		margin-top: 0;
	}
	table {
		border-spacing: 0;
		background-color: var(--bg);
	}
	tr:hover {
		background-color: var(--tint_dark_1);
	}
	td:first-child {
		white-space: nowrap;
	}
	.cards {
		display: none;
	}
	@media (max-width: 640px) {
		table {
			display: none;
		}
		.cards {
			display: block;
		}
	}
	.card {
		background-color: var(--bg);
		border-width: var(--border_width);
		border-style: var(--border_style);
		border-color: var(--border_color_light);
		border-radius: var(--border_radius);
		margin-bottom: var(--spacing_lg);
		padding: var(--spacing_md);
	}
	.card p:first-child {
		font-size: var(--font_size_lg);
	}
	.card:hover {
		background-color: var(--tint_dark_1);
	}
</style>
