<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import type {Snippet} from 'svelte';
	import {DEV} from 'esm-env';
	import {
		MastodonCache,
		mastodon_cache_context,
	} from '@ryanatkn/fuz_mastodon/mastodon_cache.svelte.js';

	import Favicon from '$routes/Favicon.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	if (DEV) {
		mastodon_cache_context.set(
			new MastodonCache(
				async () => (await import('./mastodon_dev_cache_data.js')).mastodon_dev_cache_data,
			),
		);
		// To get the latest cache data, add these lines:
		// 		const cache = get_mastodon_cache();
		// 		if (typeof window !== 'undefined') window.cache = cache;
		// Then run this in the console and then click into the document to make the clipboard work: (and disable the `reply_filter` if you want all the data)
		// 		setTimeout(() => navigator.clipboard.writeText(JSON.stringify(Array.from(cache.data.entries()))), 500)
		// Then paste the string into the `mastodon_dev_cache_data.js` file as the exported `mastodon_dev_cache_data` value.
	}

	// TODO redirect from the numbers or render UI to navigate to it, maybe in `BlogPost`
</script>

<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>
<div class="wrapper">
	{@render children()}
</div>
<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>

<!-- TODO 404, needs to work with prerendering -->
<!-- <section>
	<p>
		nothing's here, sorry if this is an
		<a href="https://www.w3.org/Provider/Style/URI">uncool URI</a>
	</p>
</section> -->

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: var(--space_xl2);
	}
	.breadcrumbs {
		margin-top: var(--space_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
