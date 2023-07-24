<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import StatusCard from '$lib/StatusCard.svelte';
	import MastodonReplies from '$lib/MastodonnReplies.svelte';

	export let host: string;
	export let id: string;
</script>

<MastodonReplies {host} {id} let:data let:api_url let:post_url let:load let:loading>
	<div class="row spaced">
		<div class="load_button">
			<PendingButton pending={loading || false} disabled={!!data} on:click={() => load()}>
				<div class="load_button_content">
					{#if data}{#if data.ancestors.length}loaded {data.descendants.length} descendants and {data
								.ancestors.length} ancestors{:else}loaded {data.descendants.length} comments{/if}{:else}load
						comments from<br />{host}{/if}
				</div>
			</PendingButton>
		</div>
		<div class="info">
			{#if loading === null}
				<aside transition:slide>
					↩ clicking this button fetches Mastodon posts from <a href={api_url}
						><code>{api_url}</code></a
					>
					for post
					<a href="post_url">{post_url}</a>
				</aside>
			{:else}
				&nbsp;
			{/if}
		</div>
	</div>
	{#if data}
		<ul class="statuses">
			{#each data.descendants as item}
				<li>
					<StatusCard {item} />
				</li>
			{/each}
		</ul>
	{:else if loading === false}
		<div>something went wrong (TODO proper error message)</div>
	{/if}
</MastodonReplies>

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
	}
</style>
