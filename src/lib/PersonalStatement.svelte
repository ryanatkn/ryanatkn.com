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
			title: '<a href="https://felt.social">@feltcoop</a>',
			description: `a <a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a> aspiring <a href="https://platform.coop">platform co-op</a> making free and open source community software`,
			links: `<a href="https://github.com/feltcoop">GitHub</a>, <a href="https://twitter.com/feltcoop">Twitter</a>, <a href="mailto:ryan@felt.social">ryan@felt.social</a>, <a href="mailto:team@felt.social">team@felt.social</a>`,
		},
		{
			title: '<a href="https://wikipedia.org/wiki/Fediverse">fediverse</a> stuff',
			description: `learning and slowly integrating with <code><a href="https://github.com/feltcoop/felt-server">@feltcoop/felt-server</a></code>, made these <a href="https://ryanatkn.github.io/corpus-activity-streams">alternative ActivityStreams docs</a>`,
			links: `<a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a>, <a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>, <a href="https://github.com/ryanatkn/corpus-activity-streams">GitHub</a>`,
		},
		{
			title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
			description:
				'hobby project for fun and learning, <em>"tools and toys for expanding minds"</em>',
			links:
				'<a href="https://github.com/ryanatkn/cosmicplayground">GitHub</a>, <a href="https://twitter.com/cosmicplaygroun">Twitter</a>',
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

<blockquote class="panel">
	<p>
		hello web surfer! You've reached the home page of Ryan Atkinson. He's an open source web
		developer interested in collaborative digital mediums and realizing more of their potential to
		help us live well
	</p>
	<p class="emojis panel">🏔⛰🏞🐢🌲🥬🌳⛰</p>
</blockquote>

<h2>Professionally:</h2>

<p>
	My main skill is coding frontend web apps and I also do some backend/database/systems stuff. I
	enjoy trying to make powerful tools that are easy to use, and I have a geeky interest in user
	interfaces and social systems
</p>

<h2>Projects I'm working on:</h2>

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

<h2>Contact:</h2>
<ul>
	<li>
		<a href="mailto:mail@ryanatkn.com">mail@ryanatkn.com</a> (not looking for work)
	</li>
	<li>
		public social media:
		<ul>
			<li><a href="https://github.com/ryanatkn">GitHub</a></li>
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
				<a href="https://www.reddit.com/user/overtowed">Reddit</a>,
				<a href="https://twitter.com/ryanatkn">Twitter</a>, and
				<a href="https://lobste.rs/u/ryanatkn">Lobste.rs</a>
			</li>
		</ul>
	</li>
</ul>

<style>
	blockquote {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.emojis {
		font-size: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	@media (max-width: 570px) {
		.emojis {
			font-size: 2em;
		}
	}
	@media (max-width: 410px) {
		.emojis {
			font-size: 1.7em;
		}
	}
	@media (max-width: 360px) {
		.emojis {
			font-size: 1.4em;
		}
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
		border-width: var(--border_width);
		border-style: var(--border_style);
		border-color: var(--border_color);
		border-radius: var(--border_radius);
		margin-bottom: var(--spacing_lg);
		padding: var(--spacing_md);
	}
	.card p:first-child {
		font-size: var(--font_size_lg);
	}
</style>
