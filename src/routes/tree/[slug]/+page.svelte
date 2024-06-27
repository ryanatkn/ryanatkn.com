<script lang="ts">
	import {page} from '$app/stores';
	import Tree_Item_Page from '@ryanatkn/fuz_gitops/Tree_Item_Page.svelte';
	import {get_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {deployment, deployments} = get_deployments();

	const {slug} = $derived($page.params);
</script>

<svelte:head>
	<title>{slug} - tree {deployment.package_json.glyph} {deployment.package_json.name}</title>
</svelte:head>

<Tree_Item_Page {deployment} {deployments} {slug} />
