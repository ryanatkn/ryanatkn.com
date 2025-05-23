<script lang="ts">
	import {base} from '$app/paths';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {github_logo} from '@ryanatkn/fuz/logos.js';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Community_Links from '@ryanatkn/fuz/Community_Links.svelte';

	import Page_Links from '$routes/Page_Links.svelte';
	import Patreon_Logo from '$routes/funding/Patreon_Logo.svelte'; // TODO move to fuz
	import Favicon from '$routes/Favicon.svelte';
</script>

<div class="width_md flex_1">
	<section class="box">
		<header class="box">
			<h1 class="row gap_md text_align_center mt_xl5 mb_0">
				<div>🐚</div>
				funding
				<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
				<div class="flip_x" style:transform="scaleX(-1)">🐚</div>
			</h1>
		</header>
	</section>
	<section class="box row flex_wrap gap_md">
		<div class="display_contents" style:--link_color="var(--color_b_5)">
			<!-- TODO hacky with max-width -->
			<Card href="https://github.com/sponsors/ryanatkn" attrs={{style: 'max-width: 100%'}}>
				{#snippet icon()}<Svg
						data={github_logo}
						fill="var(--color_b_5)"
						size="var(--space_xl7, 64px)"
					/>{/snippet}
				GitHub Sponsors
			</Card>
		</div>
		<Card href="https://www.patreon.com/ryanatkn" align="right">
			{#snippet icon()}<Patreon_Logo fill="var(--color_a_5)" />{/snippet}
			Patreon
		</Card>
	</section>
	<section class="panel p_sm shadow_md w_100">
		<div class="panel bg p_xl shadow_xs">
			<div class="float_right icon_size_lg">🪶</div>
			<p>
				Hi thank you for reading. I'm an independent software developer and this is an attempt to
				fund my self-directed work on free and open source software. My goal is to work for the open
				web on the projects I find meaningful, while building community with people who value my
				software.
			</p>
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and many years
				later I'm still enjoying it. I program both as a profession and hobby, and I love the web
				for its wide reach, high capability, backwards compatibility, and gatekeeper optionality. In
				2019 I started publishing almost all of my code as I wrote it, and set out to produce high
				quality and reusable software with TypeScript and Svelte, working full-time in public and
				continuing today. More <a href="{base}/about">about me</a>.
			</p>
			<p>
				Today most of my time goes to my projects that face end-users, and some of their
				dependencies and extensions:
			</p>
			<ul>
				<li>
					<a href="https://www.zzz.software/">Zzz</a> – web environment
				</li>
				<li>
					<a href="https://moss.ryanatkn.com/">Moss</a> – CSS framework and design system
				</li>
				<li><a href="https://www.fuz.dev/">Fuz</a> – Svelte UI library</li>
				<li>
					<a href="https://gro.ryanatkn.com/">Gro</a> – task runner and toolkit extending SvelteKit
				</li>
				<li>
					more on <a href="https://github.com/ryanatkn">my GitHub profile</a> and
					<a href="https://www.ryanatkn.com/tree">here on my website</a>
				</li>
			</ul>
			<p>
				I'm communicating about my projects and process on YouTube with
				<a href="https://youtube.com/@webdevladder">webdevladder</a> and blogging at
				<a href="https://www.webdevladder.net/">webdevladder.net</a>. The production value is low so
				I get more time to program - I did some livecoding on
				<a href="https://youtube.com/@webdevladder_vods">webdevladder_vods</a>
				in 2024 and it was <em>draining</em>, but I'm bringing it back without the vampiric webcam
				and with less seriousness.
			</p>
			<p>
				I've been lucky to be able to live off savings for the last 5 years, but I need a funding
				plan to sustain these projects. My runway currently extends through 2026.
			</p>
			<p>
				To help me produce software, videos, and blog posts, you can support me on
				<!-- TODO after upgrading Fuz use `inline` instead of the classes -->
				<a
					class="white_space_nowrap"
					href="https://github.com/sponsors/ryanatkn"
					style:--link_color="var(--color_b_5)"
					><Svg data={github_logo} size="var(--font_size_md)" fill="var(--color_b_5)" inline /> GitHub
					Sponsors</a
				>
				or
				<a class="white_space_nowrap" href="https://www.patreon.com/ryanatkn"
					><Patreon_Logo size="var(--font_size_md)" fill="var(--color_a_5)" inline /> Patreon</a
				>. Supporting me at any level grants you access to supporters-only social websites I build
				on camera (none yet, maybe late 2025). Supporting me through GitHub instead of Patreon also
				gives you access to discussions on a supporters-only GitHub repo.
			</p>
			<p>
				My goal is to continue having fun building great software, and I hope to collaborate more
				with people around this cluster of ideas and technologies. Lots of passion if you can
				imagine. Thanks again for reading, I hope you have a good experience.
			</p>
			<aside class="overflow_auto">
				<Community_Links selected="ryanatkn.com" />
			</aside>
		</div>
	</section>
	<section class="box gap_xl2">
		<Page_Links />
	</section>
	<section class="box">
		<Breadcrumb><Favicon /></Breadcrumb>
	</section>
</div>
