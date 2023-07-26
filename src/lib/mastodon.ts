import {stripEnd} from '@feltjs/util/string.js';
import type {Flavored} from '@feltjs/util/types.js';

import mastodon_mock_data from '$lib/mastodon_mock_data.json';

const headers = {
	accept: 'application/json',
	'content-type': 'application/jsno',
};

export const fetch_data = async (url: string): Promise<any | null> => {
	for (const d of mastodon_mock_data) {
		if (d.url === url) {
			console.log('fetch_data CACHED');
			return d.data;
		}
	}
	try {
		// console.log(`CALL fetch_post`, u);
		const res = await fetch(url, {headers});
		if (!res.ok) return null;
		const fetched = await res.json();
		console.log('fetch_data FETCHED', url, fetched);
		return fetched;
	} catch (err) {
		return null;
	}
};

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

export interface MastodonFavourites {
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

export interface MastodonStatusContextParams {
	host: string;
	id: string;
}
export interface MastodonPostParams {
	host: string;
	author: string;
	id: string;
}
// const parse_mastodon_status = parse(MASTODON_STATUS_PATH);

export type Url = Flavored<string, 'Url'>;

// TODO BLOCK name
export const to_status_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}`;

export const to_status_context_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/context`;

export const to_status_url_with_author = (host: string, author: string, id: string): string =>
	`https://${host}/@${author}/${id}`;

export const to_favourites_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/favourited_by`;

export const to_api_url = (
	url: string | undefined,
	host: string | undefined,
	id: string | undefined,
): string | null => {
	if (!url && !host && !id) {
		throw new Error('either url or host+id must be provided');
	}
	return url || (host && id ? to_status_context_url(host, id) : null);
};

// TODO BLOCK rename with the above

export const to_post_url = (api_url: string | null): string | null => {
	if (!api_url) return null;
	const parsed = parse_status_url(api_url);
	if (!parsed) return null;
	parsed.host, parsed.id;
	return to_status_url_with_author(parsed.host, parsed.author, parsed.id);
};

/**
 * Parses a url to a post or API endpoint for a post, aka Mastodon status context.
 * @param url
 * @returns the parsed host and id params, if any
 */
export const parse_status_context_url = (url: string): MastodonStatusContextParams | null => {
	const u = new URL(url);
	const parts = stripEnd(u.pathname, '/context').split('/');
	return {
		host: u.host,
		id: parts[parts.length - 1],
	};
};

/**
 * Parses a url to a post or API endpoint for a post, aka Mastodon status context.
 * @param url
 * @returns the parsed host and id params, if any
 */
export const parse_status_url = (url: string): MastodonPostParams | null => {
	const u = new URL(url);
	const parts = stripEnd(u.pathname, '/context').split('/');
	const author = parts[0][0] === '@' ? parts[0].substring(1) : null; // eslint-disable-line @typescript-eslint/prefer-string-starts-ends-with
	if (!author) return null;
	const id = parts.length > 1 ? parts[parts.length - 1] : null;
	if (!id) return null;
	return {host: u.host, author, id};
};

// TODO BLOCK implement for direct links
export const fetch_status_context_by_url = async (url: string): Promise<MastodonContext | null> => {
	const parsed = parse_status_context_url(url);
	if (!parsed) return null;
	const {host, id} = parsed;
	return fetch_status_context(host, id);
};

// TODO BLOCK go through a single fetch helper and trace each call to the API,
// so we can see the history in a tab displayed to any users who want to dig

export const fetch_status_context = async (
	host: string,
	id: string,
): Promise<MastodonContext | null> => {
	const u = to_status_context_url(host, id);
	return fetch_data(u);
};

export const fetch_status = async (host: string, id: string): Promise<MastodonStatus | null> => {
	const u = to_status_url(host, id);
	return fetch_data(u);
};

// TODO BLOCK implement for direct links
export const fetch_status_by_url = async (url: string): Promise<MastodonStatus | null> => {
	const parsed = parse_status_context_url(url);
	if (!parsed) return null;
	const {host, id} = parsed;
	const u = to_status_url(host, id);
	return fetch_data(u);
};

export const fetch_favourites = async (
	host: string,
	status: MastodonStatus,
): Promise<MastodonFavourites[] | null> => {
	const u = to_favourites_url(host, status.id);
	return fetch_data(u);
};
