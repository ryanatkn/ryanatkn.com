<script lang="ts">
	import {feed} from './feed';
	import FeedItemDate from '$lib/FeedItemDate.svelte';
	import {toPathname} from '$lib/util';

	const items = feed.items.slice().reverse();
</script>

<svelte:head>
	<title>ryanatkn.com/blog</title>
</svelte:head>

<div class="blog prose">
	<ol class="panel" start={items.length - 1} reversed>
		{#each items as item}
			<li class="panel">
				<a href={toPathname(item.url, feed.home_page_url)}>{item.title}</a>
				<div class="date"><FeedItemDate {item} /></div>
			</li>
		{/each}
	</ol>
	<blockquote><a href="https://www.ryanatkn.com/feed.xml">Atom feed</a></blockquote>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing_xl3) 0;
	}
	ol {
		background-color: var(--fg_1);
		padding: var(--spacing_sm) var(--spacing_sm) var(--spacing_sm) var(--spacing_xl4);
	}
	li {
		font-size: var(--size_lg);
		padding: var(--spacing_sm);
		width: var(--width_sm);
		margin: var(--spacing_sm) 0;
	}
	.date {
		white-space: nowrap;
		font-size: var(--size_md);
		display: flex;
		justify-content: space-between;
		margin-top: var(--spacing_xs);
	}
</style>
