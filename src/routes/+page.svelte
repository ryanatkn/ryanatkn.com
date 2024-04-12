<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {base} from '$app/paths';
	import Card from '@ryanatkn/fuz/Card.svelte';

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
		// {
		// 	name: 'webdevladder',
		// 	title: '<a href="https://www.webdevladder.net/">webdevladder</a>',
		// 	description:
		// 		'educational screencasts for advanced realworld webdev with <a href="https://svelte.dev/">Svelte</a> and <a href="https://typescriptlang.org/">TypeScript</a>',
		// 	links: `<a class="chip" href="https://www.webdevladder.net/">webdevladder.net</a> <a class="chip" href="https://github.com/webdevladder">source</a> <a class="chip" href="https://www.youtube.com/@webdevladder">YouTube</a>`,
		// 	icon: '🪜',
		// 	icon_alt: 'a ladder',
		// },
		{
			name: 'zzz',
			title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
			description: 'social web app framework',
			links: `<a class="chip" href="https://github.com/ryanatkn/zzz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/zzz">npm</a>`,
			icon: '💤',
			icon_alt: 'the zzz emoji',
		},
		{
			name: 'fuz',
			title: '<a href="https://www.fuz.dev/">Fuz</a>',
			description:
				'design system for CSS, <a href="https://svelte.dev/">Svelte</a>, and <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>`,
			icon: '/fuz.png',
			icon_alt: 'a ball of yarn',
		},
		{
			name: 'gro',
			title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
			description:
				'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
			links: `<a class="chip" href="https://github.com/ryanatkn/gro">source</a>`,
			icon: '/gro.png',
			icon_alt: 'a pixelated green oak acorn with a glint of sun',
		},
		// {
		// 	name: 'spiderspace',
		// 	title: '<a href="https://www.spiderspace.org/">Spiderspace</a>',
		// 	description: 'hobbyist web stack',
		// 	links: `<a class="chip" href="https://www.spiderspace.org/">spiderspace.org</a> <a class="chip" href="https://github.com/spiderspace/spiderspace">source</a>`,
		// 	icon: '/spiderspace.png',
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

<div class="width_md p_md">
	<div>
		<section class="box">
			<div class="panel box width_sm">
				<blockquote>
					hello this is the homepage of Ryan Atkinson, he's an independent web developer making free
					and open source software
				</blockquote>
				<div style:margin-bottom="var(--space_xs)"><Me /></div>
				<p>
					Hi I'm building free and open source software and communicating about it. My main skill is
					making frontend web apps and I also do some backend and devtools programming. I enjoy
					trying to make powerful tools that are easy to use, and I have extra interest in UIs, API
					design, and social systems. More
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
	<section class="panel" style:margin-bottom="var(--space_xl4)">
		<div class="box">
			<h2>ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project (project)}
				<Project_Card {project}></Project_Card>
			{/each}
		</div>
		<div class="box py_xl">
			<div class="panel p_lg">
				<!-- TODO fuz .size_lg -->
				<div class="mb_lg text_align_center" style:font-size="var(--size_lg)">all repos</div>
				<Gitops_Menu />
			</div>
		</div>
	</section>
	<section class="box">
		<Card href="{base}/funding"
			><div slot="icon">🐚</div>
			funding</Card
		>
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
		margin-bottom: var(--space_xl3);
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.url {
		margin-top: var(--space_sm);
	}

	.panel {
		padding: var(--space_lg);
	}
	.panel > :global(*:last-child) {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
	}
</style>
