<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import StatusCard from '$lib/StatusCard.svelte';
	import MastodonComments from '$lib/MastodonnComments.svelte';

	export let host: string;
	export let id: string;

	// TODO BLOCK chronological, nested, updated, reverse chrono
</script>

<MastodonComments {host} {id} let:main_status let:main_context let:load let:loading>
	{#if loading !== false}
		<div class="load_button" out:slide>
			<PendingButton pending={loading || false} disabled={!!main_context} on:click={() => load()}>
				<div class="load_button_content">
					<div class="icon">💬</div>
					{#if main_context}{#if main_context.ancestors.length}loaded {main_context.descendants
								.length} descendants and {main_context.ancestors.length} ancestors{:else}loaded {main_context
								.descendants.length} comments{/if}{:else}load comments from<br />{host}{/if}
				</div>
			</PendingButton>
		</div>
	{/if}
	{#if main_context}
		<ul class="statuses">
			<!-- TODO style differently or something -->
			{#each main_context.ancestors as item}
				<li>
					<StatusCard {item} />
				</li>
			{/each}
			{#if main_status}
				<div class="main_post panel">
					<div class="panel main_post_inner">
						<StatusCard item={main_status} />
					</div>
				</div>
			{/if}
			{#each main_context.descendants as item}
				<li>
					<StatusCard {item} />
				</li>
			{/each}
		</ul>
	{/if}
</MastodonComments>

<style>
	.statuses {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: var(--spacing_md);
		align-items: flex-start;
	}
	.load_button {
		flex-shrink: 0;
		margin-right: var(--spacing_md);
	}
	.load_button_content {
		padding: var(--spacing_md) 0;
		display: flex;
		align-items: center;
		text-align: left;
	}
	.statuses li:not(:last-child) {
		margin-bottom: var(--spacing_xl3);
	}
	.main_post {
		margin-bottom: var(--spacing_xl3);
		padding: var(--spacing_md);
	}
	.main_post_inner {
		background-color: var(--bg);
		padding: var(--spacing_xs);
	}
	.icon {
		font-size: var(--icon_size_md);
		padding-right: var(--spacing_md);
	}
</style>
