<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';
	import {base} from '$app/paths';

	import ContactInfo from '$routes/ContactInfo.svelte';
	import Favicon from '$lib/Favicon.svelte';
	import Me from '$routes/Me.svelte';
</script>

<div class="about prose">
	<header class="box"><h1 class="panel">about me</h1></header>
	<section class="width_md panel">
		<div style:min-height="192px" style:margin-bottom="var(--spacing_md)">
			<div style:float="right"><Me /></div>
			<p>
				Hi, my name is Ryan Atkinson and I'm a web developer. I'm trying to make powerful and simple
				tools to help people be creative and productive in social contexts. I'm driven by curiosity
				and wanting to improve our lives with technology. My work is
				<a href="https://github.com/ryanatkn">open source on GitHub</a>
				and this website's homepage lists <a href="{base}/">my ongoing projects</a>.
			</p>
			<p>
				I work on the web because for all its flaws, it's a sandboxed platform with backwards
				compatibility that runs everywhere, reaching more people with less friction than anything
				else. I care a lot about performance and giving power to users throughout the stack.
			</p>
		</div>
		<p>Some more info:</p>
		<ul>
			<li>
				I was initially self-taught (ty internet) and I've been working as a JS-oriented web dev
				since 2011
			</li>
			<li>
				in 2019 I started <a href="https://github.com/ryanatkn">doing full-time open source</a>,
				releasing everything I write for free with permissive licenses
			</li>
			<li>
				I learned to code wanting to be a game programmer, but I fell in love with the web at my
				first job
			</li>
			<li>
				I started <a href="https://www.felt.dev/">feltjs</a> with
				<a href="https://12mod12.com/">Hamilton Reed</a> in January 2020 and we're still going
			</li>
			<li>
				my interest in making games continues as a hobby in <a
					href="https://www.cosmicplayground.org/">cosmicplayground.org</a
				>, <a href="https://www.dealt.dev/">dealt.dev</a>,
				<a href="https://ryanatkn.github.io/svelte-snake-sports/">Svelte Snake Sports</a>,
				<a href="https://earbetter.ryanatkn.com/">Earbetter</a>, and
				<a href="https://github.com/ryanatkn">others</a>
			</li>
			<li>
				I like <a href="https://svelte.dev/">Svelte</a> and
				<a href="https://kit.svelte.dev/">SvelteKit</a>
				so much that you shouldn't trust my opinion on it
			</li>
			<li>
				here's an ongoing attempt to credit <a href="{base}/influences">my influences</a>
			</li>
		</ul>
	</section>
	<section class="box">
		<div class="panel box">
			<ContactInfo />
		</div>
	</section>
</div>
<Breadcrumbs>
	<Favicon /></Breadcrumbs
>

<style>
	.about {
		flex: 1;
	}
	.panel {
		padding: var(--spacing_lg);
	}
	.panel > *:last-child {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
	}
</style>
