<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import CommentTree from '$lib/CommentTree.svelte';
	import Comment from '$lib/Comment.svelte';
	import MastodonComments from '$lib/MastodonComments.svelte';

	export let host: string;
	export let id: string;

	// TODO BLOCK show a link to the original post, with the count of posts hidden (and a message if it maxed out, with a link to the blog post for discussion?)

	// TODO BLOCK chronological, nested, updated, reverse chrono
</script>

<MastodonComments
	{host}
	{id}
	let:main_status
	let:main_context
	let:replies
	let:load
	let:loading
	let:load_time
>
	<div class="load_button">
		<PendingButton pending={loading || false} disabled={!!main_context} on:click={() => load()}>
			<div class="load_button_content">
				<div class="icon">💬</div>
				{#if main_context && replies}
					<div>
						<div>
							{#if main_context.ancestors.length}
								loaded {replies.length} descendants and {main_context.ancestors.length} ancestors
							{:else}
								loaded {replies.length} comments
							{/if}
						</div>
						<div>in {load_time === undefined ? 'unknown ' : Math.round(load_time)}ms from</div>
						<code>{host}</code>
					</div>
				{:else}
					<div>
						<div>load comments from</div>
						<code>{host}</code>
					</div>
				{/if}
			</div>
		</PendingButton>
	</div>
	{#if main_context}
		<ul class="statuses" transition:slide>
			<!-- TODO style differently or something -->
			{#each main_context.ancestors as item}
				<li>
					<Comment {item} />
				</li>
			{/each}
			{#if main_status}
				<div class="main_post panel">
					<div class="panel main_post_inner">
						<Comment item={main_status} />
					</div>
				</div>
			{/if}
			{#if main_status && replies}
				<CommentTree item={main_status} items={replies} />
			{/if}
		</ul>
	{/if}
</MastodonComments>

<style>
	.statuses {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: flex-start;
	}
	.load_button {
		flex-shrink: 0;
		margin-right: var(--spacing_md);
		margin-bottom: var(--spacing_lg);
	}
	.load_button_content {
		padding: var(--spacing_md) 0;
		display: flex;
		align-items: center;
		text-align: left;
	}
	.main_post {
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
