import{a as i,t as m,d as E,e as N}from"../chunks/disclose-version.DfSZ8NIK.js";import{a2 as r,c as t,r as a,a as O,p as Q,t as U,a5 as B,a6 as H,a1 as R,a4 as V,a3 as L}from"../chunks/runtime.BOwt3qjp.js";import{d as W}from"../chunks/svelte-head.DpQopEI3.js";import{e as X}from"../chunks/each.Bi7Re5Vk.js";import{s as F}from"../chunks/style.PwPRnE0L.js";import{B as Z}from"../chunks/Breadcrumb.DYjizRSm.js";import{F as $}from"../chunks/Favicon.BRDLwET3.js";import{a as _,d as ee,f as ae,e as te,b as se}from"../chunks/string.DS1sNDXL.js";import{b as J}from"../chunks/entry.D_0l2imU.js";import{P as oe}from"../chunks/Page_Links.CIyDBRZy.js";import{M as re,C as ne}from"../chunks/Me.B0VorugJ.js";import{s as ie}from"../chunks/render.BQDFJXFu.js";import{i as f}from"../chunks/props.ExMLJz1s.js";import{h as K}from"../chunks/html.D42Hu8gm.js";import{S as le,z as ce,m as de,f as me,a as pe,w as ve}from"../chunks/logos.BkYGNcHc.js";var he=m('<menu class="unstyled svelte-remv2f"><a class="chip">tree</a> <a class="chip">table</a> <a class="chip">modules</a></menu>');function ge(u){var e=he(),c=t(e);_(c,"href",`${J??""}/tree`);var l=r(c,2);_(l,"href",`${J??""}/table`);var d=r(l,2);_(d,"href",`${J??""}/modules`),a(e),i(u,e)}var fe=m("<p><!></p>"),_e=m('<p class="flex flex_wrap gap_xs"><!></p>'),ue=m("<img>"),be=m('<div class="icon ml_xs"><!></div>'),we=m('<div class="project_card svelte-1ams28w"><header class="title svelte-1ams28w"><!> <!></header> <div class="flex"><div><!> <!></div> <!></div></div>');function ye(u,e){O(e,!0);const c={zzz:ce,moss:de,fuz:me,gro:pe,"webdevladder.net":ve},l=H(()=>c[e.project.name]);var d=we(),p=t(d),b=t(p);K(b,()=>e.project.title,!1,!1);var q=r(b,2);{var A=o=>{var s=E();U(()=>ie(s,e.project.glyph)),i(o,s)};f(q,o=>{e.project.glyph&&o(A)})}a(p);var h=r(p,2),w=t(h),g=t(w);{var S=o=>{var s=fe(),v=t(s);K(v,()=>e.project.description,!1,!1),a(s),i(o,s)};f(g,o=>{e.project.description&&o(S)})}var G=r(g,2);{var I=o=>{var s=_e(),v=t(s);K(v,()=>e.project.subtitle,!1,!1),a(s),i(o,s)};f(G,o=>{e.project.subtitle&&o(I)})}a(w);var y=r(w,2);{var M=o=>{var s=be();F(s,"min-width","var(--icon_size_xl)"),F(s,"min-height","var(--icon_size_xl)");var v=t(s);{var P=n=>{le(n,{get data(){return B(l)}})},T=n=>{var x=N(),k=R(x);{var C=j=>{var z=ue();const Y=H(()=>te(e.project.homepage,"/")??""),D=H(()=>se(e.project.logo,"/")??"");U(()=>_(z,"src",`${B(Y)}${B(D)}`)),U(()=>{_(z,"alt",e.project.logo_alt??`icon for ${e.project.name}`),ee(z,ae(e.project.logo_classes),"svelte-1ams28w"),_(z,"style",e.project.logo_style)}),i(j,z)};f(k,j=>{e.project.homepage&&j(C)},!0)}i(n,x)};f(v,n=>{B(l)?n(P):n(T,!1)})}a(s),i(o,s)};f(y,o=>{e.project.logo&&o(M)})}a(h),a(d),i(u,d),Q()}const xe=[{name:"blog",title:'<a href="/blog">blog</a>',subtitle:'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>'},{name:"github",title:'<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',description:"my free and open source software"},{description:'a YouTube channel and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',homepage:"https://www.webdevladder.net/",motto:"up ↗",logo:"logo.svg",logo_alt:"a spider web between two rungs of a ladder",glyph:"🪜",name:"webdevladder.net",repo:"webdevladder.net",title:'<a href="https://www.webdevladder.net/">webdevladder.net</a>',subtitle:'<a class="chip" href="https://www.youtube.com/@webdevladder">channel</a> <a class="chip" href="https://www.youtube.com/@webdevladder_vods">vods</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>'},{description:"CSS framework and design system",homepage:"https://moss.ryanatkn.com/",motto:"magical organic stylesheets",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",glyph:"🌿",name:"moss",repo:"@ryanatkn/moss",title:'<a href="https://moss.ryanatkn.com/">Moss</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/moss">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/moss">npm</a>'},{description:'<a href="https://svelte.dev/">Svelte</a> UI library',homepage:"https://www.fuz.dev/",motto:"friendly user zystem",logo:"logo.svg",logo_alt:"a friendly brown spider facing you",glyph:"🧶",name:"fuz",repo:"@ryanatkn/fuz",title:'<a href="https://www.fuz.dev/">Fuz</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>'},{description:'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',homepage:"https://gro.ryanatkn.com/",motto:"generate, run, optimize",logo:"logo.svg",logo_alt:"a pixelated green oak acorn with a glint of sun",glyph:"🌰",name:"gro",repo:"@ryanatkn/gro",title:'<a href="https://github.com/ryanatkn/gro">Gro</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>'},{description:"utility belt for JS",homepage:"https://belt.ryanatkn.com/",motto:"ancient not extinct",logo:"logo.svg",logo_alt:"a green sauropod wearing a brown utility belt",glyph:"🦕",name:"belt",repo:"@ryanatkn/belt",title:'<a href="https://github.com/ryanatkn/belt">Belt</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/belt">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/belt">npm</a>'},{description:"hobby project for fun and learning",homepage:"https://www.cosmicplayground.org/",motto:"tools and toys for expanding minds",logo:"favicon.png",name:"cosmicplayground",repo:"@ryanatkn/cosmicplayground",title:'<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',logo_style:"border-radius: 50%"}];var ke=m('<div class="linkpath svelte-snmxkx"><span class="row"><!> <div class="pl_md">ryanatkn.com</div></span></div>'),je=m(`<section class="width_md p_md svelte-snmxkx"><section class="box"><div class="panel shadow_inset_xs svelte-snmxkx"><header class="svelte-snmxkx"><div class="radius_50 shadow_md"><!></div> <blockquote class="bg shadow_xs ml_md mt_md svelte-snmxkx">welcome to the homepage<br> of Ryan Atkinson, he's<br> an independent web developer<br> making free and open source<br> software for the social web</blockquote></header> <p class="panel bg relative shadow_xs mt_md svelte-snmxkx">Hi, I'm building free and open source software and communicating about it. My main skill is
				making frontend web apps and I also do some backend and devtools programming. I enjoy trying
				to make powerful tools that are easy to use, and I'm extra interested in UIs, API design,
				and social systems.</p></div></section> <section class="box row flex_wrap gap_xl2"><!></section> <section class="box"><div class="panel box shadow_inset_xs svelte-snmxkx"><!></div></section> <section class="panel shadow_inset_xs svelte-snmxkx"><div class="box"><h2 class="mb_xl2">ongoing projects</h2></div> <div class="cards svelte-snmxkx"></div> <div class="box py_xl"><div class="panel p_lg bg shadow_inset_xs svelte-snmxkx"><div class="mb_lg text_align_center">all repos</div> <!></div></div></section></section> <section class="box"><!></section>`,1);function Ke(u){var e=je();W(n=>{V.title="ryanatkn.com"});var c=R(e),l=t(c),d=t(l),p=t(d),b=t(p),q=t(b);re(q),a(b),L(2),a(p);var A=r(p,2);F(A,"max-width","450px"),a(d),a(l);var h=r(l,2),w=t(h);oe(w,{}),a(h);var g=r(h,2),S=t(g),G=t(S);ne(G),a(S),a(g);var I=r(g,2),y=r(t(I),2);X(y,20,()=>xe,n=>n,(n,x)=>{ye(n,{get project(){return x}})}),a(y);var M=r(y,2),o=t(M),s=t(o);F(s,"font-size","var(--size_lg)");var v=r(s,2);ge(v),a(o),a(M),a(I),a(c);var P=r(c,2),T=t(P);Z(T,{children:(n,x)=>{var k=ke(),C=t(k),j=t(C);$(j,{}),L(2),a(C),a(k),i(n,k)},$$slots:{default:!0}}),a(P),i(u,e)}export{Ke as component};