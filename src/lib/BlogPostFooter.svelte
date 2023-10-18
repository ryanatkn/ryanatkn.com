<script lang="ts">
	import type {FeedItem} from '$lib/feed.js';

	export let post: FeedItem;
	post; // TODO
</script>

<footer class="blog-post-footer">
	<div class="panel prose">
		<p>
			<span> find me on <a href="https://joinmastodon.org/">Mastodon</a> and ActivityPub:</span>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
		</p>
	</div>
</footer>

<style>
	.blog-post-footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.panel {
		padding: var(--spacing_lg);
	}
</style>
