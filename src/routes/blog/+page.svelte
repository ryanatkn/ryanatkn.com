<script lang="ts">
	import {base} from '$app/paths';

	import Feed_Item_Date from '$lib/Feed_Item_Date.svelte';
	import {get_blog_feed} from '$lib/blog.js';
	import {to_pathname} from '$lib/util.js';

	const feed = get_blog_feed();

	const items = feed.items.slice().reverse();
</script>

<svelte:head>
	<title>ryanatkn.com/blog</title>
</svelte:head>

<div class="blog">
	<ol class="panel" reversed>
		{#each items as item}
			<li class="card">
				<a href={to_pathname(item.url, feed.home_page_url)}>{item.title}</a>
				<div class="date"><Feed_Item_Date {item} /></div>
			</li>
		{/each}
	</ol>
	<a class="feed_link chip" href="{base}/blog/feed.xml" download>Atom feed</a>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space_xl3) 0;
	}
	ol {
		background-color: var(--fg_1);
		padding: var(--space_sm) var(--space_sm) var(--space_sm) var(--space_xl4);
	}
	.card {
		font-size: var(--size_lg);
	}
	.date {
		font-size: var(--size_md);
		margin-top: var(--space_xs);
	}
	.feed_link {
		margin-top: var(--space_xl);
	}
</style>
