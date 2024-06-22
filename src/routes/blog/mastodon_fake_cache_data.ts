import type {Url} from '@ryanatkn/gro/package_json.js';
import type {Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';

export const mastodon_fake_cache_data: Array<[Url, Fetch_Value_Cache_Item]> = [
	[
		'GET::https://hci.social/api/v1/statuses/109768104377997044',
		{
			key: 'GET::https://hci.social/api/v1/statuses/109768104377997044',
			url: 'https://hci.social/api/v1/statuses/109768104377997044',
			value: {
				id: '109768104377997044',
				created_at: '2023-01-28T17:52:30.496Z',
				in_reply_to_id: null,
				in_reply_to_account_id: null,
				sensitive: false,
				spoiler_text: '',
				visibility: 'public',
				language: 'en',
				uri: 'https://hci.social/users/ryanatkn/statuses/109768104377997044',
				url: 'https://hci.social/@ryanatkn/109768104377997044',
				replies_count: 0,
				reblogs_count: 2,
				favourites_count: 4,
				edited_at: '2023-10-25T04:10:30.165Z',
				content:
					'<p>published my second blog post: &quot;Modeling virtual social spaces: in this house we post cat pics on Saturday&quot; - <a href="https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://www.</span><span class="ellipsis">ryanatkn.com/blog/modeling-vir</span><span class="invisible">tual-social-spaces-in-this-house-we-post-cat-pics-on-saturday</span></a></p><p>One of its main influences is &quot;Modular Politics: Toward a Governance Layer for Online Communities&quot; by <span class="h-card" translate="no"><a href="https://social.coop/@ntnsndr" class="u-url mention">@<span>ntnsndr</span></a></span> and colleagues - <a href="https://arxiv.org/abs/2005.13701" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">arxiv.org/abs/2005.13701</span><span class="invisible"></span></a></p><p>One thing I like about the post is the explicit focus on power. Seems important as I&#39;m building software for social spaces</p>',
				reblog: null,
				application: {name: 'Web', website: null},
				account: {
					id: '109337961591161088',
					username: 'ryanatkn',
					acct: 'ryanatkn',
					display_name: 'Ryan Atkinson',
					locked: false,
					bot: false,
					discoverable: true,
					group: false,
					created_at: '2022-11-13T00:00:00.000Z',
					note: '<p>open source web dev</p>',
					url: 'https://hci.social/@ryanatkn',
					uri: 'https://hci.social/users/ryanatkn',
					avatar:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					avatar_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					header:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					header_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					followers_count: 37,
					following_count: 96,
					statuses_count: 13,
					last_status_at: '2023-11-29',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'home',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'code',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
					],
				},
				media_attachments: [],
				mentions: [
					{
						id: '108281471355576477',
						username: 'ntnsndr',
						url: 'https://social.coop/@ntnsndr',
						acct: 'ntnsndr@social.coop',
					},
				],
				tags: [],
				emojis: [],
				card: {
					url: 'https://www.ryanatkn.com/blog/modeling-virtual-social-spaces-in-this-house-we-post-cat-pics-on-saturday',
					title:
						'Modeling virtual social spaces: in this house we post cat pics on Saturday - ryanatkn.com/blog',
					description: '',
					language: 'en',
					type: 'link',
					author_name: '',
					author_url: '',
					provider_name: '',
					provider_url: '',
					html: '',
					width: 0,
					height: 0,
					image: null,
					image_description: '',
					embed_url: '',
					blurhash: null,
					published_at: null,
				},
				poll: null,
			},
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/109768104377997044/context',
		{
			key: 'GET::https://hci.social/api/v1/statuses/109768104377997044/context',
			url: 'https://hci.social/api/v1/statuses/109768104377997044/context',
			value: {ancestors: [], descendants: []},
			etag: null,
			last_modified: null,
		},
	],
];
