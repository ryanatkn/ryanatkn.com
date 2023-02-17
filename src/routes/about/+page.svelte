<script lang="ts">
	import Favicon from '$lib/Favicon.svelte';
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	import ContactInfo from '$routes/ContactInfo.svelte';

	// ...
</script>

<div class="about markup">
	<header class="centered"><h1 class="panel">about me</h1></header>
	<section class="column panel">
		<p>
			Hi, my name is Ryan Atkinson and I'm a web developer. I'm focused on building powerful and
			simple tools to help people be creative and productive in social contexts. I'm driven by
			curiosity and wanting to improve our lives with technology. This website's homepage lists <a
				href="/">my ongoing projects</a
			>.
		</p>
		<p>Some more info:</p>
		<ul>
			<li>I'm self taught and I've been working as a web dev since 2011.</li>
			<li>
				I learned to code with the intention to be a game programmer, but I fell in love with the
				web at my first job. I owe much to the people there, including my mentor <a
					href="https://github.com/mgutz">Mario Gutierrez</a
				>
				and CEO <a href="https://www.linkedin.com/in/grantfarwell">Grant Farwell</a>.
			</li>
			<li>
				I started <a href="https://www.felt.dev/">Felt</a> and
				<a href="https://www.felt.social/">Felt.social</a> with
				<a href="https://12mod12.com/">Hamilton Reed</a> in January 2020 and we're still going.
			</li>
			<li>
				My interest in making games lives on as a hobby in <a href="https://cosmicplayground.org/"
					>cosmicplayground.org</a
				>
				and
				<a href="https://www.dealt.dev/">dealt.dev</a>.
			</li>
			<li>
				From my experience with games, I care more about performance than most, but I'm no expert.
			</li>
			<li>
				I like <a href="https://svelte.dev/">Svelte</a> and
				<a href="https://kit.svelte.dev/">SvelteKit</a>
				a <em>lot</em>.
			</li>
			<li>
				My drive stops when I don't believe in my work. I need to feel I'm working towards a more
				just society. To that end <a href="https://www.felt.social/">Felt.social</a> is a co-owned platform
				without ads, investors, or other major compromises.
			</li>
			<li>
				here's an ongoing attempt to credit <a href="/influences">my influences</a>
			</li>
		</ul>
	</section>
	<section class="panel">
		<ContactInfo />
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
