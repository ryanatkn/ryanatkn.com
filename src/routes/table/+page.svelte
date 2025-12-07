<script lang="ts">
	import TablePage from '@fuzdev/fuz_gitops/TablePage.svelte';
	import {repos_context} from '@fuzdev/fuz_gitops/repo.svelte.js';

	const {repo, repos} = repos_context.get();
</script>

<TablePage {repo} {repos} />
