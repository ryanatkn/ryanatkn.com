import {format} from 'date-fns';
import {strip_end, strip_start} from '@grogarden/util/string.js';

// TODO rename?
export const formatDate = (date: string | number | Date): string =>
	format(typeof date === 'string' ? new Date(date) : date, 'PP');

export const toPathname = (url: string, root: string): string =>
	strip_start(url, strip_end(root, '/'));
