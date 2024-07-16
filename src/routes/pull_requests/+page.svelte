<script lang="ts">
	import Pull_Requests_Page from '@ryanatkn/fuz_gitops/Pull_Requests_Page.svelte';
	import {get_repos} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos, unfetched_repos} = get_repos();
</script>

<!-- TODO remove the `: any` after fixing the fuz_gitops published types -->
<Pull_Requests_Page
	{repo}
	{repos}
	{unfetched_repos}
	filter_pull_request={(pull: any) => pull.user.login === 'ryanatkn'}
/>
