<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
	post; // TODO
</script>

<div class="blog-post-footer">
	<div class="panel prose">
		<p>
			<span> find me on <a href="https://joinmastodon.org/">Mastodon</a> and ActivityPub:</span>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a> (professional)
			<br />
			<a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a> (webdev)
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
		padding: var(--spacing_lg);
	}
</style>
