import{a as o,t as h,e as H,d as S}from"./disclose-version.CgtHxujX.js";import{t as u,p as w,a0 as k,s as p,f as G,a as y,c as n,r as v,a1 as L}from"./runtime.DnzaEnqM.js";import{s as j}from"./render.C1MjUtjK.js";import{p as C,i as P}from"./props.WzuS_LKu.js";import{s as g}from"./snippet.DCHdvCb-.js";import{c as D,b as z,a as B,s as F}from"./string.b6PdxMny.js";import{S as E,g as I}from"./logos.C_RuzqQf.js";import{B as q}from"./Breadcrumb.DZx5B_f1.js";import{r as J}from"./repo.Dv_S18ZA.js";const K=d=>D(z(z(d,"https://"),"www."),"/");var M=h('<div class="root_url svelte-cs8o0f"><a> </a></div>'),N=h('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function O(d,a){y(a,!0);const r=C(a,"root_url",3,null);var e=N(),c=n(e);g(c,()=>a.children??k);var f=p(c,2),m=n(f);g(m,()=>a.logo_header??k);var t=p(m,2),i=n(t);P(i,()=>a.logo,s=>{var l=H(),_=G(l);g(_,()=>a.logo),o(s,l)},s=>{E(s,{data:I,size:"var(--icon_size_lg)"})}),v(t);var b=p(t,2);g(b,()=>a.logo_footer??k),v(f);var x=p(f,2);P(x,r,s=>{var l=M(),_=n(l),A=n(_,!0);u(()=>j(A,K(r()))),v(_),v(l),u(()=>B(_,"href",r())),o(s,l)}),v(e),u(()=>B(t,"href",a.pkg.repo_url)),o(d,e),w()}var Q=h('<nav class="mb_xl5"><!></nav>'),R=h('<section class="box mb_xl7"><!></section>');function ea(d,a){y(a,!0);const{repo:r}=J.get();var e=R(),c=n(e);O(c,{pkg:r,children:(f,m)=>{var t=Q(),i=n(t);q(i,{children:(b,x)=>{L();var s=S();u(()=>j(s,r.package_json.glyph)),o(b,s)},$$slots:{default:!0}}),v(t),o(f,t)},$$slots:{default:!0}}),v(e),o(d,e),w()}var T=h("<nav><!></nav>"),U=h("<header><!> <!></header>");function oa(d,a){y(a,!0);var r=U();let e;var c=n(r);g(c,()=>a.children??k);var f=p(c,2);P(f,()=>a.nav,m=>{var t=H(),i=G(t);g(i,()=>a.nav),o(m,t)},m=>{var t=T();let i;var b=n(t);q(b,{children:(x,s)=>{L();var l=S();u(()=>{var _;return j(l,(_=a.pkg.package_json)==null?void 0:_.glyph)}),o(x,l)},$$slots:{default:!0}}),v(t),u(()=>i=F(t,i,{...a.nav_attrs},"svelte-1flr0dx")),o(m,t)}),v(r),u(()=>e=F(r,e,{...a.attrs},"svelte-1flr0dx")),o(d,r),w()}export{oa as P,ea as a,K as f};