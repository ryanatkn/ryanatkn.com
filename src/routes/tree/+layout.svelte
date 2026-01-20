<script lang="ts">
	import {Repo, repos_parse, repos_context} from '@fuzdev/fuz_gitops/repo.svelte.js';
	import type {Snippet} from 'svelte';
	import {Library, library_context} from '@fuzdev/fuz_ui/library.svelte.js';

	import {repos_json} from '$routes/repos.ts';
	import {library_json} from '$routes/library.ts';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	// this is duplicated in each repos page to code split the repos data

	repos_context.set(
		repos_parse(
			repos_json.map((r) => new Repo(r)),
			'https://www.ryanatkn.com/',
		),
	);

	library_context.set(new Library(library_json));
</script>

<div class="width:100% flex:1">
	{@render children()}
</div>
