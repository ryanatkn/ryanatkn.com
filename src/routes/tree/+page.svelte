<script lang="ts">
	import Tree_Page from '@ryanatkn/fuz_gitops/Tree_Page.svelte';
	import {get_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {deployment, deployments} = get_deployments();
</script>

<svelte:head>
	<title>tree {deployment.package_json.glyph} {deployment.name}</title>
</svelte:head>

<Tree_Page {deployment} {deployments} />
