<script lang="ts">
	import {base} from '$app/paths';
	import Github_Logo from '@ryanatkn/fuz/Github_Logo.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Community_Links from '$routes/funding/Community_Links.svelte';
	import Patreon_Logo from '$routes/funding/Patreon_Logo.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="prose width_md flex_1">
	<section class="box">
		<header class="prose box mb_xl4">
			<h1 class="row gap_md text_align_center">
				<div>🐚</div>
				funding
				<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
				<div class="flip_x" style:transform="scaleX(-1)">🐚</div>
			</h1>
		</header>
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
				Hi thank you for reading. I'm an independent software developer and this is an attempt to
				fund my self-directed work on free and open source software. My goal is to work for the open
				web on the projects I find meaningful, while building community with the people who derive
				value from my software, videos, and blog posts.
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
					<a href="https://www.ryanatkn.com/tree">here on my website</a>
				</li>
			</ul>
			<p>
				I'm communicating about my projects and process on YouTube with
				<a href="https://youtube.com/@spiderspace_8000">Spiderspace</a>
				and <a href="https://youtube.com/@webdevladder">webdevladder</a>, and blogging at
				<a href="https://www.spiderspace.org/">spiderspace.org</a>
				and <a href="https://www.webdevladder.net/">webdevladder.net</a>. The production value is
				low so I get more time to program.
			</p>
			<p>
				I've been lucky to be able to live off savings for the last 5 years, but I need a funding
				plan to sustain these projects. I have at least a couple years left before reality catches
				up.
			</p>
			<p>
				To help me produce software, videos, and blog posts, you can support me on
				<!-- TODO CSS classes after upgrading Fuz for `vertical-align-middle` -->
				<a
					class="nowrap"
					href="https://github.com/sponsors/ryanatkn"
					style:--link_color="var(--color_b_5)"
					><Github_Logo
						size="var(--size_md)"
						attrs={{class: 'inline_block', style: 'vertical-align: middle'}}
					/> GitHub Sponsors</a
				>
				or
				<a class="nowrap" href="https://www.patreon.com/ryanatkn"
					><Patreon_Logo
						size="var(--size_md)"
						attrs={{class: 'inline_block', style: 'vertical-align: middle'}}
					/> Patreon</a
				>. Supporting me at any level gives you access to supporter-only community spaces on Discord
				and the social websites I build on camera. Supporting me through GitHub instead of Patreon
				also gives you access to discussions on a supporters-only GitHub repo.
			</p>
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
				software and ideas that fill me with passion. Thanks again for reading and I hope you have a
				good experience.
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
