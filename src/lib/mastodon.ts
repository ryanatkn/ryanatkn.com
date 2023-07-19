import {parse, inject} from 'regexparam';

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

const MASTODON_STATUS_CONTEXT_PATH = 'https://:host/api/v1/statuses/:id/context';
const get_mastodon_status_context = parse(MASTODON_STATUS_CONTEXT_PATH);

export const serialize_status_context_url = (host: string, id: string): string =>
	inject(MASTODON_STATUS_CONTEXT_PATH, {host, id, '': ''}); // TODO BLOCK types?

export const parse_status_context_url = (url: string): {host: string; id: string} | null => {
	console.log(`url`, url);
	const matches = get_mastodon_status_context.pattern.exec(url);
	console.log(`matches`, matches);
	if (!matches) return null;
	return {host: matches.host, id: matches.id};
};

// TODO BLOCK implement for direct links
export const fetch_post_by_url = async (url: string): Promise<MastodonContext | null> => {
	console.log(`url`, url);
	const parsed = parse_status_context_url(url);
	if (!parsed) return null;
	const {host, id} = parsed;
	return fetch_post(host, id);
};

export const fetch_post = async (host: string, id: string): Promise<MastodonContext | null> => {
	const url = serialize_status_context_url(host, id);
	console.log(`url`, url);
	const res = await fetch(url);
	if (!res.ok) return null;
	const fetched = await res.json();
	console.log(`fetched`, fetched);
	return fetched;
};
