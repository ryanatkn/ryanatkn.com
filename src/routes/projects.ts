import type {Project_Info} from '$routes/project.js';

export const projects: Project_Info[] = [
	{
		name: 'blog',
		title: '<a href="/blog">blog</a>',
		links:
			'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
	},
	{
		name: 'github',
		title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
		description: 'my free and open source software',
	},
	{
		name: 'webdevladder',
		title: '<a href="https://www.webdevladder.net/">webdevladder.net</a>',
		description:
			'<a href="https://www.youtube.com/@webdevladder">a YouTube channel</a> and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',
		motto: 'climbing together',
		links:
			'<a class="chip" href="https://www.youtube.com/@webdevladder">YouTube</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>',
		emoji: '🪜',
		icon: 'Webdevladder_Logo',
		icon_alt: 'the webdevladder logo, a spider web between two rungs of a ladder',
	},
	{
		name: 'zzz',
		title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
		description: '(not yet published) social web app framework',
		motto: 'social toolz for the tired',
		emoji: '💤',
		links: '<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>',
		icon: 'Zzz_Logo',
		icon_alt: "the Zzz logo, three sleepy z's",
	},
	{
		name: 'moss',
		title: '<a href="https://moss.ryanatkn.com/">Moss</a>',
		description: 'CSS framework',
		motto: 'magical organic stylesheets',
		emoji: '🌿',
		links: '<a class="chip" href="https://github.com/ryanatkn/moss">source</a>',
		icon: 'Moss_Logo',
		icon_alt: 'the Moss logo, a fuzzy tuft of green moss',
	},
	{
		name: 'fuz',
		title: '<a href="https://www.fuz.dev/">Fuz</a>',
		description: '<a href="https://svelte.dev/">Svelte</a> UI library',
		motto: 'friendly user zystem',
		emoji: '🧶',
		links:
			'<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>',
		icon: 'Fuz_Logo',
		icon_alt: 'the Fuz logo, a friendly brown spider facing you',
	},
	{
		name: 'gro',
		title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
		description:
			'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
		motto: 'generate, run, optimize',
		emoji: '🌰',
		links:
			'<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>',
		icon: '/gro.png',
		icon_alt: 'the Gro logo, a pixelated green oak acorn with a glint of sun',
	},
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
