<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';
	import {base} from '$app/paths';

	import Favicon from '$lib/Favicon.svelte';
	import ContactInfo from '$routes/ContactInfo.svelte';

	/* eslint-disable svelte/no-at-html-tags */

	interface ProjectInfo {
		name: string;
		title: string;
		description: string;
		links?: string;
		icon?: string;
		icon_alt?: string;
		icon_style?: string;
	}

	// TODO I moved the project info to this data format to quicky slap together a responsive layout
	// without changing the original tables, but it'd be much better
	// to write this in normal Svelte markup and use CSS to make a responsive layout
	const projects: ProjectInfo[] = [
		{
			name: 'blog',
			title: `<a href="${base}/blog">blog</a>`,
			description: '<a href="https://www.ryanatkn.com/feed.xml">feed.xml</a>',
		},
		{
			name: 'devlog',
			title: '<a href="https://log.ryanatkn.com/">log</a>',
			description: 'devlog',
			links: '<a href="https://log.ryanatkn.com/">log.ryanatkn.com</a>',
		},
		{
			name: 'github',
			title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
			description: 'my free and open source software',
		},
		{
			name: '@feltjs',
			title: '<a href="https://www.felt.dev/">@feltjs</a>',
			description: `a free and open source web toolkit for hobbyists and human-scale communities`,
			links: `<a href="https://www.felt.dev/">felt.dev</a>, <a href="https://github.com/feltjs">GitHub</a>`,
			icon: '/felt.png',
			icon_alt: "green felt textured heart with the word 'felt' cut out",
		},
		{
			name: 'cosmicplayground',
			title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
			description:
				'hobby project for fun and learning, <em>"tools and toys for expanding minds"</em>',
			links: '<a href="https://github.com/ryanatkn/cosmicplayground">GitHub</a>',
			icon: '/cosmic_kitty.jpg',
			icon_alt: 'the smiling and colorful face of Cosmic Kitty made of rainbow lines in space',
			icon_style: 'border-radius: 50%',
		},
	];
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<div class="width_md padded_md">
	<div class="prose">
		<section class="box">
			<div class="panel box width_sm">
				<blockquote>
					hello this is the homepage of Ryan Atkinson, he's a web developer making free and open
					source software
				</blockquote>
				<p>
					Hi I'm working on open source software <a href="https://github.com/ryanatkn">projects</a>
					like <a href="https://www.felt.dev/">feltjs</a>. My main skill is making frontend web apps
					and I also do backend programming. I enjoy trying to make powerful tools that are easy to
					use, and I have extra interest in the design of UIs and social systems. More
					<a href="{base}/about">about me</a>.
				</p>
			</div>
		</section>
		<section class="box">
			<div class="panel box">
				<ContactInfo />
			</div>
		</section>
	</div>
	<section class="panel">
		<div class="prose box">
			<h2>ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project}
				<div class="card prose padded_md">
					<div>
						<p class="title">{@html project.title}</p>
						<div class="content">
							<div>
								<p>
									{@html project.description}
								</p>
								{#if project.links}
									<p>{@html project.links}</p>
								{/if}
							</div>
							{#if project.icon}
								<div class="icon">
									<img
										src="{base}{project.icon}"
										alt={project.icon_alt ?? `icon for ${project.name}`}
										style={project.icon_style}
									/>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
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
	.width_md {
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

	.panel {
		padding: var(--spacing_lg);
	}
	.panel > :global(*:last-child) {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
	}
	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: var(--spacing_md);
	}
	.card {
		display: flex;
		max-width: var(--width_sm);
		background-color: var(--bg);
		border-width: var(--border_width);
		border-style: var(--border_style);
		border-color: var(--border_1);
		border-radius: var(--border_radius);
		margin-bottom: var(--spacing_lg);
		padding: var(--spacing_md);
	}
	.card:hover {
		border-color: var(--border_2);
	}
	.icon {
		padding-left: var(--spacing_sm);
		flex-shrink: 0;
	}
	.icon img {
		width: var(--icon_size_lg);
		max-width: var(--icon_size_lg);
	}
	.content {
		display: flex;
		align-items: flex-end;
	}
	.title {
		font-size: var(--size_lg);
		word-break: break-all;
	}
</style>
