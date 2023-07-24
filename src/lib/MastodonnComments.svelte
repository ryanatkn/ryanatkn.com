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
		fetch_favourites,
	} from '$lib/mastodon';

	// TODO BLOCK handle difference with https://mstdn.social/@feditips/110702983310017651 and  https://hci.social/api/v1/statuses/110702983310017651/context

	// TODO these are a mess

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

	let main_context: MastodonContext | undefined | null;
	let main_status: MastodonStatus | undefined | null;
	let replies: MastodonStatus[] | undefined | null;

	$: api_url = to_api_url(url, host, id);
	$: post_url = to_post_url(api_url);

	// const load = async (host: string, id: string) => {
	// 	console.log(`loading host, id`, host, id);
	// 	const fetched = await fetch_post(host, id);

	// 	console.log(`fetched`, fetched);
	// 	data = fetched;
	// };

	let loading: boolean | null = null;

	// TODO BLOCK throttle API with concurrency
	const map_async = async <T>(
		items: T[],
		cb: (item: T, index: number) => Promise<any>,
	): Promise<any[]> => {
		return Promise.all(
			items.map(async (item, index) => {
				const r = await cb(item, index);
				return r;
			}),
		);
	};

	// TODO BLOCK be sure to check locally if the same author or otherwise locally validated
	const to_validated_replies = async (
		status: MastodonStatus,
		statuses: MastodonStatus[],
	): MastodonStatus[] => {
		const account_url = status.account.url; // maybe `id` is fine to compare? unique on every instance?
		const allowed = new Set(statuses.filter((s) => s.account.url === account_url).map((s) => s.id));
		const skipped = new Set(statuses.filter((s) => !s.favourites_count).map((s) => s.id));
		console.log(`skipped`, skipped);
		const unvalidated_replies = statuses.filter(({id}) => !allowed.has(id) && !skipped.has(id));
		console.log(`unvalidated_replies`, unvalidated_replies);
		if (unvalidated_replies.length) {
			const mapped = await map_async(unvalidated_replies, async (status) => {
				const favourites = await fetch_favourites(status);
				const favourited =
					favourited_by_author(status, favourites) || favourited_by_author(status, favourites);
				console.log(`status`, status);
				console.log(`fetched favourites`, favourites);
				return status;
			});
			return mapped.filter(Boolean);
			// TODO BLOCK load favourites for all that !== 1
		} else {
			return [];
		}
	};

	const load_by_url = async (url: string) => {
		loading = true;
		[main_context, main_status] = await Promise.all([
			fetch_status_context_by_url(url),
			fetch_status_by_url(url),
		]);
		console.log(`main_status`, main_status);
		// data?.ancestors -- not handling these differently,
		if (main_context) {
			replies = to_validated_replies(main_status, main_context.descendants);
		}
		loading = false;
	};

	// $: browser && load(host, id);

	const load = async (): Promise<void> => {
		if (!browser || !api_url) return;
		await load_by_url(api_url);
	};
</script>

<slot {main_status} {main_context} {api_url} {post_url} {load} {loading} />
