const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/facebook-DLqYStSA.js","assets/index-DESkFLJa.js","assets/index-DLqRWnsq.css","assets/google-C190gVDk.js","assets/linkedin-xZudbSc_.js"])))=>i.map(i=>d[i]);
import{j as m,k as A,l as C,c as r,f as s,t as E,m as I,a as e,n as L,e as t,g as p,w as S,p as P,q as D,o as l,s as u,v as N,_ as d}from"./index-DESkFLJa.js";import{_}from"./AuthInput-Cz2HBkdH.js";const T={class:"h-full flex flex-col justify-center items-center py-32 max-sm:py-5"},j={key:0,class:"text-rose-500"},O={class:"max-[415px]:w-full"},U=e("h1",{class:"text-6xl mb-5 place-self-start"},"Sign in",-1),z={class:"flex flex-col"},B={type:"submit",class:"bg-rose-500 text-white w-full h-10 hover:bg-rose-400 focus:bg-rose-600 active:bg-rose-400 max-[415px]:w-11/12 transition-all"},q={key:0},F={key:1,class:"loading loading-spinner text-black"},G=e("div",{class:"divider"},"OR",-1),K={__name:"SignIn",setup(M){const f=u(()=>d(()=>import("./facebook-DLqYStSA.js"),__vite__mapDeps([0,1,2]))),x=u(()=>d(()=>import("./google-C190gVDk.js"),__vite__mapDeps([3,1,2]))),h=u(()=>d(()=>import("./linkedin-xZudbSc_.js"),__vite__mapDeps([4,1,2]))),a=m(""),i=m(""),v=A(),o=C(),g=P(),w=N(),y=g.query.redirect||"/",b=()=>{v.warning("Not implemented")},V=async()=>{await o.signIn({username:a.value,password:i.value},a.value),o.isAuth&&k()},k=()=>{w.push(y)};return($,n)=>{const R=D("RouterLink");return l(),r("div",T,[s(o).error?(l(),r("span",j,E(s(o).error),1)):I("",!0),e("section",O,[U,e("div",z,[e("form",{onSubmit:L(V,["prevent"]),class:"flex flex-col justify-center max-[415px]:items-center space-y-3"},[t(_,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),type:"text","input-id":"username","label-for":"username","label-text":"Username","min-length":"3","auto-complete":"username","max-length":"15"},null,8,["modelValue"]),t(_,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=c=>i.value=c),type:"password","input-id":"password","label-for":"password","label-text":"Password","min-length":"6","auto-complete":"password"},null,8,["modelValue"]),e("span",null,[p("Don't have an account? "),t(R,{to:{name:"register"},class:"underline text-rose-500"},{default:S(()=>[p("Register")]),_:1})]),e("button",B,[s(o).loading?(l(),r("span",F)):(l(),r("span",q,"Sign in"))])],32),G,e("div",{class:"flex gap-x-10 justify-center",onClick:b},[t(s(f),{class:"size-14 hover:scale-110 cursor-pointer transition-all"}),t(s(x),{class:"size-14 hover:scale-110 cursor-pointer transition-all"}),t(s(h),{class:"size-14 scale-110 hover:scale-125 cursor-pointer transition-all"})])])])])}}};export{K as default};
