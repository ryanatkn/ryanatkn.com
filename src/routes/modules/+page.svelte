<script lang="ts">
	import Modules_Page from '@ryanatkn/fuz_gitops/Modules_Page.svelte';
	import {get_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

	const {deployment, deployments} = get_deployments();
</script>

<Modules_Page {deployment} {deployments} />
