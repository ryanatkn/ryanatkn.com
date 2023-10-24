<script lang="ts">
	import {base} from '$app/paths';

	import type {ProjectInfo} from '$routes/project.js';

	// TODO probably upstream to fuz_library after changing it to `PackageMeta` or w/e

	// TODO audit
	/* eslint-disable svelte/no-at-html-tags */

	export let project: ProjectInfo;
</script>

<div class="card prose">
	<div>
		<p class="title">{@html project.title}</p>
		<div class="content">
			<div>
				{#if project.description}
					<p>
						{@html project.description}
					</p>
				{/if}
				{#if project.links}
					<p>{@html project.links}</p>
				{/if}
			</div>
			{#if project.icon}
				<div class="icon">
					{#if project.icon[0] === '/'}
						<img
							src="{base}{project.icon}"
							alt={project.icon_alt ?? `icon for ${project.name}`}
							style={project.icon_style}
						/>
					{:else}
						<div style:font-size="var(--size_5)">{project.icon}</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.icon {
		padding-left: var(--spacing_sm);
		flex-shrink: 0;
	}
	.icon img {
		width: var(--icon_size_lg);
		max-width: var(--icon_size_lg);
	}
	.content {
		display: flex;
	}
	.title {
		font-size: var(--size_lg);
		word-break: break-all;
	}
</style>
