<script lang="ts">
	import TablePage from '@ryanatkn/fuz_gitops/TablePage.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.svelte.js';

	const {repo, repos} = repos_context.get();
</script>

<TablePage {repo} {repos} />
