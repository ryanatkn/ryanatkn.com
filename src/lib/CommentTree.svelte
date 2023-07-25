<script lang="ts">
	import type {MastodonStatus} from '$lib/mastodon';
	import Comment from '$lib/Comment.svelte';

	export let item: MastodonStatus;
	export let items: MastodonStatus[];

	$: ({id} = item);
	$: replies = items.filter((i) => i.in_reply_to_id === id);
</script>

<Comment {item} />
{#if replies.length}
	<ul>
		{#each replies as item (item.id)}
			<li>
				<svelte:self {item} {items} />
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
