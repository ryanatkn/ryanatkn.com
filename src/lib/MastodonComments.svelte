<script lang="ts">
	import {browser} from '$app/environment';

	import {
		fetch_status_context_by_url,
		type MastodonContext,
		to_status_url,
		fetch_status_by_url,
		type MastodonStatus,
		fetch_favourites,
	} from '$lib/mastodon';

	// TODO BLOCK maybe a Load prefix or Loader suffix for this component pattern?

	/**
	 * The host part of the url, like `'hachyderm.io'`.
	 */
	export let host: string;

	/**
	 * The status id to fetch, like `'110702983310017651'`.
	 */
	export let id: string;

	let main_context: MastodonContext | undefined | null;
	let main_status: MastodonStatus | undefined | null;
	let replies: MastodonStatus[] | undefined | null;

	$: api_url = to_status_url(host, id);

	// const load = async (host: string, id: string) => {
	// 	console.log(`loading host, id`, host, id);
	// 	const fetched = await fetch_post(host, id);

	// 	console.log(`fetched`, fetched);
	// 	data = fetched;
	// };

	let loading: boolean | null = null;

	/**
	 * @readonly
	 */
	export let load_time: number | undefined = undefined;

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
	): Promise<MastodonStatus[]> => {
		console.log(`MAIN status`, status);
		const host = new URL(status.url).host;
		const acct = status.account.acct;
		const allowed = new Set(statuses.filter((s) => s.account.acct === acct).map((s) => s.id));
		const skipped = new Set(statuses.filter((s) => !s.favourites_count).map((s) => s.id));
		console.log(`allowed`, allowed);
		console.log(`skipped`, skipped);
		const unvalidated_replies = statuses.filter(({id}) => !allowed.has(id) && !skipped.has(id));
		console.log(`unvalidated_replies`, unvalidated_replies);
		if (unvalidated_replies.length) {
			await map_async(unvalidated_replies, async (s) => {
				const favourites = await fetch_favourites(host, s);
				if (favourites?.some((f) => f.acct === acct)) {
					allowed.add(s.id);
				}
			});
		}
		return statuses.filter((s) => (allowed.has(s.id) ? s : null));
	};

	const load_by_url = async (url: string) => {
		const start_time = performance.now();
		loading = true;
		[main_context, main_status] = await Promise.all([
			fetch_status_context_by_url(url),
			fetch_status_by_url(url),
		]);
		if (main_status && main_context) {
			replies = await to_validated_replies(main_status, main_context.descendants);
		} else {
			replies = null;
		}
		loading = false;
		load_time = performance.now() - start_time;
	};

	// $: browser && load(host, id);

	const load = async (): Promise<void> => {
		if (!browser || !api_url) return;
		await load_by_url(api_url);
	};
</script>

<slot {main_status} {main_context} {replies} {load} {loading} {load_time} />
