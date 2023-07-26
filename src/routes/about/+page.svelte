<script lang="ts">
	import Favicon from '$lib/Favicon.svelte';
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';
	import {base} from '$app/paths';

	import ContactInfo from '$routes/ContactInfo.svelte';

	// ...
</script>

<div class="about prose">
	<header class="box"><h1 class="panel">about me</h1></header>
	<section class="width_md panel">
		<p>
			Hi, my name is Ryan Atkinson and I'm a web developer and this is my web site. I'm trying to
			make powerful and simple tools to help people be creative and productive in social contexts.
			I'm driven by curiosity and wanting to improve our lives with technology. My work is <a
				href="https://github.com/ryanatkn">open source on GitHub</a
			>
			and this website's homepage lists <a href="{base}/">my ongoing projects</a> like
			<a href="{base}/blog">my blog</a>.
		</p>
		<p>Some more info:</p>
		<ul>
			<li>
				I was initially self-taught (thanks internet) and I've been working as a JS-oriented web dev
				since 2011
			</li>
			<li>
				in 2019 I started <a href="https://github.com/ryanatkn">doing full-time open source</a>,
				releasing everything I write for free with permissive licenses
			</li>
			<li>
				I learned to code wanting to be a game programmer, but I fell in love with the web at my
				first job, the distribution hits different
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
				<a href="https://github.com/ryanatkn">other</a> abandonings
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
