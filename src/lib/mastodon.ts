import {strip_end} from '@grogarden/util/string.js';
import type {Flavored} from '@grogarden/util/types.js';

import mastodon_mock_data from '$lib/mastodon_mock_data.json';

const mastodon_cache: Map<string, MastodonResponseData> = new Map(
	mastodon_mock_data.map((d) => [d.url, d]),
);
const CACHE_NETWORK_DELAY = 0; // set this to like 1000 to see how the animations behave

const headers = {
	accept: 'application/json',
	'content-type': 'application/jsno',
};

// this is used to get the `mastodon_mock_data.json` response data,
// see where `responses` is used - could be improved
// const responses: Array<{url: string; data: any}> = [];
// const flush_responses = () => {
// 	console.log('flushing responses', JSON.stringify(responses));
// 	responses.length = 0;
// };
// window.flush_responses = flush_responses;

export interface ResponseData<T = any> {
	url: string;
	data: T;
}

export type MastodonResponseData = ResponseData<
	MastodonContext | MastodonStatus | MastodonFavourite
>;

export const fetch_data = async (
	url: string,
	cache: Map<string, MastodonResponseData> | null = import.meta.env.DEV ? mastodon_cache : null,
): Promise<any | null> => {
	const r = cache?.get(url);
	if (r) {
		// console.log('fetch_data cached', r);
		return new Promise((resolve) => {
			setTimeout(() => resolve(r.data), CACHE_NETWORK_DELAY);
		});
		// return r.data;
	}
	try {
		// console.log(`CALL fetch_post`, u);
		const res = await fetch(url, {headers});
		if (!res.ok) return null;
		// console.log(`res`, res);
		// const h = Array.from(res.headers.entries());
		// console.log(`received headers`, url, h);
		const fetched = await res.json();
		// responses.push({url, data: fetched});
		return fetched;
	} catch (err) {
		return null;
	}
};

// TODO BLOCK these names need help
// https://${host}/users/${author}/statuses/${id} // uri
// https://${host}/@${author}/${id} // url
// https://${host}/api/v1/statuses/${id} // status endpoint
// https://${host}/api/v1/statuses/${id}/context // status context endpoint
// https://${host}/api/v1/statuses/${id}/favourited_by // status favourited by endpoint

export const to_status_url = (host: string, id: string): string => `https://${host}/statuses/${id}`;

export const to_status_url_with_author = (host: string, id: string, author: string): string =>
	`https://${host}/@${author}/${id}`;

/**
 * longhand for `to_status_url_with_author`, apperas
 */
export const to_status_url_with_users_author = (host: string, id: string, author: string): string =>
	`https://${host}/users/${author}/statuses/${id}`;

export const to_api_status_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}`;

export const to_api_status_context_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/context`;

export const to_api_favourites_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/favourited_by`;

export const to_api_url = (
	url: string | undefined,
	host: string | undefined,
	id: string | undefined,
): string | null => {
	if (!url && !host && !id) {
		throw new Error('either url or host+id must be provided');
	}
	return url || (host && id ? to_api_status_context_url(host, id) : null);
};

// TODO BLOCK rename with the above

export const to_post_url = (api_url: string | null): string | null => {
	if (!api_url) return null;
	const parsed = parse_status_url_with_author(api_url);
	if (!parsed) return null;
	return parsed.author
		? to_status_url_with_author(parsed.host, parsed.id, parsed.author)
		: to_api_status_url(parsed.host, parsed.id);
};

/**
 * Parses a url to a post or API endpoint for a post, aka Mastodon status context.
 * @param url
 * @returns the parsed host and id params, if any
 */
export const parse_status_context_url = (url: string): MastodonStatusParams | null => {
	try {
		const u = new URL(url);
		const parts = strip_end(u.pathname, '/context').split('/');
		// TODO BLOCK also author if available
		return {
			host: u.host,
			id: parts[parts.length - 1],
		};
	} catch (err) {
		return null;
	}
};

/**
 * Parses a url to a post or API endpoint for a post, aka Mastodon status context.
 * @param url
 * @returns the parsed host and id params, if any
 */
export const parse_status_url_with_author = (url: string): MastodonStatusParams | null => {
	try {
		const u = new URL(url);
		const parts = strip_end(u.pathname, '/context').split('/');
		const author = parts[0][0] === '@' ? parts[0].substring(1) : null; // eslint-disable-line @typescript-eslint/prefer-string-starts-ends-with
		if (!author) return null;
		const id = parts.length > 1 ? parts[parts.length - 1] : null;
		if (!id) return null;
		return {host: u.host, author, id};
	} catch (err) {
		return null;
	}
};

// TODO BLOCK go through a single fetch helper and trace each call to the API,
// so we can see the history in a tab displayed to any users who want to dig

export const fetch_status_context = async (
	host: string,
	id: string,
): Promise<MastodonContext | null> => {
	const url = to_api_status_context_url(host, id);
	return fetch_data(url);
};

export const fetch_status = async (host: string, id: string): Promise<MastodonStatus | null> => {
	const url = to_api_status_url(host, id);
	return fetch_data(url);
};

export const fetch_favourites = async (
	host: string,
	status: MastodonStatus,
): Promise<MastodonFavourite[] | null> => {
	const url = to_api_favourites_url(host, status.id);
	return fetch_data(url);
};

// TODO these are very in-progress

/**
 * https://docs.joinmastodon.org/entities/Context/
 *
 * https://:host/api/v1/statuses/:id/context
 */
export interface MastodonContext {
	ancestors: MastodonStatus[];
	descendants: MastodonStatus[];
}

// TODO BLOCK link and check name
export interface MastodonStatus {
	id: string;
	created_at: string;
	in_reply_to_id: string;
	in_reply_to_account_id: string;
	sensitive: boolean;
	spoiler_text: string;
	visibility: string;
	language: string;
	uri: string;
	url: string;
	replies_count: number;
	reblogs_count: number;
	favourites_count: number;
	edited_at: null | string;
	favourited: boolean;
	reblogged: boolean;
	muted: boolean;
	bookmarked: boolean;
	content: string;
	filtered: unknown[];
	reblog: unknown; // | null;
	account: {
		id: string;
		username: string;
		acct: string;
		display_name: string;
		locked: boolean;
		bot: boolean;
		discoverable: boolean;
		group: boolean;
		created_at: string;
		note: string;
		url: string;
		avatar: string;
		avatar_static: string;
		header: string;
		header_static: string;
		followers_count: number;
		following_count: number;
		statuses_count: number;
		last_status_at: string;
		emojis: unknown[];
		fields: unknown[];
	};
	media_attachments: unknown[];
	mentions: [
		{
			id: string;
			username: string;
			url: string;
			acct: string;
		},
	];
	tags: [
		{
			name: string;
			url: string;
		},
	];
	emojis: unknown[];
	card: unknown; // | null;
	poll: unknown; // | null;
}

export interface MastodonFavourite {
	id: string;
	username: string;
	acct: string;
	display_name: string;
	locked: boolean;
	bot: boolean;
	discoverable: boolean;
	group: boolean;
	created_at: string; // Datetime
	note: string;
	url: string;
	avatar: string;
	avatar_static: string;
	header: string;
	header_static: string;
	followers_count: number;
	following_count: number;
	statuses_count: number;
	last_status_at: string;
	emojis: unknown[];
	fields: Array<{
		name: string;
		value: string;
		verified_at: string; // Datetime
	}>;
}

export interface MastodonStatusParams {
	host: string;
	id: string;
	author?: string;
}

export type Url = Flavored<string, 'Url'>;
