import{a as o,t as z,e as k,d as A}from"./DrshB_96.js";import{t as C,p as R,a as S,a0 as T,c as g,$ as y,r as u,z as e,a3 as f}from"./TY4j7H1c.js";import{s as U}from"./C5Ar4Uh5.js";import{i as B,s as V,a as W}from"./CZFOncyl.js";import{e as X,i as Y}from"./BFn8etX1.js";import{s as D}from"./EzIicBhK.js";import{b as Z,a as E,t as F,e as $}from"./JJbrr_Vi.js";import{b as aa}from"./CElM1Sg6.js";import{p as ea}from"./Bc58Lxxc.js";const ta=_=>_.split("/").filter(a=>a&&a!=="."&&a!==".."),sa=_=>{const a=[],p=ta(_);p.length&&a.push({type:"separator",path:"/"});let m="";for(let l=0;l<p.length;l++){const n=p[l];m+="/"+n,a.push({type:"piece",name:n,path:m}),l!==p.length-1&&a.push({type:"separator",path:m})}return a};var ra=z('<a class="svelte-c9k2g"> </a>'),oa=z('<span class="separator svelte-c9k2g"><!></span>'),na=z('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function da(_,a){S(a,!0);const[p,m]=V(),l=()=>W(ea,"$page",p),n=f(()=>a.base_path??aa),j=f(()=>a.path??Z(l().url.pathname,e(n))),q=f(()=>a.selected_path===null?null:a.selected_path??e(j)),G=f(()=>sa(e(j))),w=f(()=>$(e(n),"/"));var b=na(),v=g(b),H=g(v);{var I=r=>{var t=k(),h=y(t);D(h,()=>a.children),o(r,t)},J=r=>{var t=A("•");o(r,t)};B(H,r=>{a.children?r(I):r(J,!1)})}u(v);var K=T(v);X(K,17,()=>e(G),Y,(r,t)=>{var h=k(),L=y(h);{var M=c=>{var s=ra(),x=g(s,!0);u(s),C(()=>{E(s,"href",e(n)+e(t).path),F(s,"selected",e(t).path===e(q)),U(x,e(t).name)}),o(c,s)},N=c=>{var s=oa(),x=g(s);{var O=i=>{var d=k(),Q=y(d);D(Q,()=>a.separator),o(i,d)},P=i=>{var d=A("/");o(i,d)};B(x,i=>{a.separator?i(O):i(P,!1)})}u(s),o(c,s)};B(L,c=>{e(t).type==="piece"?c(M):c(N,!1)})}o(r,h)}),u(b),C(()=>{E(v,"href",e(w)),F(v,"selected",e(w)===e(n)+e(q))}),o(_,b),R(),m()}export{da as B};
