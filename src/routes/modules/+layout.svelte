<script lang="ts">
	import {parse_repos, repos_context} from '@ryanatkn/fuz_gitops/repo.js';
	import type {Snippet} from 'svelte';

	import {repos} from '$routes/repos.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// this is duplicated in each repos page to code split the repos data

	repos_context.set(parse_repos(repos, 'https://www.ryanatkn.com/'));
</script>

<div class="w_100 flex_1">
	{@render children()}
</div>
