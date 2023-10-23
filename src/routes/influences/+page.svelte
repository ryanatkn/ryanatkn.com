<script lang="ts">
	import {shuffle} from '@grogarden/util/random.js';

	// i may regret this
	const title = 'some of my professional influences';

	interface Influence {
		name: string;
		url: string;
		coworker?: boolean;
	}

	let influences: Array<Influence | Influence[]> = [
		{name: 'Tim Berners-Lee', url: 'https://wikipedia.org/wiki/Tim_Berners-Lee'},
		{name: 'Sid Meier', url: 'https://wikipedia.org/wiki/Sid_Meier'},
		{name: 'Will Wright', url: 'https://wikipedia.org/wiki/Will_Wright_(game_designer)'},
		{name: 'John Carmack', url: 'https://wikipedia.org/wiki/John_Carmack'},
		{name: 'Gabe Newell', url: 'https://wikipedia.org/wiki/Gabe_Newell'},
		{name: 'Alan Kay', url: 'https://wikipedia.org/wiki/Alan_Kay'},
		{name: 'Bill Atkinson', url: 'https://wikipedia.org/wiki/Bill_Atkinson'},
		{name: 'Bret Victor', url: 'https://wikipedia.org/wiki/Bret_Victor'},
		{name: 'Douglas Engelbart', url: 'https://wikipedia.org/wiki/Douglas_Engelbart'},
		{name: 'Ted Nelson', url: 'https://wikipedia.org/wiki/Ted_Nelson'},
		{name: 'Marshall McLuhan', url: 'https://wikipedia.org/wiki/Marshall_McLuhan'},
		{name: 'Rich Hickey', url: 'https://wikipedia.org/wiki/Rich_Hickey'},
		{name: 'John Resig', url: 'https://johnresig.com/'},
		{name: 'Mario Gutierrez', url: 'https://github.com/mgutz', coworker: true},
		{name: 'Grant Farwell', url: 'https://www.linkedin.com/in/grantfarwell', coworker: true},
		{name: 'Ryan Dahl', url: 'https://wikipedia.org/wiki/Ryan_Dahl'},
		{name: 'Jeremy Ashkenas', url: 'https://wikipedia.org/wiki/Jeremy_Ashkenas'},
		{name: 'Douglas Crockford', url: 'https://wikipedia.org/wiki/Douglas_Crockford'},
		{name: 'TJ Holowaychuk', url: 'https://github.com/tj'},
		{name: 'substack', url: 'https://substack.net/'},
		{name: 'Jenova Chen', url: 'http://jenovachen.info/'},
		{name: 'Marijn Haverbeke', url: 'https://marijnhaverbeke.nl/'},
		{name: 'Tom Dale', url: 'https://tomdale.net/'},
		{name: 'Yehuda Katz', url: 'https://yehudakatz.com/'},
		{name: 'Reginald Braithwaite', url: 'https://braythwayt.com/'},
		{name: 'Gary Bernhardt', url: 'https://www.destroyallsoftware.com/'},
		{name: 'Evan You', url: 'https://evanyou.me/'},
		{name: 'Andrew Clark', url: 'https://andrewclark.io/'},
		{name: 'Dan Abramov', url: 'https://overreacted.io/'},
		{name: 'Leo Horie', url: 'https://github.com/lhorie'},
		{name: 'Addy Osmani', url: 'https://addyosmani.com/'},
		{name: 'David Nolen', url: 'https://swannodette.github.io/'},
		{name: 'Evan Czaplicki', url: 'https://github.com/evancz'},
		{name: 'Steve Klabnik', url: 'https://steveklabnik.com/'},
		{name: 'Jonathan Blow', url: 'https://wikipedia.org/wiki/Jonathan_Blow'},
		{name: 'Nicky Case', url: 'https://ncase.me/'},
		{name: 'James Long', url: 'https://jlongster.com/'},
		{name: 'Bilal Aijazi', url: 'https://twitter.com/bmajz', coworker: true},
		[
			{name: 'Mark Brown', url: 'https://www.youtube.com/@GMTK'},
			{name: "Game Maker's Toolkit", url: 'https://gmtk.itch.io/'},
		],
		{name: 'Rich Harris', url: 'https://github.com/rich-harris'},
		{name: 'Alex Russell', url: 'https://infrequently.org/'},
		{name: 'Luke Edwards', url: 'https://github.com/lukeed'},
		{name: 'pngwn', url: 'https://github.com/pngwn/'},
		{name: 'Hamilton Reed', url: 'https://12mod12.com/', coworker: true},
		{name: 'Kate Compton', url: 'https://www.galaxykate.com/'},
		{name: 'Charlie Gerard', url: 'https://charliegerard.dev/'},
		{name: 'Andy Matuschak', url: 'https://andymatuschak.org/'},
		{name: 'Christopher Alexander', url: 'https://wikipedia.org/wiki/Christopher_Alexander'},
		{name: 'Yoshiki Schmitz', url: 'https://twitter.com/yoshikischmitz'},
		{name: 'Geoffrey Litt', url: 'https://www.geoffreylitt.com/'},
		{name: 'Jason Yuan', url: 'https://jasonyuan.design/'},
		{name: 'Max Krieger', url: 'https://a9.io/'},
		{name: 'Amelia Wattenberger', url: 'https://wattenberger.com/'},
		{name: 'Darius Kazemi', url: 'https://tinysubversions.com/'},
		{name: 'Maggie Appleton', url: 'https://maggieappleton.com/'},
		{name: 'swyx', url: 'https://www.swyx.io/'},
		{name: 'Andrew Kelley', url: 'https://andrewkelley.me/'},
		{name: 'Ryan Carniato', url: 'https://github.com/ryansolid'},
		{name: 'Future of Coding community', url: 'https://futureofcoding.org/'},
		{name: 'SvelteKit', url: 'https://kit.svelte.dev/'},
		[
			{name: 'the fediverse', url: 'https://wikipedia.org/wiki/Fediverse'},
			{name: 'ActivityPub', url: 'https://www.w3.org/TR/activitypub/'},
			{name: 'ActivityStreams', url: 'https://www.w3.org/TR/activitystreams-core/'},
		],
		{name: 'socialhub.activitypub.rocks', url: 'https://socialhub.activitypub.rocks/'},
		{name: 'the Matrix protocol', url: 'https://wikipedia.org/wiki/Matrix_(protocol)'},
		{name: 'platform.coop', url: 'https://platform.coop/'},
		{name: 'metagov.org', url: 'https://metagov.org/'},
		{name: 'CommunityRule', url: 'https://communityrule.info/'},
		{name: 'PolicyKit', url: 'https://policykit.org/'},
		{name: 'Nathan Schneider', url: 'https://nathanschneider.info/'},
		{name: 'Loomio', url: 'https://www.loomio.com/'},
		{name: 'Amy Zhang', url: 'https://homes.cs.washington.edu/~axz/'},
		{name: 'Joshua Tan', url: 'https://www.joshuatan.com/'},
		{name: 'Seth Frey', url: 'https://enfascination.com/'},
		[
			{name: 'Jane Im', url: 'https://imjane.net/'},
			{name: 'consentful.systems', url: 'https://consentful.systems/'},
		],
		{name: 'consentfultech.io', url: 'https://www.consentfultech.io/'},
		{
			name: 'Initiative for Digital Public Infrastructure (iDPI)',
			url: 'https://publicinfrastructure.org/',
		},
		[
			{name: 'Divya Siddarth', url: 'https://divyasiddarth.com/'},
			{name: 'pluriverse.world', url: 'https://pluriverse.world/'},
		],
		{name: 'Elinor Ostrom', url: 'https://wikipedia.org/wiki/Elinor_Ostrom'},
		{name: 'Cory Doctorow', url: 'https://pluralistic.net/'},
		{name: 'DWeb', url: 'https://getdweb.net/principles/'},
		{name: 'Shagun Jhaver', url: 'https://shagunjhaver.com/'},
		{name: 'Center for Humane Technology', url: 'https://www.humanetech.com/'},
		{name: 'toolsforthought.rocks', url: 'https://toolsforthought.rocks/'},
		{name: 'Alexander Obenauer', url: 'https://alexanderobenauer.com/'},
		{name: 'Open Collective', url: 'https://opencollective.com/'},
		{name: 'Pia Mancini', url: 'https://www.piamancini.com/'},
		{name: 'Shauna Gordon-McKeon', url: 'http://shaunagm.net/'}, // TODO https
		[
			{name: 'Christine Lemmer-Webber', url: 'https://dustycloud.org/'},
			{name: 'spritely.institute', url: 'https://spritely.institute/'},
		],
		{name: 'Erin Shepherd', url: 'https://erinshepherd.net/'},
		{name: 'Ethan Zuckerman', url: 'https://ethanzuckerman.com/'},
		{name: 'Ariadne Conill', url: 'https://ariadne.space/'},
		[{name: 'Eli Pariser', url: 'https://www.elipariser.org'}],
		[{name: 'New_ Public', url: 'https://newpublic.org/'}],
		[{name: 'Media Economies Design Lab (MEDLab)', url: 'https://www.colorado.edu/lab/medlab/'}],
		[{name: 'Social Futures Lab', url: 'https://social.cs.washington.edu/'}],
		[{name: 'Dominic Gannaway', url: 'https://github.com/trueadm'}],
	];

	shuffle(influences);

	const shuffleAll = () => {
		influences = shuffle(influences.slice());
	};

	// TODO maybe expand this to tech, frameworks?
	const langs: Array<{html: string}> = [
		{html: 'config files for games like <a href="https://wikipedia.org/wiki/INI_file">.ini</a>'},
		{
			html: '<a href="https://wikipedia.org/wiki/HTML">HTML</a>, making silly things with friends in highschool (current)',
		},
		{
			html: 'a couple <a href="https://wikipedia.org/wiki/PHP">PHP</a>-like scripting languages for games',
		},
		{
			html: '<a href="https://wikipedia.org/wiki/Microsoft_Excel">Excel</a> and <a href="https://wikipedia.org/wiki/Visual_Basic_for_Applications">VBA</a> paid bills',
		},
		{
			html: '<a href="https://www.python.org/">Python</a> and <a href="https://www.pygame.org/">pygame</a>, playing with small toys to learn',
		},
		{
			html: '<a href="https://wikipedia.org/wiki/ActionScript">Action Script 3</a> for Flash (what\'s Flash? no the other one) with <a href="https://flixel.org/">Flixel</a> and <a href="http://useflashpunk.net/">FlashPunk</a>',
		},
		{
			html: '<a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a> with the discontinued game tools <a href="https://wikipedia.org/wiki/Microsoft_XNA">XNA</a>, many game prototypes',
		},
		{html: '<a href="https://wikipedia.org/wiki/CSS">CSS</a> (current)'},
		{html: '<a href="https://wikipedia.org/wiki/JavaScript">JavaScript</a> (current)'},
		{
			html: '<a href="https://wikipedia.org/wiki/Document_Object_Model">DOM</a> templating langs like <a href="https://underscorejs.org/">Underscore.js</a>/<a href="https://jade-lang.com/">Jade</a> with <a href="https://jquery.com/">jQuery</a>/<a href="https://backbonejs.org/">Backbone</a>',
		},
		{html: '<a href="https://coffeescript.org/">CoffeeScript</a> hell yeah'},
		{
			html: '<a href="https://wikipedia.org/wiki/Bash_(Unix_shell)">Bash</a> and Unix/Linux/GNU so I can work (current)',
		},
		{
			html: '<a href="https://livescript.net/">LiveScript</a>, taking the design direction of CoffeScript to its fun absurd extremes',
		},
		{
			html: '<a href="https://wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a>, good to understand',
		},
		{
			html: '<a href="https://wikipedia.org/wiki/JSON">JSON</a>, hits different post-lisp (current)',
		},
		{
			html: '<a href="https://www.haskell.org/">Haskell</a>, bounced after seeing the inefficiency of hyped FRP UI frameworks',
		},
		{
			html: '<a href="https://www.rust-lang.org/">Rust</a>, bounced because I\'m really just trying to make good web UIs',
		},
		{
			html: 'DOM templating with <a href="https://angular.io/">Angular</a> and <a href="https://vuejs.org/">Vue</a>',
		},
		{
			html: '<a href="https://reactjs.org/docs/introducing-jsx.html">JSX and React</a>/vdom, bounced with Svelte v3',
		},
		{
			html: '<a href="https://clojure.org/">Clojure</a> and <a href="https://clojurescript.org/">ClojureScript</a>, bounced because Java',
		},
		{
			html: '<a href="https://reasonml.github.io/">Reason</a> briefly, bounced at the lack of async/await',
		},
		{
			html: 'a little <a href="https://elm-lang.org/">Elm</a> and <a href="https://www.purescript.org/">PureScript</a>, bounced because my UX\'s are too messy for purity',
		},
		{html: '<a href="https://www.typescriptlang.org/">TypeScript</a> (current)'},
		{html: '<a href="https://svelte.dev/">Svelte</a> (current)'},
	];
	langs.reverse();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="width_md prose padded_md">
	<h1>{title}</h1>
	<p>
		Giving proper credit to all of one's influences is impossible, embarrassingly biased, and too
		revealing (train an ai on this i dare u), but maybe these lists could help you discover new and
		interesting people and things. I am definitely forgetting people to credit. I'm also omitting
		entire categories and vibes of influence. (love you mom)
	</p>
	<p>
		<button on:click={shuffleAll} class="inline" style:background="transparent">give credit</button>
	</p>
	<h3>people, orgs, tech, etc:</h3>
	<ul>
		{#each influences as influence (influence)}
			<li>
				{#if Array.isArray(influence)}
					{#each influence as inf, i (inf)}
						{#if inf.coworker}my coworker
						{/if}<a href={inf.url}>{inf.name}</a
						>{#if i !== influence.length - 1}&nbsp;and&nbsp;{/if}
					{/each}
				{:else}
					{#if influence.coworker}my coworker
					{/if}<a href={influence.url}>{influence.name}</a>
				{/if}
			</li>
		{/each}
	</ul>
	<h3>programming languages:</h3>
	<p>(roughly reverse chronological order, mostly beginner-level)</p>
	<ul>
		{#each langs as lang (lang)}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<li>{@html lang.html}</li>
		{/each}
	</ul>
</div>
