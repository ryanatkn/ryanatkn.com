export interface Toot {
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
	edited_at: null;
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
