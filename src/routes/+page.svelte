<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import {base} from '$app/paths';

	import Favicon from '$lib/Favicon.svelte';
	import ContactInfo from '$routes/ContactInfo.svelte';
	import Me from '$routes/Me.svelte';
	import type {ProjectInfo} from '$routes/project.js';
	import ProjectCard from '$routes/ProjectCard.svelte';

	// TODO BLOCK add `Orc` right after `Gro`

	// TODO I moved the project info to this data format to quicky slap together a responsive layout
	// without changing the original tables, but it'd be much better
	// to write this in normal Svelte markup and use CSS to make a responsive layout
	const projects: ProjectInfo[] = [
		{
			name: 'blog',
			title: `<a href="${base}/blog">blog</a>`,
			links:
				'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
		},
		{
			name: 'devlog',
			title: '<a href="https://log.ryanatkn.com/">log</a>',
			description: 'devlog',
			links: '<a href="https://github.com/ryanatkn/log" class="chip">source</a>',
		},
		{
			name: 'github',
			title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
			description: 'my free and open source software',
		},
		{
			name: 'felt',
			title: '<a href="https://www.felt.dev/">Felt</a>',
			description: 'a programmable platform for hobbyists and human-scale communities',
			links: `<a class="chip" href="https://www.felt.dev/">felt.dev</a> <a class="chip" href="https://github.com/feltjs">source</a>`,
			icon: '/felt.png',
			icon_alt: "green felt textured heart with the word 'felt' cut out",
		},
		{
			name: 'fuz',
			title: '<a href="https://www.fuz.dev/">Fuz</a>',
			description:
				'design system for CSS, <a href="https://svelte.dev/">Svelte</a>, and <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://www.fuz.dev/">fuz.dev</a> <a class="chip" href="https://github.com/fuz-dev/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@fuz.dev/fuz">npm</a>`,
			icon: '',
			icon_alt: 'a ball of yarn',
		},
		{
			name: 'gro',
			title: '<a href="https://github.com/grogarden/gro">Gro</a>',
			description:
				'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://www.grogarden.org/">grogarden.org</a> <a class="chip" href="https://github.com/grogarden/gro">source</a>`,
			icon: '/gro.png',
			icon_alt: 'a pixelated green oak acorn with a glint of sun',
		},
		{
			name: 'orc',
			title: '<a href="https://github.com/ryanatkn/orc">Orc</a>',
			description: 'a tool for orchestrating many repos',
			links: `<a class="chip" href="https://orc.ryanatkn.com/">orc.ryanatkn.com</a> <a class="chip" href="https://github.com/ryanatkn/orc">source</a>`,
			icon: '', // 🪄
			icon_alt: 'a pixelated green oak acorn with a glint of sun',
		},
		{
			name: 'cosmicplayground',
			title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
			description:
				'hobby project for fun and learning, <em>"tools and toys for expanding minds"</em>',
			links: '<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',
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
				<div style:margin-bottom="var(--spacing_xs)"><Me /></div>
				<p>
					I'm building free and open source <a href="https://github.com/ryanatkn"
						>software projects</a
					>
					like <a href="https://www.felt.dev/">Felt</a>, <a href="https://www.fuz.dev/">Fuz</a>, and
					<a href="https://github.com/grogarden/gro">Gro</a>. My main skill is making frontend web
					apps and I also do some backend and devtools programming. I enjoy trying to make powerful
					tools that are easy to use, and I'm extra interested in UIs and social systems. More
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
			{#each projects as project (project)}
				<ProjectCard {project}></ProjectCard>
			{/each}
		</div>
	</section>
</div>
<Breadcrumb
	><div class="linkpath">
		<Favicon />
		<div class="url">ryanatkn.com</div>
	</div></Breadcrumb
>

<style>
	.width_md {
		flex: 1;
		margin-bottom: var(--spacing_3);
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
</style>
