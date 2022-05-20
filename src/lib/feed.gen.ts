import type {Gen} from '@feltcoop/gro';

import {feedData} from '$lib/feedData';
import {toAtomXml} from '$lib/feed';

const ATOM_FEED_PATH = `../static/feed.xml`;
// TODO
// const JSON_FEED_PATH = `../static/feed.json`;

export const gen: Gen = async () => {
	return [{content: toAtomXml(feedData), filename: ATOM_FEED_PATH}];
};
