import{e as u}from"./C0j2Cue3.js";const n=(t,s)=>t.flatMap(l=>(l.pull_requests??[]).filter(a=>!s||s(a,l)).map(a=>({repo:l,pull_request:a}))),o=(t,s)=>u(t,"/")+"pull/"+s.number;export{n as a,o as t};
