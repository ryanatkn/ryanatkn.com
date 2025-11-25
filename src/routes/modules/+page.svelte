<script lang="ts">
	import ModulesPage from '@ryanatkn/fuz_gitops/ModulesPage.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.svelte.js';

	const {repo, repos} = repos_context.get();
</script>

<ModulesPage {repo} {repos} />
