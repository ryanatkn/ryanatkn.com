import{b as se,d as J,a as _,t as D,e as A}from"./D1jBV1eY.js";import{h as re,a0 as ne,k as oe,i as h,j as M,m as W,F as ie,D as le,x as fe,w as ce,y as de,C as V,v as q,J as ve,an as _e,p as Q,a2 as j,a as U,a6 as l,z as e,t as B,a3 as N,c as H,r as I,a4 as L}from"./DtwF0843.js";import{p as ge,s as X,i as x,a as Y}from"./DEGd_-ZI.js";import{b as R}from"./9Y_IC8Ap.js";import{p as Z}from"./XXvEztOd.js";import{a as K,s as me}from"./Dp_vtS-5.js";import{s as O}from"./PSEoomA6.js";import{e as ue}from"./62Ts3MCk.js";import{s as he,C as pe}from"./OPS4ugqv.js";function be($,r,C,p,k,g){let n=h;h&&M();var o,m,t=null;h&&W.nodeType===1&&(t=W,M());var b=h?W:$,f;re(()=>{const s=r()||null;var a=s==="svg"?_e:null;s!==o&&(f&&(s===null?ie(f,()=>{f=null,m=null}):s===m?le(f):(fe(f),K(!1))),s&&s!==m&&(f=oe(()=>{if(t=h?t:a?document.createElementNS(a,s):document.createElement(s),se(t,t),p){h&&ue(s)&&t.append(document.createComment(""));var i=h?ce(t):t.appendChild(de());h&&(i===null?V(!1):q(i)),p(t,i)}ve.nodes_end=t,b.before(t)})),o=s,o&&(m=o),K(!0))},ne),n&&(V(!0),q(b))}var xe=D('<div class="icon svelte-2rjm44"><!></div>'),$e=D('<!> <div class="content svelte-2rjm44"><!></div> <!>',1);function z($,r){Q(r,!0);const[C,p]=X(),k=()=>Y(Z,"$page",C),g=T=>{var y=xe(),E=H(y);{var P=u=>{var d=A();B(()=>me(d,e(c))),_(u,d)},S=u=>{var d=J(),F=j(d);O(F,()=>e(c)),_(u,d)};x(E,u=>{typeof e(c)=="string"?u(P):u(S,!1)})}I(y),_(T,y)},n=ge(r,"align",3,"left"),o=l(()=>!!r.href),m=l(()=>e(o)&&k().url.pathname===r.href),t=l(()=>r.tag??(e(o)?"a":"div")),b=l(()=>e(o)?{href:r.href}:void 0),f=l(()=>n()==="left"),s=l(()=>n()==="right"),a=l(()=>n()==="above"),i=l(()=>n()==="below"),w=l(()=>e(o)?"🔗":"🪧"),c=l(()=>r.icon??e(w));var G=J(),ee=j(G);be(ee,()=>e(t),!1,(T,y)=>{let E;B(v=>E=he(T,E,{class:"card",...r.attrs,...e(b),[pe]:v},"svelte-2rjm44"),[()=>({link:e(o),selected:e(m),left:e(f),right:e(s),above:e(a),below:e(i)})]);var P=$e(),S=j(P);{var u=v=>{g(v)};x(S,v=>{(n()==="left"||n()==="above")&&v(u)})}var d=N(S,2),F=H(d);O(F,()=>r.children),I(d);var te=N(d,2);{var ae=v=>{g(v)};x(te,v=>{(n()==="right"||n()==="below")&&v(ae)})}_(y,P)}),_($,G),U(),p()}var ye=D("<!> <!> <!>",1);function Te($,r){Q(r,!0);const[C,p]=X(),k=()=>Y(Z,"$page",C),g=l(()=>k().url.pathname);var n=ye(),o=j(n);{var m=a=>{z(a,{href:`${R??""}/about`,icon:"🪶",align:"right",children:(i,w)=>{L();var c=A("about");_(i,c)},$$slots:{default:!0}})};x(o,a=>{e(g).endsWith("/about")||a(m)})}var t=N(o,2);{var b=a=>{z(a,{href:`${R??""}/blog`,icon:"🪧",align:"right",children:(i,w)=>{L();var c=A("blog");_(i,c)},$$slots:{default:!0}})};x(t,a=>{!e(g).endsWith("/blog")&&!e(g).includes("/blog/")&&a(b)})}var f=N(t,2);{var s=a=>{z(a,{href:`${R??""}/funding`,icon:"🐚",align:"right",children:(i,w)=>{L();var c=A("funding");_(i,c)},$$slots:{default:!0}})};x(f,a=>{e(g).endsWith("/funding")||a(s)})}_($,n),U(),p()}export{z as C,Te as P};
