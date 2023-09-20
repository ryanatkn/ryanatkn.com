import type {Gen} from '@feltjs/gro/gen/gen.js';

import {feed} from '$routes/blog/feed';
import {toAtomXml} from '$lib/feed';

const ATOM_FEED_PATH = `../static/feed.xml`;
// TODO
// const JSON_FEED_PATH = `../static/feed.json`;

export const gen: Gen = async () => {
	return [{content: toAtomXml(feed), filename: ATOM_FEED_PATH}];
};
