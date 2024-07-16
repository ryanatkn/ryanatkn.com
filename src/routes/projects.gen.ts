import type {Gen} from '@ryanatkn/gro';
import {base} from '$app/paths';
import type {Fetched_Repo} from '@ryanatkn/fuz_gitops/repo.js';
import {relative} from 'node:path';

import type {Project_Info} from '$routes/project.js';
import {repos} from '$routes/repos.js';

/**
 * Generating `projects.ts` to avoid loading the whole `repos.ts` on the homepage.
 */
export const gen: Gen = ({origin_id}) => {
	return `
		// generated by ${relative(process.cwd(), origin_id)}

    import type {Project_Info} from '$routes/project.js';
    
    export const projects: Project_Info[] = ${JSON.stringify(projects)};
  `;
};

interface Project_Metadata {
	name: string;
	/**
	 * Allows HTML.
	 */
	description?: string;
	motto?: string; // TODO @many this is a hack because cosmicplayground hasn't been deployed
	repo?: string;
	/**
	 * Allows HTML.
	 */
	title: string;
	/**
	 * Allows HTML.
	 */
	subtitle?: string;
	logo?: string; // TODO @many this is a hack because cosmicplayground hasn't been deployed
	logo_style?: string;
}

// TODO description, motto, icon, icon_alt, glyph
const projects_metadata: Project_Metadata[] = [
	{
		name: 'blog',
		title: `<a href="${base}/blog">blog</a>`,
		subtitle:
			'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
	},
	{
		name: 'github',
		title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
		description: 'my free and open source software',
	},
	// {
	// 	name: 'spiderspace',
	//  repo: '@ryanatkn/spiderspace.org',
	// 	title: '<a href="https://www.spiderspace.org/">spiderspace.org</a>',
	// 	description: 'community website with a YouTube channel about building it',
	// 	subtitle: `<a class="chip" href="https://www.youtube.com/@spiderspace_8000">YouTube</a> <a class="chip" href="https://github.com/spiderspace/spiderspace.org">source</a>`,
	// },
	{
		name: 'webdevladder.net',
		repo: 'webdevladder.net',
		title: '<a href="https://www.webdevladder.net/">webdevladder.net</a>',
		description:
			'a YouTube channel and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',
		subtitle: `<a class="chip" href="https://www.youtube.com/@webdevladder">channel</a> <a class="chip" href="https://www.youtube.com/@webdevladder_vods">vods</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>`,
	},
	{
		name: 'zzz',
		repo: '@ryanatkn/zzz',
		title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
		description: '(not yet published) social web app framework',
		subtitle: `<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>`, // TODO publish zzz - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/zzz">npm</a>
	},
	{
		name: 'moss',
		repo: '@ryanatkn/moss',
		title: '<a href="https://moss.ryanatkn.com/">Moss</a>',
		subtitle: `<a class="chip" href="https://github.com/ryanatkn/moss">source</a>`, // TODO publish moss - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/moss">npm</a>
	},
	{
		name: 'fuz',
		repo: '@ryanatkn/fuz',
		title: '<a href="https://www.fuz.dev/">Fuz</a>',
		description: '<a href="https://svelte.dev/">Svelte</a> UI library',
		subtitle: `<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>`,
	},
	{
		name: 'gro',
		repo: '@ryanatkn/gro',
		title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
		description:
			'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',
		subtitle: `<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>`,
	},
	{
		name: 'cosmicplayground',
		repo: '@ryanatkn/cosmicplayground', // TODO change to `cosmicplayground.org`
		title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a> 🌌', // TODO @many this is a hack because cosmicplayground hasn't been deployed (remove glyph)
		subtitle: '<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',
		description: 'hobby project for fun and learning', // TODO @many this is a hack because cosmicplayground hasn't been deployed
		motto: 'tools and toys for expanding minds', // TODO @many this is a hack because cosmicplayground hasn't been deployed
		logo_style: 'border-radius: 50%',
		logo: 'favicon.png', // TODO @many this is a hack because cosmicplayground hasn't been deployed
	},
];

const projects: Project_Info[] = projects_metadata.map((project_metadata) => {
	const repo = repos.find((d) => {
		if (!('name' in d)) return false;
		return d.name === project_metadata.repo;
	});
	if (!repo) return project_metadata;
	const {
		description,
		homepage,
		motto,
		logo = project_metadata.logo, // TODO @many this is a hack because cosmicplayground hasn't been deployed
		logo_alt,
		glyph,
	} = (repo as Fetched_Repo).package_json; // TODO fix type to avoid casting
	return {description, homepage, motto, logo, logo_alt, glyph, ...project_metadata};
});
