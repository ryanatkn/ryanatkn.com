<script lang="ts">
	import {browser} from '$app/environment';

	// import data from '$routes/blog/[slug]/2/data.json';
	import {
		// fetch_post,
		fetch_post_by_url,
		type MastodonContext,
		to_status_context_url,
	} from '$lib/mastodon';

// TODO BLOCK handle difference with https://mstdn.social/@feditips/110702983310017651 and  https://hci.social/api/v1/statuses/110702983310017651/context

	/**
   * The url to a Mastodon post,
   * like `'https://hci.social/api/v1/statuses/110702983310017651/context'`.
   * Either `url` or `host` and `id` are required.
   */
  export let url: string;
  /**
   * The host part of the url, like `'hachyderm.io'`.
   * Either `url` or `host` and `id` are required.
   */
	export let host: string;
  /**
   * The status id to fetch, like `'110702983310017651'`.
   * Either `url` or `host` and `id` are required.
   */
	export let id: string;

	// TODO BLOCK fetch data
	let data: MastodonContext | undefined | null;
	console.log(`data`, data);

  $: url = 

	// $: browser && load(host, id);
	$: browser && load_by_url(url);

	// const load = async (host: string, id: string) => {
	// 	console.log(`loading host, id`, host, id);
	// 	const fetched = await fetch_post(host, id);

	// 	console.log(`fetched`, fetched);
	// 	data = fetched;
	// };

	const load_by_url = async (url: string) => {
		console.log(`load_by_url`, url);
		const fetched = await fetch_post_by_url(url);
		console.log(`fetched`, fetched);
		data = fetched;
	};
</script>

<slot {data} />
