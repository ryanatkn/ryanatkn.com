<script lang="ts">
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import type { SvgData } from '@fuzdev/fuz_ui/svg.ts';
	import {
		logo_fuz_css,
		logo_fuz,
		logo_fuz_ui,
		logo_fuz_app,
		logo_gro,
		logo_fuz_util,
		logo_svelte_docinfo,
		logo_tsv
	} from '@fuzdev/fuz_ui/logos.ts';
	import { ensure_end, strip_start } from '@fuzdev/fuz_util/string.ts';

	import type { ProjectInfo } from '$lib/project.ts';
	import { logo_zzz, logo_webdevladder } from './logos.ts';

	const {
		project
	}: {
		project: ProjectInfo;
	} = $props();

	// keyed by `project.name`
	const logos: Record<string, SvgData | undefined> = {
		zzz: logo_zzz,
		fuz: logo_fuz,
		fuz_css: logo_fuz_css,
		fuz_ui: logo_fuz_ui,
		fuz_app: logo_fuz_app,
		fuz_util: logo_fuz_util,
		gro: logo_gro,
		'svelte-docinfo': logo_svelte_docinfo,
		tsv: logo_tsv,
		'webdevladder.net': logo_webdevladder
	};

	const logo_data = $derived(logos[project.name]);
</script>

{#if logo_data || project.logo}
	<div
		class="icon ml_xs"
		style:min-width="var(--icon_size_xl)"
		style:min-height="var(--icon_size_xl)"
	>
		{#if logo_data}
			<Svg data={logo_data} />
		{:else if project.homepage && project.logo}
			<img
				src="{ensure_end(project.homepage, '/')}{strip_start(project.logo, '/')}"
				alt={project.logo_alt ?? `icon for ${project.name}`}
				class={project.logo_classes}
				style={project.logo_style}
			/>
		{/if}
	</div>
{/if}
