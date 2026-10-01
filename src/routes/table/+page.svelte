<script lang="ts">
	import TablePage from '@fuzdev/fuz_repos/TablePage.svelte';
	import { repos_context } from '@fuzdev/fuz_repos/repo.svelte.ts';

	const { repo, repos } = repos_context.get();
</script>

<TablePage {repo} {repos} />
