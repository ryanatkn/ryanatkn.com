<script lang="ts">
	import {base} from '$app/paths';
	import Feed_Item_Date from '@ryanatkn/fuz_blog/Feed_Item_Date.svelte';
	import {blog_feed_context} from '@ryanatkn/fuz_blog/blog.js';
	import {to_pathname} from '@ryanatkn/fuz_blog/util.js';

	import Page_Links from '$routes/Page_Links.svelte';

	const feed = blog_feed_context.get();

	const items = feed.items.slice().reverse();
</script>

<svelte:head>
	<title>ryanatkn.com/blog</title>
</svelte:head>

<section class="blog">
	<ol class="panel" reversed>
		{#each items as item (item)}
			<li class="blog_card">
				<a href={to_pathname(item.url, feed.home_page_url)}>{item.title}</a>
				<div class="date"><Feed_Item_Date {item} /></div>
			</li>
		{/each}
	</ol>
	<a class="feed_link chip" href="{base}/blog/feed.xml" download>Atom feed</a>
</section>
<section class="box gap_xl2 mb_xl7">
	<Page_Links />
</section>

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
		box-shadow: var(--shadow_inset_bottom_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
	}
	.blog_card {
		font-size: var(--size_lg);
		max-width: var(--width_sm);
		background-color: var(--bg);
		border-width: var(--border_width);
		border-style: solid;
		border-color: transparent;
		border-radius: var(--radius_xs);
		margin-bottom: var(--space_xl);
		margin-top: var(--space_sm);
		padding: var(--space_md);
		/* TODO review this pattern, maybe use elsewhere */
		box-shadow: var(
			--card_shadow,
			var(--shadow_bottom_sm)
				color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent)
		);
	}
	.date {
		font-size: var(--size_md);
		margin-top: var(--space_xs);
	}
	.feed_link {
		margin-top: var(--space_xl);
	}
</style>
