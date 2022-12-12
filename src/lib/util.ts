import {format} from 'date-fns';
import {stripEnd, stripStart} from '@feltcoop/util/string.js';
import {randomInt} from '@feltcoop/util/random.js';

// TODO rename?
export const formatDate = (date: string | number | Date): string =>
	format(typeof date === 'string' ? new Date(date) : date, 'PP');

export const toPathname = (url: string, root: string): string =>
	stripStart(url, stripEnd(root, '/'));

// TODO probably upstream to `@feltcoop/util/random.js`
/**
 * Shuffles `array` in place.
 * @param array
 * @param random
 * @returns Mutated `array`.
 */
export const shuffle: <T extends any[]>(array: T, random?: typeof randomInt) => T = (
	array,
	random = randomInt,
) => {
	const len = array.length;
	const max = len - 1;
	for (let i = 0; i < len; i++) {
		const dest_index = random(0, max);
		if (i === dest_index) continue;
		const destItem = array[dest_index];
		array[dest_index] = array[i];
		array[i] = destItem;
	}
	return array;
};
