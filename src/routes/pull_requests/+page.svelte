<script lang="ts">
	import PullRequestsPage from '@fuzdev/fuz_gitops/PullRequestsPage.svelte';
	import {repos_context} from '@fuzdev/fuz_gitops/repo.svelte.js';

	const {repo, repos} = repos_context.get();
</script>

<!-- TODO remove the `: any` after fixing the fuz_gitops published types -->
<PullRequestsPage
	{repo}
	{repos}
	filter_pull_request={(pull: any) => pull.user.login === 'ryanatkn'}
/>
