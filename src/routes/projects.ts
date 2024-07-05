import type {Project_Info} from '$routes/project.js';

export const projects: Project_Info[] = [
	{
		name: 'blog',
		title: '<a href="/blog">blog</a>',
		links:
			'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
	},
	{name: 'github', title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>'},
	{
		name: 'webdevladder',
		repo: '@ryanatkn/webdevladder.net',
		title: '<a href="https://www.webdevladder.net/">webdevladder.net</a>',
		links:
			'<a class="chip" href="https://www.youtube.com/@webdevladder">YouTube</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>',
	},
	{
		name: 'zzz',
		repo: '@ryanatkn/zzz',
		title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
		links: '<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>',
		description: 'social web app framework',
		homepage: 'https://zzz.ryanatkn.com/',
		motto: 'social toolz for the tired',
		logo: 'logo.svg',
		logo_alt: "three sleepy z's",
		glyph: '💤',
	},
	{
		name: 'moss',
		repo: '@ryanatkn/moss',
		title: '<a href="https://moss.ryanatkn.com/">Moss</a>',
		links: '<a class="chip" href="https://github.com/ryanatkn/moss">source</a>',
		description: 'CSS framework',
		homepage: 'https://moss.ryanatkn.com/',
		motto: 'magical organic stylesheets',
		logo: 'logo.svg',
		logo_alt: 'a fuzzy tuft of green moss',
		glyph: '🌿',
	},
	{
		name: 'fuz',
		repo: '@ryanatkn/fuz',
		title: '<a href="https://www.fuz.dev/">Fuz</a>',
		links:
			'<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>',
		description: 'Svelte UI library',
		homepage: 'https://www.fuz.dev/',
		motto: 'friendly user zystem',
		logo: 'logo.svg',
		logo_alt: 'a friendly brown spider facing you',
		glyph: '🧶',
	},
	{
		name: 'gro',
		repo: '@ryanatkn/gro',
		title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
		links:
			'<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>',
		description: 'task runner and toolkit extending SvelteKit',
		homepage: 'https://gro.ryanatkn.com/',
		motto: 'generate, run, optimize',
		logo: 'logo.svg',
		logo_alt: 'a pixelated green oak acorn with a glint of sun',
		glyph: '🌰',
	},
	{
		name: 'cosmicplayground',
		repo: '@ryanatkn/cosmicplayground',
		title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
		links: '<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',
		logo_style: 'border-radius: 50%',
		description: 'tools and toys for expanding minds',
		homepage: 'https://www.cosmicplayground.org/',
	},
];
