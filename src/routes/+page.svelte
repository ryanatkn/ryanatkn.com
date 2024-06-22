<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {base} from '$app/paths';

	import Favicon from '$lib/Favicon.svelte';
	import Gitops_Menu from '$routes/Gitops_Menu.svelte';
	import Page_Links from '$routes/Page_Links.svelte';
	import Contact_Info from '$routes/Contact_Info.svelte';
	import Me from '$routes/Me.svelte';
	import type {Project_Info} from '$routes/project.js';
	import Project_Card from '$routes/Project_Card.svelte';

	// TODO source this data from the deployments data (maybe a subset for code splitting?)

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
			name: 'spiderspace',
			title: '<a href="https://www.spiderspace.org/">spiderspace.org</a>',
			description: 'community website with a YouTube channel about building it',
			motto: 'weaving web community',
			links: `<a class="chip" href="https://www.youtube.com/@spiderspace_8000">YouTube</a> <a class="chip" href="https://github.com/spiderspace/spiderspace.org">source</a>`,
			emoji: '🕸️',
			icon: 'Spiderspace_Logo',
			icon_alt: 'a spiderweb',
		},
		{
			name: 'webdevladder',
			title: '<a href="https://www.webdevladder.net/">webdevladder.net</a>',
			description:
				'<a href="https://www.youtube.com/@webdevladder">a YouTube channel</a> and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',
			motto: 'climbing together',
			links: `<a class="chip" href="https://www.youtube.com/@webdevladder">YouTube</a> <a class="chip" href="https://github.com/webdevladder/webdevladder.net">source</a>`,
			emoji: '🪜',
			icon: '/webdevladder.png',
			icon_alt: 'a ladder',
		},
		{
			name: 'zzz',
			title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
			description: 'social web app framework',
			motto: 'social toolz for the tired',
			emoji: '💤',
			links: `<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>`, // TODO publish zzz - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/zzz">npm</a>
			icon: 'Zzz_Logo',
			icon_alt: "the Zzz logo, the sleepy zzz's emoji",
		},
		{
			name: 'moss',
			title: '<a href="https://moss.ryanatkn.com/">Moss</a>',
			description: 'CSS framework',
			motto: 'magical organic stylesheets',
			emoji: '🌿',
			links: `<a class="chip" href="https://github.com/ryanatkn/moss">source</a>`, // TODO publish moss - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/moss">npm</a>
			icon: 'Moss_Logo',
			icon_alt: 'the Moss logo, a green herb',
		},
		{
			name: 'fuz',
			title: '<a href="https://www.fuz.dev/">Fuz</a>',
			description: '<a href="https://svelte.dev/">Svelte</a> UI library',
			motto: 'friendly user zystem',
			emoji: '🧶',
			links: `<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>`,
			icon: 'Fuz_Logo',
			icon_alt: 'the Fuz logo, a little brown spider',
		},
		{
			name: 'gro',
			title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
			description:
				'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
			motto: 'generate, run, optimize',
			emoji: '🌰',
			links: `<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>`,
			icon: '/gro.png',
			icon_alt: 'the Gro logo, a pixelated green oak acorn with a glint of sun',
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
			description: 'hobby project for fun and learning',
			motto: 'tools and toys for expanding minds',
			emoji: '🌌',
			links: '<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',
			icon: '/cosmicplayground.png',
			icon_alt: 'the smiling and colorful face of Cosmic Kitty made of rainbow lines in space',
			icon_style: 'border-radius: 50%',
		},
	];
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<section class="width_md p_md">
	<section class="box">
		<div class="panel box width_sm shadow_inset_xs">
			<!-- TODO specificity so we can just add `.bg` instead of `style:background-color="var(--bg)"` -->
			<blockquote class="bg shadow_xs">
				welcome to the homepage<br />
				of Ryan Atkinson, he's<br />
				an independent web developer<br />
				making free and open source<br />
				software for the social web
			</blockquote>
			<div class="radius_50 shadow_md mb_md"><Me /></div>
			<p class="panel bg relative shadow_xs">
				Hi I'm building free and open source software and communicating about it. My main skill is
				making frontend web apps and I also do some backend and devtools programming. I enjoy trying
				to make powerful tools that are easy to use, and I'm extra interested in UIs, API design,
				and social systems.
			</p>
		</div>
	</section>
	<section class="box">
		<div class="panel box shadow_inset_xs">
			<Contact_Info />
		</div>
	</section>
	<section class="box row wrap gap_xl2">
		<Page_Links />
	</section>
	<!-- TODO margin is a hack, replace with a class or generic style -->
	<section class="panel shadow_inset_xs">
		<div class="box">
			<h2 class="mb_xl2">ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project (project)}
				<Project_Card {project}></Project_Card>
			{/each}
		</div>
		<div class="box py_xl">
			<div class="panel p_lg bg shadow_inset_xs">
				<!-- TODO fuz .size_lg -->
				<div class="mb_lg text_align_center" style:font-size="var(--size_lg)">all repos</div>
				<Gitops_Menu />
			</div>
		</div>
	</section>
</section>
<section class="box">
	<Breadcrumb
		><div class="linkpath">
			<span class="row"
				><Favicon />
				<div class="pl_md">ryanatkn.com</div></span
			>
		</div></Breadcrumb
	>
</section>

<style>
	.width_md {
		flex: 1;
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: var(--space_md);
	}
</style>
