import{e as A,a as s,t as f,d as O}from"./disclose-version.ogjX_BdU.js";import{a as P,f as u,p as Q,c as v,r as _,t as b,a3 as r,s as R,a4 as l}from"./runtime.BmNfUflc.js";import{s as S}from"./render.NW5OxB8J.js";import{p as T,i as g}from"./props.h-5B_xxk.js";import{s as p}from"./snippet.BiudZWT_.js";import{s as q}from"./string.CxpDDYC-.js";import{s as z}from"./style.PwPRnE0L.js";const B={inform:{color:"var(--text_color_3)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var U=f('<div class="icon svelte-tarwjh"><!></div>'),V=f('<!> <div class="content svelte-tarwjh"><!></div>',1),W=f("<button><!></button>"),X=f("<div><!></div>");function rt(C,t){P(t,!0);const h=o=>{var a=V(),e=u(a);{var n=m=>{var d=U(),K=v(d);{var L=i=>{var c=O();b(()=>S(c,r(k))),s(i,c)},M=i=>{var c=A(),N=u(c);p(N,()=>t.icon,()=>r(k)),s(i,c)};g(K,i=>{!t.icon||typeof t.icon=="string"?i(L):i(M,!1)})}_(d),s(m,d)};g(e,m=>{t.icon!==null&&m(n)})}var y=R(e,2),J=v(y);p(J,()=>t.children),_(y),s(o,a)},D=T(t,"status",3,"inform"),x=l(()=>B[D()]),E=l(()=>r(x).color),F=l(()=>r(x).icon),j=l(()=>t.color??r(E)),k=l(()=>typeof t.icon=="string"?t.icon:r(F)??B.inform.icon);var w=A(),G=u(w);{var H=o=>{var a=W();let e;var n=v(a);h(n),_(a),b(()=>{e=q(a,e,{class:"message",type:"button",onclick:t.onclick,disabled:t.disabled,...t.attrs},"svelte-tarwjh"),z(a,"--text_color",r(j))}),s(o,a)},I=o=>{var a=X();let e;var n=v(a);h(n),_(a),b(()=>{e=q(a,e,{role:"alert",class:"message panel",...t.attrs},"svelte-tarwjh"),z(a,"--text_color",r(j))}),s(o,a)};g(G,o=>{t.onclick?o(H):o(I,!1)})}s(C,w),Q()}export{rt as A};
