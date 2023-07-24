<script lang="ts">
	import {browser} from '$app/environment';

	// import data from '$routes/blog/[slug]/2/data.json';
	import {
		// fetch_post,
		fetch_post_by_url,
		type MastodonContext,
		to_api_url,
		to_post_url,
		fetch_post_by_url_TODO,
	} from '$lib/mastodon';

	// TODO BLOCK handle difference with https://mstdn.social/@feditips/110702983310017651 and  https://hci.social/api/v1/statuses/110702983310017651/context

	/**
	 * The url to a Mastodon post,
	 * like `'https://mstdn.social/api/v1/statuses/110702983310017651/context'`.
	 * Either `url` or `host` and `id` are required.
	 */
	export let url: string | undefined = undefined;

	/**
	 * The host part of the url, like `'hachyderm.io'`.
	 * Either `url` or `host` and `id` are required.
	 */
	export let host: string | undefined = undefined;

	/**
	 * The status id to fetch, like `'110702983310017651'`.
	 * Either `url` or `host` and `id` are required.
	 */
	export let id: string | undefined = undefined;

	// TODO BLOCK fetch data
	let data: MastodonContext | undefined | null;
	$: console.log(`data`, data);

	$: api_url = to_api_url(url, host, id);
	$: post_url = to_post_url(api_url);

	// const load = async (host: string, id: string) => {
	// 	console.log(`loading host, id`, host, id);
	// 	const fetched = await fetch_post(host, id);

	// 	console.log(`fetched`, fetched);
	// 	data = fetched;
	// };

	let loading: boolean | null = null;

	let post_data; // TODO BLOCK

	const load_by_url = async (url: string) => {
		console.log(`load_by_url`, url);
		loading = true;

		const fetched = await fetch_post_by_url(url);
		console.log(`fetched`, fetched);
		data = fetched;

		const fetched_TODO = await fetch_post_by_url_TODO(url);
		console.log(`fetched_TODO`, fetched_TODO);
		post_data = fetched_TODO;

		loading = false;
	};

	// $: browser && load(host, id);

	const load = async (): Promise<void> => {
		if (!browser || !api_url) return;
		await load_by_url(api_url);
	};
</script>

<slot {data} {api_url} {post_url} {load} {loading} />
