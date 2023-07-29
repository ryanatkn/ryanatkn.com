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

	const filter_valid_replies = async (
		status: MastodonStatus,
		statuses: MastodonStatus[],
	): Promise<MastodonStatus[]> => {
		const host = new URL(status.url).host;
		const acct = status.account.acct;
		const allowed = new Set(statuses.filter((s) => s.account.acct === acct).map((s) => s.id));
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
		[context, item] = await Promise.all([
			with_context ? fetch_status_context(host, id) : null,
			fetch_status(host, id),
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
