<script lang="ts">
	import TreeItemPage from '@fuzdev/fuz_gitops/TreeItemPage.svelte';
	import {repos_context} from '@fuzdev/fuz_gitops/repo.svelte.js';

	// TODO ideally there would be one `PackagesTree` mounted by the layout

	const {params} = $props();

	const {repo, repos} = repos_context.get();

	const {slug} = $derived(params);
</script>

<svelte:head>
	<title>{slug} - tree {repo.library.pkg_json.glyph} {repo.library.pkg_json.name}</title>
</svelte:head>

<TreeItemPage {repo} {repos} {slug} />
