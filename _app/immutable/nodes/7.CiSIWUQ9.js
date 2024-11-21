import{a as r,t as v,d as R,e as Y}from"../chunks/disclose-version.CgtHxujX.js";import{s,c as t,r as a,a as D,t as q,a3 as I,f as K,p as E,a4 as A,a2 as N,a1 as J}from"../chunks/runtime.DnzaEnqM.js";import{e as O}from"../chunks/store.B5uvAfq3.js";import{e as Q}from"../chunks/each.BAtdHCWa.js";import{s as M}from"../chunks/style.PwPRnE0L.js";import{B as V}from"../chunks/Breadcrumb.DZx5B_f1.js";import{F as W}from"../chunks/Favicon.Bw1K67j3.js";import{a as u,d as X,e as Z,b as $}from"../chunks/string.b6PdxMny.js";import{b as G}from"../chunks/entry.gHNLUKYR.js";import{P as ee}from"../chunks/Page_Links.n2H2ibzJ.js";import{M as ae,C as te}from"../chunks/Me.DIKk92Of.js";import{s as oe}from"../chunks/render.C1MjUtjK.js";import{i as _}from"../chunks/props.WzuS_LKu.js";import{h as T}from"../chunks/html.C52E5HzC.js";import{S as se,z as re,m as ne,f as ie,a as le,w as ce}from"../chunks/logos.C_RuzqQf.js";var de=v('<menu class="unstyled svelte-remv2f"><a class="chip">tree</a> <a class="chip">table</a> <a class="chip">modules</a></menu>');function me(b){var e=de(),c=t(e);u(c,"href",`${G??""}/tree`);var n=s(c,2);u(n,"href",`${G??""}/table`);var d=s(n,2);u(d,"href",`${G??""}/modules`),a(e),r(b,e)}var pe=v("<p><!></p>"),ve=v('<p class="flex flex_wrap gap_xs"><!></p>'),he=v("<img>"),ge=v('<div class="icon ml_xs"><!></div>'),fe=v('<div class="project_card svelte-1ams28w"><header class="title svelte-1ams28w"><!> <!></header> <div class="flex"><div><!> <!></div> <!></div></div>');function _e(b,e){D(e,!0);const c={zzz:re,moss:ne,fuz:ie,gro:le,"webdevladder.net":ce},n=A(()=>c[e.project.name]);var d=fe(),h=t(d),w=t(h);T(w,()=>e.project.title,!1,!1);var P=s(w,2);_(P,()=>e.project.glyph,i=>{var o=R();q(()=>oe(o,e.project.glyph)),r(i,o)}),a(h);var k=s(h,2),g=t(k),j=t(g);_(j,()=>e.project.description,i=>{var o=pe(),l=t(o);T(l,()=>e.project.description,!1,!1),a(o),r(i,o)});var y=s(j,2);_(y,()=>e.project.subtitle,i=>{var o=ve(),l=t(o);T(l,()=>e.project.subtitle,!1,!1),a(o),r(i,o)}),a(g);var z=s(g,2);_(z,()=>e.project.logo,i=>{var o=ge();M(o,"min-width","var(--icon_size_xl)"),M(o,"min-height","var(--icon_size_xl)");var l=t(o);_(l,()=>I(n),f=>{se(f,{get data(){return I(n)}})},f=>{var x=Y(),S=K(x);_(S,()=>e.project.homepage,C=>{var m=he();const B=A(()=>Z(e.project.homepage,"/")??""),p=A(()=>$(e.project.logo,"/")??"");q(()=>u(m,"src",`${I(B)}${I(p)}`)),q(()=>{u(m,"alt",e.project.logo_alt??`icon for ${e.project.name}`),X(m,`${e.project.logo_classes??""} svelte-1ams28w`),u(m,"style",e.project.logo_style)}),r(C,m)},null,!0),r(f,x)}),a(o),r(i,o)}),a(k),a(d),r(b,d),E()}const ue=[{name:"blog",title:'<a href="/blog">blog</a>',subtitle:'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>'},{name:"github",title:'<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',description:"my free and open source software"},{description:'a YouTube channel and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',homepage:"https://www.webdevladder.net/",motto:"up ↗",logo:"logo.svg",logo_alt:"a spider web between two rungs of a ladder",glyph:"🪜",name:"webdevladder.net",repo:"webdevladder.net",title:'<a href="https://www.webdevladder.net/">webdevladder.net</a>',subtitle:'<a class="chip" href="https://www.youtube.com/@webdevladder">channel</a> <a class="chip" href="https://www.youtube.com/@webdevladder_vods">vods</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>'},{description:"CSS framework",homepage:"https://moss.ryanatkn.com/",motto:"magical organic stylesheets",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",glyph:"🌿",name:"moss",repo:"@ryanatkn/moss",title:'<a href="https://moss.ryanatkn.com/">Moss</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/moss">source</a>'},{description:'<a href="https://svelte.dev/">Svelte</a> UI library',homepage:"https://www.fuz.dev/",motto:"friendly user zystem",logo:"logo.svg",logo_alt:"a friendly brown spider facing you",glyph:"🧶",name:"fuz",repo:"@ryanatkn/fuz",title:'<a href="https://www.fuz.dev/">Fuz</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>'},{description:'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',homepage:"https://gro.ryanatkn.com/",motto:"generate, run, optimize",logo:"logo.svg",logo_alt:"a pixelated green oak acorn with a glint of sun",glyph:"🌰",name:"gro",repo:"@ryanatkn/gro",title:'<a href="https://github.com/ryanatkn/gro">Gro</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>'},{description:"utility belt for JS",homepage:"https://belt.ryanatkn.com/",motto:"ancient not extinct",logo:"logo.svg",logo_alt:"a green sauropod wearing a brown utility belt",glyph:"🦕",name:"belt",repo:"@ryanatkn/belt",title:'<a href="https://github.com/ryanatkn/belt">Belt</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/belt">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/belt">npm</a>'},{description:"hobby project for fun and learning",homepage:"https://www.cosmicplayground.org/",motto:"tools and toys for expanding minds",logo:"favicon.png",name:"cosmicplayground",repo:"@ryanatkn/cosmicplayground",title:'<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',logo_style:"border-radius: 50%"}];var be=v('<div class="linkpath svelte-snmxkx"><span class="row"><!> <div class="pl_md">ryanatkn.com</div></span></div>'),we=v(`<section class="width_md p_md svelte-snmxkx"><section class="box"><div class="panel shadow_inset_xs svelte-snmxkx"><header class="svelte-snmxkx"><div class="radius_50 shadow_md"><!></div> <blockquote class="bg shadow_xs ml_md mt_md svelte-snmxkx">welcome to the homepage<br> of Ryan Atkinson, he's<br> an independent web developer<br> making free and open source<br> software for the social web</blockquote></header> <p class="panel bg relative shadow_xs mt_md svelte-snmxkx">Hi, I'm building free and open source software and communicating about it. My main skill is
				making frontend web apps and I also do some backend and devtools programming. I enjoy trying
				to make powerful tools that are easy to use, and I'm extra interested in UIs, API design,
				and social systems.</p></div></section> <section class="box row flex_wrap gap_xl2"><!></section> <section class="box"><div class="panel box shadow_inset_xs svelte-snmxkx"><!></div></section> <section class="panel shadow_inset_xs svelte-snmxkx"><div class="box"><h2 class="mb_xl2">ongoing projects</h2></div> <div class="cards svelte-snmxkx"></div> <div class="box py_xl"><div class="panel p_lg bg shadow_inset_xs svelte-snmxkx"><div class="mb_lg text_align_center">all repos</div> <!></div></div></section></section> <section class="box"><!></section>`,1);function Te(b){var e=we();O(p=>{N.title="ryanatkn.com"});var c=K(e),n=t(c),d=t(n),h=t(d),w=t(h),P=t(w);ae(P),a(w),J(2),a(h);var k=s(h,2);M(k,"max-width","450px"),a(d),a(n);var g=s(n,2),j=t(g);ee(j,{}),a(g);var y=s(g,2),z=t(y),i=t(z);te(i),a(z),a(y);var o=s(y,2),l=s(t(o),2);Q(l,20,()=>ue,p=>p,(p,U)=>{_e(p,{get project(){return U}})}),a(l);var f=s(l,2),x=t(f),S=t(x);M(S,"font-size","var(--size_lg)");var C=s(S,2);me(C),a(x),a(f),a(o),a(c);var m=s(c,2),B=t(m);V(B,{children:(p,U)=>{var F=be(),H=t(F),L=t(H);W(L,{}),J(2),a(H),a(F),r(p,F)},$$slots:{default:!0}}),a(m),r(b,e)}export{Te as component};