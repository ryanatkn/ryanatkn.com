<script lang="ts">
	import type { ProjectInfo } from '$lib/project.ts';
	import ProjectLogo from './ProjectLogo.svelte';

	// TODO probably upstream to fuz_library after changing it to `PackageMeta` or w/e

	// TODO audit
	/* eslint-disable svelte/no-at-html-tags */

	const {
		project
	}: {
		project: ProjectInfo;
	} = $props();
</script>

<div class="project-card">
	<header class="title">
		{@html project.title}
		{#if project.glyph}{project.glyph}{/if}
	</header>
	<div class="display:flex">
		<div>
			<!-- {#if project.tagline}
				<p>{@html project.tagline}</p>
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
		<ProjectLogo {project} />
	</div>
</div>

<style>
	.project-card {
		max-width: var(--distance_sm);
		background-color: var(--shade_00);
		/* TODO review this pattern, maybe use elsewhere */
		box-shadow: var(
			--card_shadow,
			var(--shadow_bottom_sm)
				color-mix(
					in hsl,
					var(--shadow_color, var(--shadow_color_umbra)) var(--shadow_alpha_40),
					transparent
				)
		);
		border-width: var(--border_width);
		border-style: solid;
		border-color: transparent;
		border-radius: var(--border_radius_xs);
		margin-bottom: var(--space_lg);
		padding: var(--space_md);
	}
	.title {
		font-size: var(--font_size_lg);
		margin-bottom: var(--space_sm);
	}
</style>
