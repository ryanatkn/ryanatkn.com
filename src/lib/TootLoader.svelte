<script lang="ts">
	import {browser} from '$app/environment';

	import {
		fetch_status_context,
		type MastodonContext,
		fetch_status,
		type MastodonStatus,
		fetch_favourites,
	} from '$lib/mastodon';

	/**
	 * The host part of the url, like `'hachyderm.io'`.
	 */
	export let host: string;

	/**
	 * The status id to fetch, like `'110702983310017651'`.
	 */
	export let id: string;

	/**
	 * Should we also fetch the status's context, getting its ancestors and descendants?
	 */
	export let with_context = false;

	/**
	 * @readonly
	 */
	export let loading: boolean | undefined = undefined;

	/**
	 * @readonly
	 */
	export let item: MastodonStatus | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let context: MastodonContext | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let replies: MastodonStatus[] | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let load_time: number | undefined = undefined;

	// TODO add concurrency, currently makes calls serially, make configurable
	const map_async = async <T, U>(
		items: T[],
		cb: (item: T, index: number) => Promise<U>,
	): Promise<U[]> =>
		Promise.resolve().then(async () => {
			const results: U[] = [];
			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				// eslint-disable-next-line no-await-in-loop
				const r = await cb(item, i);
				results.push(r);
			}
			return results;
		});

	// TODO refactor
	const filter_valid_replies = async (
		status: MastodonStatus,
		statuses: MastodonStatus[],
	): Promise<MastodonStatus[]> => {
		const host = new URL(status.url).host;
		const acct = status.account.acct;
		const allowed = new Set(); // TODO could simplify if no longer used, was allowing author but changed to favourites - `statuses.filter((s) => s.account.acct === acct`
		const skipped = new Set(statuses.filter((s) => !s.favourites_count).map((s) => s.id));
		const unvalidated_replies = statuses.filter(({id}) => !allowed.has(id) && !skipped.has(id));
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

	const load = async (): Promise<void> => {
		if (!browser) return;
		const start_time = performance.now();
		loading = true;
		// TODO error handling
		[item, context] = await Promise.all([
			fetch_status(host, id),
			with_context ? fetch_status_context(host, id) : null,
		]);
		if (item && context) {
			replies = await filter_valid_replies(item, context.descendants);
		} else {
			replies = null;
		}
		loading = false;
		load_time = performance.now() - start_time;
	};
</script>

<slot {item} {context} {replies} {load} {loading} {load_time} />
