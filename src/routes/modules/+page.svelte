<script lang="ts">
	import Modules_Page from '@ryanatkn/fuz_gitops/Modules_Page.svelte';
	import {get_repos} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos} = get_repos();
</script>

<Modules_Page {repo} {repos} />
