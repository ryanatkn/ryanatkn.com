<script lang="ts">
	import TreeItemPage from '@ryanatkn/fuz_gitops/TreeItemPage.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.svelte.js';

	// TODO ideally there would be one `PackagesTree` mounted by the layout

	const {params} = $props();

	const {repo, repos} = repos_context.get();

	const {slug} = $derived(params);
</script>

<svelte:head>
	<title>{slug} - tree {repo.package_json.glyph} {repo.package_json.name}</title>
</svelte:head>

<TreeItemPage {repo} {repos} {slug} />
