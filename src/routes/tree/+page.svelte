<script lang="ts">
	import TreePage from '@ryanatkn/fuz_gitops/TreePage.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.svelte.js';

	// TODO ideally there would be one `PackagesTree` mounted by the layout

	const {repo, repos} = repos_context.get();
</script>

<svelte:head>
	<title>tree {repo.library.package_json.glyph} {repo.library.repo_name}</title>
</svelte:head>

<TreePage {repo} {repos} />
