<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	import Favicon from '$lib/Favicon.svelte';
	import ContactInfo from '$routes/ContactInfo.svelte';

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
			title: '<a href="https://www.felt.dev/">@feltjs</a>',
			description: `<a href="https://wikipedia.org/wiki/Software_release_life_cycle">pre-alpha</a> free and open source software and tools for building and maintaining communities, publishing to the web, and collaborating with information`,
			links: `<a href="https://www.felt.dev/">felt.dev</a>, <a href="https://github.com/feltjs">GitHub</a>`,
		},
		{
			title: '<a href="https://www.felt.social/">@feltcoop</a>',
			description: `an aspiring <a href="https://platform.coop">platform co-op</a> making and using <a href="https://github.com/feltjs">@feltjs</a>`,
			links: `<a href="https://www.felt.social/">felt.social</a>, <a href="https://github.com/feltcoop">GitHub</a>, <a href="https://fosstodon.org/@feltcoop">Mastodon</a>, <a href="https://twitter.com/feltcoop">Twitter</a>, <a href="mailto:ryan@felt.social">ryan@felt.social</a>, <a href="mailto:team@felt.social">team@felt.social</a>`,
		},
		{
			title: '<a href="https://earbetter.ryanatkn.com/">earbetter.ryanatkn.com</a>',
			description: 'ear training game and tools for programming music and audio',
			links: '<a href="https://github.com/ryanatkn/earbetter">GitHub</a>',
		},
		{
			title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
			description:
				'hobby project for fun and learning, <em>"tools and toys for expanding minds"</em>',
			links: '<a href="https://github.com/ryanatkn/cosmicplayground">GitHub</a>',
		},
	];
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<div class="column markup padded-md">
	<section class="panel">
		<blockquote class="panel">
			<p>
				hello surfer! 🌄🌳🐿 You're at the web home of Ryan Atkinson. He's an open source web
				developer interested in collaborative digital mediums and realizing more of their potential
				to help us live well.
			</p>
		</blockquote>
		<p>
			My main skill is coding frontend web apps and I also do some backend programming. I enjoy
			trying to make powerful tools that are easy to use, and I have a geeky interest in user
			interfaces and social systems. I work on open source software both as a full-time profession
			and hobby. More <a href="/about">about me</a>.
		</p>
	</section>
	<section class="panel">
		<ContactInfo />
	</section>
	<section class="panel">
		<h2>ongoing projects</h2>
		<!-- TODO refactor this so there's not both a table and .cards -->
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
</div>
<Breadcrumbs
	><div class="linkpath">
		<Favicon />
		<div class="url">ryanatkn.com</div>
	</div></Breadcrumbs
>

<style>
	.column {
		flex: 1;
		margin-bottom: var(--spacing_xl3);
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.url {
		margin-top: var(--spacing_sm);
	}

	blockquote {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.panel {
		padding: var(--spacing_lg);
	}
	.panel > :global(*:last-child) {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
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
