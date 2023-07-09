<script lang="ts">
	import {feed} from './feed';
	import FeedItemDate from '$lib/FeedItemDate.svelte';
	import {toPathname} from '$lib/util';

	const items = feed.items.slice().reverse();
</script>

<svelte:head>
	<title>ryanatkn.com/blog</title>
</svelte:head>

<div class="blog">
	<ol start={items.length - 1} reversed>
		{#each items as item}
			<li>
				<a href={toPathname(item.url, feed.home_page_url)}>{item.title}</a>
				<div>
					<small><FeedItemDate {item} /></small>
				</div>
			</li>
		{/each}
	</ol>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing_xl3) 0;
	}
	li {
		font-size: var(--size_lg);
		margin-bottom: var(--spacing_xl);
		padding-left: var(--spacing_sm);
	}
	small {
		white-space: nowrap;
		font-size: var(--size_md);
	}
</style>
