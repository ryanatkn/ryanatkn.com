<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
</script>

<div class="blog-post-footer">
	<div class="panel markup">
		<p>
			<span> find me on Mastodon and the Fediverse:</span>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a> (professional)
			<br />
			<a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a> (coder)
			<br />
			or
			<a href="mailto:mail@ryanatkn.com?subject=Reply to post: {post.title}">↪ reply by email</a>
		</p>
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
</style>
