<script lang="ts">
	import {asset, resolve} from '$app/paths';
	import FeedItemDate from '@fuzdev/fuz_blog/FeedItemDate.svelte';
	import {blog_feed_context} from '@fuzdev/fuz_blog/blog.js';
	import {to_pathname} from '@fuzdev/fuz_blog/util.js';

	import PageLinks from '$routes/PageLinks.svelte';

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
				<a href={resolve(to_pathname(item.url, feed.home_page_url) as any)}>{item.title}</a>
				<div class="date"><FeedItemDate {item} /></div>
			</li>
		{/each}
	</ol>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class="feed_link chip" href={asset('/blog/feed.xml')} download>Atom feed</a>
</section>
<section class="box gap_xl2 mb_xl7">
	<PageLinks />
</section>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space_xl3) 0;
	}
	ol {
		background-color: var(--shade_10);
		padding: var(--space_sm) var(--space_sm) var(--space_sm) var(--space_xl4);
		box-shadow: var(--shadow_inset_bottom_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_30), transparent);
	}
	.blog_card {
		font-size: var(--font_size_lg);
		max-width: var(--distance_sm);
		background-color: var(--shade_00);
		border-width: var(--border_width);
		border-style: solid;
		border-color: transparent;
		border-radius: var(--border_radius_xs);
		margin-bottom: var(--space_xl);
		margin-top: var(--space_sm);
		padding: var(--space_md);
		/* TODO review this pattern, maybe use elsewhere */
		box-shadow: var(
			--card_shadow,
			var(--shadow_bottom_sm)
				color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_30), transparent)
		);
	}
	.date {
		font-size: var(--font_size_md);
		margin-top: var(--space_xs);
	}
	.feed_link {
		margin-top: var(--space_xl);
	}
</style>
