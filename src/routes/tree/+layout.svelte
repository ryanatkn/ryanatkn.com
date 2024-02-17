<script lang="ts">
	import {parse_deployments, set_deployments} from '@ryanatkn/fuz/deployments.js';

	import deployments from '$lib/deployments.json';

	// this is duplicated in each deployments page to code split the deployments data

	set_deployments(parse_deployments(deployments, 'https://www.ryanatkn.com/'));
</script>

<slot />
