<script lang="ts">
	import {feedData} from '$lib/feedData';
	import FeedItemDate from '$lib/FeedItemDate.svelte';
	import {toPathname} from '$lib/util';
</script>

<div class="blog">
	<ol start="0">
		{#each feedData.items as item}
			<li>
				<a href={toPathname(item.url, feedData.home_page_url)}>{item.title}</a>
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
		font-size: var(--font_size_lg);
	}
	a {
		/* TODO hacky */
		padding-left: var(--spacing_sm);
	}
	small {
		white-space: nowrap;
		font-size: var(--font_size_md);
		padding-left: var(--spacing_sm);
	}
</style>
