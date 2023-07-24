<script lang="ts">
	import {browser} from '$app/environment';

	// import data from '$routes/blog/[slug]/2/data.json';
	import {
		// fetch_post,
		fetch_status_context_by_url,
		type MastodonContext,
		to_api_url,
		to_post_url,
		fetch_status_by_url,
		type MastodonStatus,
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

	let data: MastodonContext | undefined | null;
	let status_data: MastodonStatus | undefined | null;

	$: api_url = to_api_url(url, host, id);
	$: post_url = to_post_url(api_url);

	// const load = async (host: string, id: string) => {
	// 	console.log(`loading host, id`, host, id);
	// 	const fetched = await fetch_post(host, id);

	// 	console.log(`fetched`, fetched);
	// 	data = fetched;
	// };

	let loading: boolean | null = null;

	const load_by_url = async (url: string) => {
		loading = true;
		[data, status_data] = await Promise.all([
			fetch_status_context_by_url(url),
			fetch_status_by_url(url),
		]);
		// data?.ancestors -- not handling these differently,
		// TODO BLOCK are these siblings? or just the reply tree?
		data?.descendants;
		// TODO BLOCK load favourites for all that !== 1
		loading = false;
	};

	// $: browser && load(host, id);

	const load = async (): Promise<void> => {
		if (!browser || !api_url) return;
		await load_by_url(api_url);
	};
</script>

<slot {status_data} {data} {api_url} {post_url} {load} {loading} />
