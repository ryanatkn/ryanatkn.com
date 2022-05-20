/**
 * This is designed to extend JSON Feed 1.1 with namespaced data for other specs like Atom.
 * It's still a work in progress, and I'll add features as I need them,
 * and eventually this will be extracted to a standalone library.
 * https://www.jsonfeed.org/version/1.1/
 */
export interface FeedData {
	id: string;
	title: string;
	home_page_url: string;
	description: string;
	icon: string;
	favicon: string;
	author: {
		name: string;
		url?: string;
		email?: string;
	};
	items: FeedItemData[];
	atom: {
		feed_url: string;
	};
	// TODO
	// jsonfeed: {
	// 	version: string;
	// 	feed_url: string;
	//  expired?: boolean;
	// };
}

export interface FeedItemData {
	id: string;
	title: string;
	url: string;
	date_published: string;
	date_modified: string;
	summary: string;
	// TODO
	// content_text: string;
	// content_html: string;
	// image?: string;
	// external_url?: string;
	tags?: string[];
}

export const toAtomXml = (data: FeedData): string => {
	const updated: string = data.items
		.reduce((latest, item) => {
			const modified = new Date(item.date_modified || item.date_published);
			return modified > latest ? modified : latest;
		}, new Date(0))
		.toISOString();

	return `<?xml version="1.0" encoding="UTF-8" ?>

<feed xmlns="http://www.w3.org/2005/Atom">

  <id>${data.id}</id>
  <title>${data.title}</title>
  <subtitle>${data.description}</subtitle>
  <link href="${data.home_page_url}" />
  <link href="${data.atom.feed_url}" rel="self" type="application/atom+xml" />
	<updated>${updated}</updated>
  <icon>${data.icon}</icon>
  <author>
    <name>${data.author.name}</name>
    ${data.author.email ? `<email>${data.author.email}</email>` : ''}
    ${data.author.url ? `<uri>${data.author.url}</uri>` : ''}
  </author>
  ${data.items
		.map(
			(item) =>
				`
  <entry>
    <id>${item.id}</id>
    <title>${item.title}</title>
    <link rel="alternate" href="${item.url}" />
    <published>${item.date_published}</published>
    <updated>${item.date_modified}</updated>
    <summary>${item.summary}</summary>
    ${item.tags ? item.tags.map((tag) => `<category term="${tag}" />`).join('') : ''}
  </entry>`,
		)
		.join('\n')}

</feed>
`;
};
