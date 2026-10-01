<script lang="ts">
	import ModulesPage from '@fuzdev/fuz_repos/ModulesPage.svelte';
	import { repos_context } from '@fuzdev/fuz_repos/repo.svelte.ts';

	const { repo, repos } = repos_context.get();
</script>

<ModulesPage {repo} {repos} />
