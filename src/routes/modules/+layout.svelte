<script lang="ts">
	import {parse_deployments, set_deployments} from '@ryanatkn/fuz_gitops/deployments.js';
	import type {Snippet} from 'svelte';

	import deployments from '$lib/deployments.json';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// this is duplicated in each deployments page to code split the deployments data

	// TODO fix JSON types
	set_deployments(parse_deployments(deployments, 'https://www.ryanatkn.com/'));
</script>

<div class="w_100 flex_1">
	{@render children()}
</div>
