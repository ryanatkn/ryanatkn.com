<script lang="ts">
	import {parse_deployments, set_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

	import deployments from '$lib/deployments.json';

	// this is duplicated in each deployments page to code split the deployments data

	set_deployments(parse_deployments(deployments, 'https://www.ryanatkn.com/'));
</script>

<div class="w_100 flex_1">
	<slot />
</div>
