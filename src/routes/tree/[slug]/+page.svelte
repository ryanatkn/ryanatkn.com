<script lang="ts">
	import Tree_Item_Page from '@ryanatkn/fuz_gitops/Tree_Item_Page.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {params} = $props();

	const {repo, repos} = repos_context.get();

	const {slug} = $derived(params);
</script>

<svelte:head>
	<title>{slug} - tree {repo.package_json.glyph} {repo.package_json.name}</title>
</svelte:head>

<Tree_Item_Page {repo} {repos} {slug} />
