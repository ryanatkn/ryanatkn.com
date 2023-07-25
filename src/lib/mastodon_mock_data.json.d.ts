declare module '$lib/mastodon_mock_data.json' {
	interface MockData {
		url: string;
		data: any;
	}
	const data: MockData[];
	export default data;
}
