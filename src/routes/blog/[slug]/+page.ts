import type {EntryGenerator} from './$types';
import blog_entries from '$lib/blog_entries.json';

export const entries: EntryGenerator = async () => {
	console.log(`blog_entries`, blog_entries.entries);
	return blog_entries.entries.map((e) => {
		const parts = e.split('/');
		return {slug: parts[parts.length - 1]};
	});
};
