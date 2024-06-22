<script lang="ts">
	import {base} from '$app/paths';
	import Zzz_Logo from '@ryanatkn/fuz/Zzz_Logo.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import Spiderspace_Logo from '@ryanatkn/fuz/Spiderspace_Logo.svelte';

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
					{#if project.emoji}{project.emoji}{/if}
				</p>
			{/if}
			{#if project.description}
				<p>
					{@html project.description}
				</p>
			{/if}
			{#if project.links}
				<p class="flex wrap gap_xs">{@html project.links}</p>
			{/if}
		</div>
		{#if project.icon}
			<div class="icon" style:width="var(--icon_size_xl)" style:height="var(--icon_size_xl)">
				{#if project.icon === 'Zzz_Logo'}
					<Zzz_Logo />
				{:else if project.icon === 'Moss_Logo'}
					<Moss_Logo />
				{:else if project.icon === 'Fuz_Logo'}
					<Fuz_Logo />
				{:else if project.icon === 'Spiderspace_Logo'}
					<Spiderspace_Logo />
				{:else if project.icon[0] === '/'}
					<img
						src="{base}{project.icon}"
						alt={project.icon_alt ?? `icon for ${project.name}`}
						class={project.icon_classes}
						style={project.icon_style}
					/>
				{:else}
					<div style:font-size="var(--size_xl5)">{project.icon}</div>
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
	.icon {
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
