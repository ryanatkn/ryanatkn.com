<script lang="ts">
	import {base} from '$app/paths';
	import Github_Logo from '@ryanatkn/fuz/Github_Logo.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Community_Links from '$routes/funding/Community_Links.svelte';
	import Patreon_Logo from '$routes/funding/Patreon_Logo.svelte';
	import Supporter_Display from '$routes/funding/Supporter_Display.svelte';
	import Favicon from '$lib/Favicon.svelte';

	const SUPPORTER_COUNT = 0;
</script>

<div class="prose width_md flex_1">
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
		<div class="funding_progress">
			<!-- TODO maybe remove the wrapper -->
			<div class="bg">
				<Supporter_Display count={SUPPORTER_COUNT} />
			</div>
			<!-- TODO better display -->
			<div class="mt_xl2">
				<p class="funding_text">{SUPPORTER_COUNT} of 8000 supporters</p>
				<div class="box">
					<blockquote class="size_md shadow_inset_active mt_md px_xl">
						something will appear above when it's >=1
					</blockquote>
				</div>
			</div>
		</div>
	</section>
	<section class="box row wrap gap_md">
		<div class="display_contents" style:--link_color="var(--color_b_5)">
			<!-- TODO hacky with max-width -->
			<Card href="https://github.com/sponsors/ryanatkn" attrs={{style: 'max-width: 100%'}}>
				<svelte:fragment slot="icon"><Github_Logo /></svelte:fragment>
				GitHub Sponsors
			</Card>
		</div>
		<Card href="https://www.patreon.com/ryanatkn" align="right">
			<svelte:fragment slot="icon"><Patreon_Logo /></svelte:fragment>
			Patreon
		</Card>
	</section>
	<section class="panel p_md shadow w_100">
		<div class="panel bg p_md">
			<div class="float_right icon_size_lg">🪶</div>
			<p>
				Hello thank you for reading. I'm an independent software developer and this is an attempt to
				fund my self-directed open source work without any investors, sponsors, or other business
				relationships, except the simple and aligned relationship I have with the people who derive
				value from my software, videos, and blog posts. My goal is to work for the open web on the
				projects I find meaningful.
			</p>
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and many years
				later I'm still enjoying it. I program both as a profession and hobby, and I love the web
				for its wide reach, high capability, backwards compatibility, and gatekeeper optionality. In
				2019 I started publishing almost all of my code as I wrote it, and set out to produce high
				quality and reusable software with TypeScript and Svelte, working full-time in public and
				continuing today. More <a href="{base}/about">about</a> me.
			</p>
			<p>
				Today most of my time goes to my projects that face end-users, and some of their
				dependencies and extensions:
			</p>
			<ul>
				<li>
					<a href="https://zzz.ryanatkn.com/">Zzz</a> - social web app framework (faces end-users, drives
					the other projects)
				</li>
				<li><a href="https://www.fuz.dev/">Fuz</a> - Svelte UI library and CSS design system</li>
				<li>
					<a href="https://gro.ryanatkn.com/">Gro</a> - task runner and toolkit extending SvelteKit
				</li>
				<li>
					more on <a href="https://github.com/ryanatkn">my GitHub profile</a> and
					<a href="https://www.ryanatkn.com/tree">fuz_gitops tree</a>
				</li>
			</ul>
			<p>
				I'm communicating about them on YouTube with
				<a href="https://youtube.com/@spiderspace_8000">Spiderspace</a>
				and <a href="https://youtube.com/@webdevladder">webdevladder</a>, and blogging at
				<a href="https://www.spiderspace.org/">spiderspace.org</a>
				and <a href="https://www.webdevladder.net/">webdevladder.net</a>. The production value is
				low, the software is my priority.
			</p>
			<p>
				I've been lucky to be able to live off savings for the last 5 years, but I need a funding
				plan to sustain these projects. I have at least a couple years left before reality catches
				up. Atypically for the 2024 attention economy, I won't ever pivot to sponsorships with
				Spiderspace or webdevladder - I'll get a normal job before doing ads, nothing against them,
				I just don't want those relationships to complicate my life.
			</p>
			<p>
				If you want to help me produce software, videos, and blog posts with incentives as pure as
				the + function, you can support me on
				<!-- TODO CSS classes after upgrading Fuz for `vertical-align-middle` -->
				<a href="https://github.com/sponsors/ryanatkn" style:--link_color="var(--color_b_5)"
					><Github_Logo
						size="var(--size_md)"
						attrs={{class: 'inline_block', style: 'vertical-align: middle'}}
					/> GitHub Sponsors</a
				>
				or
				<a href="https://www.patreon.com/ryanatkn"
					><Patreon_Logo
						size="var(--size_md)"
						attrs={{class: 'inline_block', style: 'vertical-align: middle'}}
					/> Patreon</a
				>. Giving me any amount of money gives you access to supporter-only community spaces, and
				sometimes special abilities in public spaces.
			</p>
			<p>
				To fund my projects sustainably, I chose the arbitrary target of 8000 people giving me at
				least $1 USD per month. Today, I have <code>{SUPPORTER_COUNT}</code> supporters. If I don't have
				8000 supporters by the end of 2025, 21 months after writing this, I'll reevaluate my approach
				to funding, or maybe I'll rethink sooner.
			</p>
			<aside>
				<p>
					This funding strategy, with direct audience support and supporter-only community spaces,
					is the simplest and most aligned I can think of. By solely relying on small donations, I
					can avoid any influence that big donors might have on my incentives. Of course I will be
					influenced by my audience, but my opinions and actions aren't shaped by money. Any
					community member can influence me whether they support me financially or not - it's the
					ideas and vibes that matter - and getting a normal job is a solid backup plan so I can be
					true to myself.
				</p>
				<p>
					I want to minimize the overhead of my funding strategy so I can stay productive on the
					things that matter more. I want to be an independent open source developer, not build an
					organization with employees, so my needs are much lower than a company's. Your support
					helps me directly, and I'll be transparent about how things go.
				</p>
			</aside>
			<p>
				<a href="https://discord.gg/YU5tyeK72X">Join the Discord</a> to get a feel for the vibes - it's
				public-professional and I want to have fun with it. I also want to minimize time spent moderating
				the community spaces, and so for example the Discord doesn't have offtopic channels, although
				it does have some spaces for general web tech discussion. (maybe this will contract or expand,
				idk)
			</p>
			<p>
				My goal with the community spaces is to make an environment where anyone who shows up can
				learn and have fun around this cluster of technologies. Meanwhile I'll be working on the
				software that I care most about. Thanks again for reading and I hope you have a good
				experience.
			</p>
			<aside>
				<Community_Links />
			</aside>
		</div>
	</section>
	<section>
		<Breadcrumb><Favicon /></Breadcrumb>
	</section>
</div>

<style>
	h1 {
		text-align: center;
		word-break: break-all;
	}

	.funding_progress {
		background: linear-gradient(20deg, var(--fg_2), transparent 70%);
		width: 100%;
		padding: var(--space_xl5);
		box-shadow: var(--shadow_inset_active);
		border-radius: var(--radius_md);
		margin-bottom: var(--space_lg);
		max-width: 600px;
		cursor: initial; /* undo label style, maybe change to .cursor_initial after Fuz update */
		text-align: center;
	}
	.funding_text {
		font-size: var(--size_xl2);
		font-weight: 400;
		color: var(--text_2);
		text-shadow: var(--bg) 1px 1px 1px;
	}
	.funding_progress:hover .funding_text {
		color: var(--text_1);
		transform: scale(1.01);
	}
	.funding_progress:active .funding_text {
		transform: scale(0.98);
	}
</style>
