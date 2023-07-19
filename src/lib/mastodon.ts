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

// TODO BLOCK maybe use?
const PATH = 'https://:host/api/v1/statuses/:id/context';

export const fetch_post_by_url = (url: string) => {
	console.log(`fetch_post_by_url url`, url);
	const u = new URL(url);
	// TODO BLOCK match pathname with regexp
	console.log(`u.host`, u.host, u.hostname, u.pathname);
	const id = u.pathname.match(/^\/api\/v1\/statuses\/($1)\/context$/u);
	console.log(`id`, id);
	const host = u.host;
	return fetch_post(id, host);
};

export const fetch_post = (id: string, host: string) => {
	fetch_post_by_url;
};
