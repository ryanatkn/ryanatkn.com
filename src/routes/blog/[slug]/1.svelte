<script lang="ts" context="module">
	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/1',
		title: 'Some title todo',
		url: 'https://www.ryanatkn.com/blog/some-title-todo',
		date_published: '2023-01-21T20:46:48.486Z',
		date_modified: '2023-01-21T20:46:48.486Z',
		summary: 'todo',
		tags: ['todo'],
	};
</script>

<script lang="ts">
	import {base} from '$app/paths';
</script>

<p>
	<a href="{base}/a/b/c">a local link</a>
</p>
