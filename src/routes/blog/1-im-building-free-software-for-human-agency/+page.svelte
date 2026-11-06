<script lang="ts" module>
	import type { BlogPostMetadata } from '@fuzdev/fuz_blog/blog.ts';

	export const post = {
		title: "I'm building free software for human agency",
		date_published: '2026-11-06T21:15:06.000Z',
		date_modified: '2026-11-06T21:15:06.000Z',
		summary: 'introducing my blog',
		tags: ['announcement']
	} satisfies BlogPostMetadata;
</script>

<script lang="ts">
	import { asset } from '$app/paths';
	import BlogPost from '@fuzdev/fuz_blog/BlogPost.svelte';
</script>

<BlogPost {post}>
	<section>
		<p>
			My name is Ryan Atkinson and this is my personal blog. I'm an independent software developer
			building Fuz, a zippy stack for human agency (<a href="https://www.fuz.dev/">fuz.dev</a>), and
			I have some unannounced apps on the way that build on it. Fuz is independent and
			noncommercial, and I've been working on it full-time in public since 2019. I started working
			professionally as a programmer at startups in 2011 and have been relying on open source ever
			since, and I'm trying to make a career of free software. My goal is to build a sustainable
			foundation for simple, secure, and optimal software, to help people use technology to improve
			their lives. For more about Fuz see its
			<a href="https://www.fuz.dev/blog/1-fuz-is-a-free-software-stack-for-human-agency">
				intro post
			</a>.
		</p>
		<p>
			I plan to blog here mainly about my work and technology, but I'm leaving it open-ended.
			Fuz-specific articles will be posted to <a href="https://www.fuz.dev/blog">its blog</a>. Some
			posts will be technical, others more accessible - I'll try to label things helpfully. Although
			I use AI to develop software, I don't and won't use it to imitate human writing. Follow the
			<a href={asset('blog/feed.xml')}>feed</a> for updates.
		</p>
		<p>Key posts will be linked here as I write them. Some other links:</p>
		<ul>
			<li>
				<a href="https://www.ryanatkn.com/about">about me</a>
			</li>
			<li>
				<a href="https://www.ryanatkn.com/funding">funding</a> - public donations, for now on GitHub
				Sponsors and Patreon
			</li>
			<li>
				Bluesky as <a rel="me" href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a> and
				<a rel="me" href="https://bsky.app/profile/fuz.dev">@fuz.dev</a>, Mastodon as
				<a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
			</li>
			<li>
				GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and
				<a rel="me" href="https://github.com/fuzdev">@fuzdev</a>
			</li>
			<li>
				<a href="https://www.fuz.dev">fuz.dev</a> and its
				<a href="https://www.fuz.dev/blog/1-fuz-is-a-free-software-stack-for-human-agency">
					intro post
				</a>
			</li>
		</ul>
	</section>
</BlogPost>
