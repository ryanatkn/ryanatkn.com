<script lang="ts">
	import Svg, {type Svg_Data} from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo, zzz_logo, fuz_logo, gro_logo, webdevladder_logo} from '@ryanatkn/fuz/logos.js';
	import {ensure_end, strip_start} from '@ryanatkn/belt/string.js';

	import type {Project_Info} from '$routes/project.ts';

	// TODO probably upstream to fuz_library after changing it to `PackageMeta` or w/e

	// TODO audit
	/* eslint-disable svelte/no-at-html-tags */

	interface Props {
		project: Project_Info;
	}

	const {project}: Props = $props();

	const logos: Record<string, Svg_Data | undefined> = {
		zzz: zzz_logo,
		moss: moss_logo,
		fuz: fuz_logo,
		gro: gro_logo,
		'webdevladder.net': webdevladder_logo,
	};

	const logo_data = $derived(logos[project.name]);
</script>

<div class="project_card">
	<header class="title">
		{@html project.title}
		{#if project.glyph}{project.glyph}{/if}
	</header>
	<div class="display_flex">
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
				<p class="display_flex flex_wrap_wrap gap_xs">{@html project.subtitle}</p>
			{/if}
		</div>
		{#if project.logo}
			<div
				class="icon ml_xs"
				style:min-width="var(--icon_size_xl)"
				style:min-height="var(--icon_size_xl)"
			>
				{#if logo_data}
					<Svg data={logo_data} />
				{:else if project.homepage}
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
		background-color: var(--bg);
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
