<script lang="ts">
	import {base} from '$app/paths';

	import Community_Links from '$routes/funding/Community_Links.svelte';

	const SUPPORTER_COUNT = 0;
</script>

<main class="prose width_md">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1 class="row gap_md">
				<div>🐚</div>
				funding
				<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
				<div class="flip_x" style:transform="scaleX(-1)">🐚</div>
			</h1>
		</header>
	</section>
	<section class="box w_100">
		<div class="funding_progress shadow panel mb_xl">
			<progress class="w_100 h_xl5" value={SUPPORTER_COUNT} max="8000"></progress>
			<!-- TODO better display -->
			<div>
				{SUPPORTER_COUNT} of 8000 supporters
			</div>
		</div>
		{#if SUPPORTER_COUNT === 0}<aside class="mt_lg">be the first!</aside>{/if}
	</section>
	<section class="panel p_md shadow w_100">
		<div class="panel bg p_md">
			<p>
				Hi, I'm an independent software developer and this is an attempt to fund my self-directed
				open source work without any investors, sponsors, or other business relationships, except
				the simple and aligned relationship I have with the people who get value from my software,
				videos, and blog posts. My goal is to work for the open web on the projects I find
				meaningful.
			</p>
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and 13 years
				later I'm still enjoying it. I program both as a profession and hobby, and I love the web
				for its wide reach, backwards compatibility, and lack of gatekeepers. (more <a
					href="{base}/about">about me</a
				>) In 2019 I started seriously attempting to produce high quality and reusable software with
				TypeScript and Svelte, working full-time in public and continuing today. My savings will run
				out eventually, so I need a funding plan.
			</p>
			<p>
				Today most of my time goes to my projects and some of their dependencies and extensions:
			</p>
			<ul>
				<li>
					<a href="https://zzz.ryanatkn.com/">Zzz</a> - social web app framework
				</li>
				<li><a href="https://www.fuz.dev/">Fuz</a> - Svelte UI library and CSS design system</li>
				<li>
					<a href="https://gro.ryanatkn.com/">Gro</a> - task runner and toolkit extending SvelteKit
				</li>
			</ul>
			<p>
				I'm communicating about them on YouTube with
				<a href="https://youtube.com/@spiderspace_8000">Spiderspace</a>
				and <a href="https://youtube.com/@webdevladder">webdevladder</a>.
			</p>
			<p>
				If you want to help me produce software, videos, and blog posts with incentives as pure as
				the + function, you can support me on <a href="https://github.com/sponsors/ryanatkn"
					>GitHub Sponsors</a
				>
				or
				<a href="https://www.patreon.com/ryanatkn">Patreon</a>. Giving me any amount of money gives
				you access to supporter-only community spaces.
			</p>
			<p>
				To fund my projects sustainably, I chose the arbitrary target of 8000 people giving me at
				least $1 USD per month. Today, I have <code>{SUPPORTER_COUNT}</code> supporters. If I don't have
				8000 supporters by the end of 2025, 21 months after writing this, I'll reevaluate my approach
				to funding.
			</p>
			<aside>
				This funding strategy, with direct audience support and supporter-only community spaces, is
				the simplest and most aligned I can think of.
			</aside>
			<p>
				<a href="https://discord.gg/YU5tyeK72X">Join the Discord</a> to get a feel for the vibes - it's
				public-professional and I want to have fun with it. I don't want to spend much time moderating
				community spaces, so for example the Discord doesn't have offtopic channels, although it does
				have some for general web tech. The goal is to make an environment where anyone who shows up
				can learn and have fun around this cluster of technologies.
			</p>
			<aside>
				<Community_Links />
			</aside>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
		word-break: break-all;
	}

	.funding_progress {
		background: linear-gradient(35deg, var(--fg_2), transparent);
		width: 100%;
		padding: var(--space_lg);
		max-width: 600px;
		color: var(--color_b_7);
		font-size: var(--size_xl2);
		font-weight: 200;
		text-align: center;
	}
</style>
