<script lang="ts">
	import Table_Page from '@ryanatkn/fuz/Table_Page.svelte';
	import {get_deployments} from '@ryanatkn/fuz/deployments.js';

	const {deployment, deployments} = get_deployments();
</script>

<Table_Page {deployment} {deployments} />
