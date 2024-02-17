declare module '$lib/deployments.json' {
	import type {Deployment} from '@ryanatkn/fuz/fetch_deployments.js';
	const data: Deployment[];
	export default data;
}
