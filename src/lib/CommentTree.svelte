<script lang="ts">
	import type {MastodonStatus} from '$lib/mastodon';
	import Comment from '$lib/Comment.svelte';

	export let item: MastodonStatus;
	export let items: MastodonStatus[];

	$: ({id} = item);
	$: replies = items.filter((i) => i.in_reply_to_id === id);
</script>

<slot {item} {items} />
{#if replies.length}
	<ul>
		{#each replies as reply (reply.id)}
			<li>
				<svelte:self item={reply} {items}>
					<Comment item={reply} />
				</svelte:self>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding-left: var(--spacing_xl4);
		margin: var(--spacing_md) 0;
	}
	li {
		flex-direction: column;
		margin-bottom: var(--spacing_md);
	}
</style>
