<script lang="ts">
	import ModulesPage from '@fuzdev/fuz_gitops/ModulesPage.svelte';
	import {repos_context} from '@fuzdev/fuz_gitops/repo.svelte.js';

	const {repo, repos} = repos_context.get();
</script>

<ModulesPage {repo} {repos} />
