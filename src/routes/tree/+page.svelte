<script lang="ts">
	import Tree_Page from '@ryanatkn/fuz_gitops/Tree_Page.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {repo, repos} = repos_context.get();
</script>

<svelte:head>
	<title>tree {repo.package_json.glyph} {repo.name}</title>
</svelte:head>

<Tree_Page {repo} {repos} />
