<script lang="ts">
	import {Repo, repos_parse, repos_context} from '@ryanatkn/fuz_gitops/repo.svelte.js';
	import type {Snippet} from 'svelte';

	import {repos_json} from '$routes/repos.ts';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// this is duplicated in each repos page to code split the repos data

	repos_context.set(repos_parse(repos_json.map((r) => new Repo(r)), 'https://www.ryanatkn.com/'));
</script>

<div class="width_100 flex_1">
	{@render children()}
</div>
