<script lang="ts">
	import Svg, {type SvgData} from '@fuzdev/fuz_ui/Svg.svelte';
	import {
		logo_fuz_css,
		logo_fuz,
		logo_fuz_ui,
		logo_gro,
		logo_fuz_util,
	} from '@fuzdev/fuz_ui/logos.js';
	import {ensure_end, strip_start} from '@fuzdev/fuz_util/string.js';

	import type {ProjectInfo} from '$routes/project.ts';
	import {logo_zzz, logo_webdevladder} from '$routes/logos.js';

	// TODO probably upstream to fuz_library after changing it to `PackageMeta` or w/e

	// TODO audit
	/* eslint-disable svelte/no-at-html-tags */

	const {
		project,
	}: {
		project: ProjectInfo;
	} = $props();

	const logos: Record<string, SvgData | undefined> = {
		zzz: logo_zzz,
		fuz: logo_fuz,
		fuz_css: logo_fuz_css,
		fuz_ui: logo_fuz_ui,
		fuz_util: logo_fuz_util,
		gro: logo_gro,
		'webdevladder.net': logo_webdevladder,
	};

	const logo_data = $derived(logos[project.name]);
</script>

<div class="project_card">
	<header class="title">
		{@html project.title}
		{#if project.glyph}{project.glyph}{/if}
	</header>
	<div class="display:flex">
		<div>
			<!-- {#if project.motto}
				<p>{@html project.motto}</p>
			{/if} -->
			{#if project.description}
				<p>
					{@html project.description}
				</p>
			{/if}
			{#if project.subtitle}
				<p class="display:flex flex-wrap:wrap gap_xs">{@html project.subtitle}</p>
			{/if}
		</div>
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
	</div>
</div>

<style>
	.project_card {
		max-width: var(--distance_sm);
		background-color: var(--shade_00);
		/* TODO review this pattern, maybe use elsewhere */
		box-shadow: var(
			--card_shadow,
			var(--shadow_bottom_sm)
				color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_2), transparent)
		);
		border-width: var(--border_width);
		border-style: solid;
		border-color: transparent;
		border-radius: var(--border_radius_xs);
		margin-bottom: var(--space_lg);
		padding: var(--space_md);
	}
	.logo {
		width: var(--icon_size_xl);
		height: var(--icon_size_xl);
		padding-left: var(--space_sm);
		flex-shrink: 0;
	}
	.title {
		font-size: var(--font_size_lg);
		margin-bottom: var(--space_sm);
	}
</style>
