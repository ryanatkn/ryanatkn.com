<script lang="ts">
	import {page} from '$app/stores';
	import {goto} from '$app/navigation';
	import {browser, dev} from '$app/environment';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';

	import BlogPost from '$lib/BlogPost.svelte';
	import {get_blog_components} from '$lib/blog.js';
	import type {Feed} from '$lib/feed.js';

	export let feed: Feed;

	// TODO @multiple rethink this, we don't want to load all components at each route
	const components = get_blog_components();

	// TODO this way of doing things gets the desired UX
	// with prerendering and eager loading on nav, so no spinners,
	// but the downside is that it loads all of the blog posts in the bundle.
	// Importing lazily has the terrible spinner and I need to learn SvelteKit better
	// to avoid scrolling issues that happen when you have spiners.

	$: ({slug} = $page.params);
	$: post_id = /^\d+$/u.test(slug)
		? Number(slug)
		: feed.items.findIndex((f) => f.url.endsWith(slug)) + 1;
	$: index = post_id ? post_id - 1 : null;
	$: post = index === null ? null : feed.items[index];
	$: component = index === null ? null : components[index];

	// redirect from index to slug
	$: if (browser && !dev && typeof post_id === 'number' && post) {
		void goto(new URL(post.url).pathname, {replaceState: true});
	}
</script>

{#if post && component}
	<BlogPost {post} {component} />
{:else}
	<Alert status="error">no post found, is the path correct?</Alert>
	<slot />
{/if}
