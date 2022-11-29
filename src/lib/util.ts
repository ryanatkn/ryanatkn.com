import {format} from 'date-fns';
import {stripEnd, stripStart} from '@feltcoop/util/string.js';

// TODO rename?
export const formatDate = (date: string | number | Date): string =>
	format(typeof date === 'string' ? new Date(date) : date, 'PP');

export const toPathname = (url: string, root: string): string =>
	stripStart(url, stripEnd(root, '/'));
