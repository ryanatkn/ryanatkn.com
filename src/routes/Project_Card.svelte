<script lang="ts">
	import Zzz_Logo from '@ryanatkn/fuz/Zzz_Logo.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';
	import Webdevladder_Logo from '@ryanatkn/fuz/Webdevladder_Logo.svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import Gro_Logo from '@ryanatkn/fuz/Gro_Logo.svelte';
	import {ensure_end, strip_start} from '@ryanatkn/belt/string.js';

	import type {Project_Info} from '$routes/project.js';

	// TODO probably upstream to fuz_library after changing it to `PackageMeta` or w/e

	// TODO audit
	/* eslint-disable svelte/no-at-html-tags */

	interface Props {
		project: Project_Info;
	}

	const {project}: Props = $props();
</script>

<div class="project_card">
	<header class="title">
		{@html project.title}
	</header>
	<div class="flex">
		<div>
			{#if project.motto}
				<p>
					{@html project.motto}
					{#if project.glyph}{project.glyph}{/if}
				</p>
			{/if}
			{#if project.description}
				<p>
					{@html project.description}
				</p>
			{/if}
			{#if project.subtitle}
				<p class="flex wrap gap_xs">{@html project.subtitle}</p>
			{/if}
		</div>
		{#if project.logo}
			<div
				class="icon ml_sm"
				style:min-width="var(--icon_size_xl)"
				style:min-height="var(--icon_size_xl)"
			>
				{#if project.name === 'zzz'}
					<Zzz_Logo />
				{:else if project.name === 'moss'}
					<Moss_Logo />
				{:else if project.name === 'fuz'}
					<Fuz_Logo />
				{:else if project.name === 'gro'}
					<Gro_Logo />
				{:else if project.name === 'webdevladder.net'}
					<Webdevladder_Logo />
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
		max-width: var(--width_sm);
		background-color: var(--bg);
		/* TODO review this pattern, maybe use elsewhere */
		box-shadow: var(--card_shadow, var(--shadow_sm));
		border-width: var(--border_width);
		border-style: solid;
		border-color: transparent;
		border-radius: var(--radius_xs);
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
		font-size: var(--size_lg);
		margin-bottom: var(--space_sm);
	}
</style>
