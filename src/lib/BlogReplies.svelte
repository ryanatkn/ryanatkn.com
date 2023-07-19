<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import StatusCard from '$lib/StatusCard.svelte';
	import Replies from '$lib/Replies.svelte';

	export let host: string;
	export let id: string;
</script>

<Replies {host} {id} let:data let:api_url let:post_url let:load let:loading>
	<div class="row">
		<div class="load_button">
			<PendingButton pending={loading || false} disabled={!!data} on:click={() => load()}>
				<div class="load_button_content">
					{#if data}{#if data.ancestors.length}loaded {data.descendants.length} descendants and {data
								.ancestors.length} ancestors{:else}loaded {data.descendants.length} posts{/if}{:else}load
						posts from<br />{host}{/if}
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
		<ul>
			{#each data.descendants as item}
				<li>
					<StatusCard {item} />
				</li>
			{/each}
		</ul>
	{:else if loading === false}
		<div>something went wrong (TODO proper error message)</div>
	{/if}
</Replies>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
	}
	.info {
		flex: 1;
	}
	.load_button {
		flex-shrink: 0;
		margin-right: var(--spacing_md);
	}
	.load_button_content {
		padding: var(--spacing_md);
	}
</style>
