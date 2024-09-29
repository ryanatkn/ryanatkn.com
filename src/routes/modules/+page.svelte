<script lang="ts">
	import Modules_Page from '@ryanatkn/fuz_gitops/Modules_Page.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos} = repos_context.get();
</script>

<Modules_Page {repo} {repos} />
