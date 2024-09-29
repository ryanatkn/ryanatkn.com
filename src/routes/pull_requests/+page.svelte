<script lang="ts">
	import Pull_Requests_Page from '@ryanatkn/fuz_gitops/Pull_Requests_Page.svelte';
	import {repos_context} from '@ryanatkn/fuz_gitops/repo.js';

	const {repo, repos} = repos_context.get();
</script>

<!-- TODO remove the `: any` after fixing the fuz_gitops published types -->
<Pull_Requests_Page
	{repo}
	{repos}
	filter_pull_request={(pull: any) => pull.user.login === 'ryanatkn'}
/>
