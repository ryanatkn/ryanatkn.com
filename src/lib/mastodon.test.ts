import {test} from 'uvu';
import * as assert from 'uvu/assert';
import {parse_status_url} from './mastodon';

test('parse a mastodon status url', () => {
	assert.equal(parse_status_url('https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959'), {
		url: 'https://mastodon.ryanatkn.com/@ryanatkn/110843291155970959',
		host: 'https://mastodon.ryanatkn.com/',
		id: '110843291155970959',
		author: '@ryanatkn',
	});
});

test.run();
