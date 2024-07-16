<script lang="ts">
	import Table_Page from '@ryanatkn/fuz_gitops/Table_Page.svelte';
	import {get_repos} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos} = get_repos();
</script>

<Table_Page {repo} {repos} />
