import{_ as d,o as a,c as _,a as n,e as b,t as l,i as p,d as c,r as u,l as f}from"./index-3bc2bbe6.js";const h={},m={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},w=n("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"},null,-1),g=[w];function S(o,e){return a(),_("svg",m,g)}const i=d(h,[["render",S]]);const k={class:"hero-area"},x=["onclick"],y={__name:"SectionHero",props:{title:String,description:String,button:Object,scrollRef:Object},setup(o){const e=o,t=r=>{r.scrollIntoView({block:"end",behavior:"smooth"})};return(r,s)=>{const v=b("UiScrollDown");return a(),_("section",k,[n("article",null,[n("h2",null,l(e.title),1),n("p",null,l(e.description),1),e.button?(a(),_("button",{key:0,class:"button__primary",onclick:e.button.action},l(e.button.title),9,x)):p("",!0)]),n("button",{class:"scroll-down",onClick:s[0]||(s[0]=I=>t(o.scrollRef))},[c(i,{class:"chevron"}),c(i,{class:"chevron"}),c(i,{class:"chevron"})]),c(v,{"scroll-ref":o.scrollRef},null,8,["scroll-ref"])])}}},D=d(y,[["__scopeId","data-v-e793a1dc"]]),B=o=>{const e=u(!1),t=u(!1);return f(()=>{new IntersectionObserver(s=>{e.value=s[0].isIntersecting,t.value||(t.value=s[0].isIntersecting)}).observe(o.value)}),{isVisible:e,isTriggered:t}};export{D as S,B as u};
