<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
</script>

<div class="blog-post-footer">
	<div class="panel markup">
		<p>want to talk about this post privately with me?</p>
		<p class="email">
			<a href="mailto:mail@ryanatkn.com?subject=Reply to post: {post.title}">↪ reply by email ↩</a>
		</p>
		<p>publicly? Mastodon & Fediverse:</p>
		<p>professional: <a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></p>
		<p>coder: <a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a></p>
	</div>
</div>

<style>
	.blog-post-footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.panel {
		width: auto;
		padding: var(--spacing_lg);
	}
	.email {
		font-size: var(--font_size_xl);
	}
</style>
