<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import StatusCard from '$lib/StatusCard.svelte';
	import MastodonComments from '$lib/MastodonnComments.svelte';

	export let host: string;
	export let id: string;
</script>

<MastodonComments {host} {id} let:status_data let:data let:load let:loading>
	{#if loading !== false}
		<div class="load_button" out:slide>
			<PendingButton pending={loading || false} disabled={!!data} on:click={() => load()}>
				<div class="load_button_content">
					<div class="icon">💬</div>
					{#if data}{#if data.ancestors.length}loaded {data.descendants.length} descendants and {data
								.ancestors.length} ancestors{:else}loaded {data.descendants.length} comments{/if}{:else}load
						comments from<br />{host}{/if}
				</div>
			</PendingButton>
		</div>
	{/if}
	{#if data}
		<ul class="statuses">
			<!-- TODO style differently or something -->
			{#each data.ancestors as item}
				<li>
					<StatusCard {item} />
				</li>
			{/each}
			{#if status_data}
				<div class="main_post panel">
					<div class="panel main_post_inner">
						<StatusCard item={status_data} />
					</div>
				</div>
			{/if}
			{#each data.descendants as item}
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
		padding: var(--spacing_md);
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
