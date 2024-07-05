import type {Gen} from '@ryanatkn/gro';
import {base} from '$app/paths';
import type {Fetched_Deployment} from '@ryanatkn/fuz_gitops/fetch_deployments.js';

import type {Project_Info} from '$routes/project.js';
import {deployments} from '$routes/repos.js';

interface Project_Metadata {
	name: string;
	repo?: string;
	title: string;
	links?: string;
	icon_style?: string;
}

// TODO description, motto, icon, icon_alt, glyph
const projects_metadata: Project_Metadata[] = [
	{
		name: 'blog',
		title: `<a href="${base}/blog">blog</a>`,
		links:
			'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>',
	},
	{
		name: 'github',
		title: '<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',
	},
	// {
	// 	name: 'spiderspace',
	//  repo: '@ryanatkn/spiderspace.org',
	// 	title: '<a href="https://www.spiderspace.org/">spiderspace.org</a>',
	// 	links: `<a class="chip" href="https://www.youtube.com/@spiderspace_8000">YouTube</a> <a class="chip" href="https://github.com/spiderspace/spiderspace.org">source</a>`,
	// },
	{
		name: 'webdevladder',
		repo: '@ryanatkn/webdevladder.net',
		title: '<a href="https://www.webdevladder.net/">webdevladder.net</a>',
		links: `<a class="chip" href="https://www.youtube.com/@webdevladder">YouTube</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>`,
	},
	{
		name: 'zzz',
		repo: '@ryanatkn/zzz',
		title: '<a href="https://zzz.ryanatkn.com/">Zzz</a>',
		links: `<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>`, // TODO publish zzz - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/zzz">npm</a>
	},
	{
		name: 'moss',
		repo: '@ryanatkn/moss',
		title: '<a href="https://moss.ryanatkn.com/">Moss</a>',
		links: `<a class="chip" href="https://github.com/ryanatkn/moss">source</a>`, // TODO publish moss - <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/moss">npm</a>
	},
	{
		name: 'fuz',
		repo: '@ryanatkn/fuz',
		title: '<a href="https://www.fuz.dev/">Fuz</a>',
		links: `<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>`,
	},
	{
		name: 'gro',
		repo: '@ryanatkn/gro',
		title: '<a href="https://github.com/ryanatkn/gro">Gro</a>',
		links: `<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>`,
	},
	{
		name: 'cosmicplayground',
		repo: '@ryanatkn/cosmicplayground',
		title: '<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',
		links: '<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',
		icon_style: 'border-radius: 50%',
	},
];

const projects: Project_Info[] = projects_metadata.map((project_metadata) => {
	const deployment = deployments.find((d) => {
		if (!('name' in d)) return false;
		return d.name === project_metadata.repo;
	});
	if (!deployment) return project_metadata;
	const {description, motto, logo, logo_alt, glyph} = (deployment as Fetched_Deployment)
		.package_json; // TODO fix type to avoid casting
	return {...project_metadata, description, motto, logo, logo_alt, glyph};
});

export const gen: Gen = () => {
	return `
    import type {Project_Info} from '$routes/project.js';
    
    export const projects: Project_Info[] = ${JSON.stringify(projects)};
  `;
};