<script lang="ts">
	import {base} from '$app/paths';

	import FeedItemDate from '$lib/FeedItemDate.svelte';
	import {get_blog_feed} from '$lib/blog.js';
	import {to_pathname} from '$lib/util.js';

	const feed = get_blog_feed();

	const items = feed.items.slice().reverse();
</script>

<svelte:head>
	<title>ryanatkn.com/blog</title>
</svelte:head>

<div class="blog prose">
	<ol class="panel" reversed>
		{#each items as item}
			<li class="card">
				<a href={to_pathname(item.url, feed.home_page_url)}>{item.title}</a>
				<div class="date"><FeedItemDate {item} /></div>
			</li>
		{/each}
	</ol>
	<blockquote><a href="{base}/blog/feed.xml" download>Atom feed</a></blockquote>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing_3) 0;
	}
	ol {
		background-color: var(--fg_1);
		padding: var(--spacing_sm) var(--spacing_sm) var(--spacing_sm) var(--spacing_4);
	}
	.card {
		font-size: var(--size_lg);
	}
	.date {
		font-size: var(--size_md);
		margin-top: var(--spacing_xs);
	}
</style>
