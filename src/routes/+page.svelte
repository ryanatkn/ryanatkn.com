<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {base} from '$app/paths';

	import Favicon from '$lib/Favicon.svelte';
	import Gitops_Menu from '$routes/Gitops_Menu.svelte';
	import Contact_Info from '$routes/Contact_Info.svelte';
	import Me from '$routes/Me.svelte';
	import type {Project_Info} from '$routes/project.js';
	import Project_Card from '$routes/Project_Card.svelte';

	// TODO I moved the project info to this data format to quicky slap together a responsive layout
	// without changing the original tables, but it'd be much better
	// to write this in normal Svelte markup and use CSS to make a responsive layout
	const projects: Project_Info[] = [
		{
			name: 'blog',
			title: `<a href="${base}/blog">blog</a>`,
			links:
				'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
		},
		{
			name: 'github',
			title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
			description: 'my free and open source software',
		},
		{
			name: 'fuz',
			title: '<a href="https://www.fuz.dev/">Fuz</a>',
			description:
				'design system for CSS, <a href="https://svelte.dev/">Svelte</a>, and <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://www.fuz.dev/">fuz.dev</a> <a class="chip" href="https://github.com/fuz-dev/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>`,
			icon: '🧶',
			icon_alt: 'a ball of yarn',
		},
		{
			name: 'gro',
			title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
			description:
				'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://gro.ryanatkn.com/">gro.ryanatkn.com</a> <a class="chip" href="https://github.com/ryanatkn/gro">source</a>`,
			icon: '/gro.png',
			icon_alt: 'a pixelated green oak acorn with a glint of sun',
		},
		// {
		// 	name: 'spiderspace',
		// 	title: '<a href="https://www.spiderspace.org/">Spiderspace</a>',
		// 	description: 'hobbyist web stack',
		// 	links: `<a class="chip" href="https://www.spiderspace.org/">spiderspace.org</a> <a class="chip" href="https://github.com/spiderspace/spiderspace">source</a>`,
		// 	icon: '/spider.png',
		// 	icon_alt: 'a pixelated yellow spider',
		// },
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
					hello this is the homepage of Ryan Atkinson, he's an independent web developer making free
					and open source software
				</blockquote>
				<div style:margin-bottom="var(--spacing_xs)"><Me /></div>
				<p>
					Hi I'm building free and open source software projects like <a href="https://www.fuz.dev/"
						>Fuz</a
					>, <a href="https://github.com/ryanatkn/gro">Gro</a>, and an unannounced social app
					framework. My main skill is making frontend web apps and I also do some backend and
					devtools programming. I enjoy trying to make powerful tools that are easy to use, and I'm
					extra interested in UIs and social systems. More
					<a href="{base}/about">about me</a>.
				</p>
			</div>
		</section>
		<section class="box">
			<div class="panel box">
				<Contact_Info />
			</div>
		</section>
	</div>
	<!-- TODO margin is a hack, replace with a class or generic style -->
	<section class="panel" style:margin-bottom="var(--spacing_4)">
		<div class="prose box">
			<h2>ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project (project)}
				<Project_Card {project}></Project_Card>
			{/each}
		</div>
		<!-- TODO .margin_1 in util classes library (where?) -->
		<div class="box" style:margin="var(--spacing_1)">
			<a class="chip" href="https://github.com/ryanatkn">all projects</a>
		</div>
	</section>
	<div class="box">
		<section class="panel padded_lg">
			<h2 class="spaced">packages</h2>
			<Gitops_Menu />
		</section>
	</div>
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
