import type {EntryGenerator} from './$types.js';
import blog_entries from '$routes/blog/blog_entries.json';

export const entries: EntryGenerator = async () => {
	return blog_entries.entries.map((e) => {
		const parts = e.split('/');
		return {slug: parts[parts.length - 1]};
	});
};
