<script lang="ts">
	import {page} from '$app/stores';
	import Tree_Item_Page from '@ryanatkn/fuz_gitops/Tree_Item_Page.svelte';
	import {get_repos} from '@ryanatkn/fuz_gitops/repo.js';

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	const {repo, repos} = get_repos();

	const {slug} = $derived($page.params);
</script>

<svelte:head>
	<title>{slug} - tree {repo.package_json.glyph} {repo.package_json.name}</title>
</svelte:head>

<Tree_Item_Page {repo} {repos} {slug} />
