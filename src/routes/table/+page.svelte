<script lang="ts">
	import Table_Page from '@ryanatkn/fuz_gitops/Table_Page.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos} = repos_context.get();
</script>

<Table_Page {repo} {repos} />
