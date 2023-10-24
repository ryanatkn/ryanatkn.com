import type {MastodonCache} from '@fuz.dev/fuz_mastodon/mastodon.js';

import mastodon_fake_data from '$routes/blog/mastodon_fake_data.json';

export const mastodon_cache: MastodonCache = new Map(mastodon_fake_data.map((d) => [d.url, d]));
