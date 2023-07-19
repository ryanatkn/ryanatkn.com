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
	sensitive: false;
	spoiler_text: string;
	visibility: string;
	language: string;
	uri: string;
	url: string;
	replies_count: number;
	reblogs_count: number;
	favourites_count: number;
	edited_at: null | string;
	favourited: false;
	reblogged: false;
	muted: false;
	bookmarked: false;
	content: string;
	filtered: unknown[];
	reblog: null;
	account: {
		id: string;
		username: string;
		acct: string;
		display_name: string;
		locked: false;
		bot: false;
		discoverable: false;
		group: false;
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
	card: null;
	poll: null;
}

// TODO maybe use trouter?
// const PATH = 'https://:host/api/v1/statuses/:id/context';
export const serialize_status_context_url = (host: string, id: string) =>
	`https://${host}/api/v1/statuses/${id}/context`;

export const parse_status_context_url = (url: string): {host: string; id: string} | null => {
	const matches = /^.+($1)\/api\/v1\/statuses\/($2)\/context$/u.exec(url);
	console.log(`matches`, matches);
	if (!matches) return null;
	console.log(`matches`, matches);
	const host = matches?.[1];
	const id = matches?.[2];
	return {host, id};
};

// TODO BLOCK implement for direct links
export const fetch_post_by_url = async (url: string): Promise<MastodonContext | null> => {
	console.log(`url`, url);
	const parsed = parse_status_context_url(url);
	if (!parsed) return null;
	const {host, id} = parsed;
	return fetch_post(host, id);
};

export const fetch_post = async (host: string, id: string): Promise<MastodonContext> => {
	const fetched = await (await fetch(serialize_status_context_url(host, id))).json();
	console.log(`fetched`, fetched);
	return fetched;
};
