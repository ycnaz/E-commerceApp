const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/facebook-DBwZ_KsC.js","assets/index-BahIuGGq.js","assets/index-D2aZSisN.css","assets/google-Bq8e-fRo.js","assets/linkedin-BvlxP8iF.js"])))=>i.map(i=>d[i]);
import{j as m,k as A,l as C,m as E,n as I,p as L,o as r,c as l,f as s,t as S,q as P,a as e,s as D,e as t,g as p,w as N,v as u,_ as d}from"./index-BahIuGGq.js";import{_}from"./AuthInput-r0MnTBhT.js";const T={class:"h-full flex flex-col justify-center items-center max-sm:py-5"},j={key:0,class:"text-rose-500"},O=e("h1",{class:"text-6xl mb-5 place-self-start"},"Sign in",-1),U={class:"flex flex-col"},z={type:"submit",class:"bg-rose-500 text-white w-full h-10 hover:bg-rose-400 focus:bg-rose-600 active:bg-rose-400 transition-all"},B={key:0},q={key:1,class:"loading loading-spinner text-black"},F=e("div",{class:"divider"},"OR",-1),J={__name:"SignIn",setup(G){const f=u(()=>d(()=>import("./facebook-DBwZ_KsC.js"),__vite__mapDeps([0,1,2]))),v=u(()=>d(()=>import("./google-Bq8e-fRo.js"),__vite__mapDeps([3,1,2]))),h=u(()=>d(()=>import("./linkedin-BvlxP8iF.js"),__vite__mapDeps([4,1,2]))),a=m(""),i=m(""),g=A(),o=C(),x=E(),y=I(),b=x.query.redirect||"/",w=()=>{g.warning("Not implemented")},V=async()=>{await o.signIn({username:a.value,password:i.value},a.value),o.isAuth&&k()},k=()=>{y.push(b)};return(M,n)=>{const R=L("RouterLink");return r(),l("div",T,[s(o).error?(r(),l("span",j,S(s(o).error),1)):P("",!0),e("section",null,[O,e("div",U,[e("form",{onSubmit:D(V,["prevent"]),class:"flex flex-col justify-center space-y-3"},[t(_,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),type:"text","input-id":"username","label-for":"username","label-text":"Username","min-length":"3","auto-complete":"username","max-length":"15"},null,8,["modelValue"]),t(_,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=c=>i.value=c),type:"password","input-id":"password","label-for":"password","label-text":"Password","min-length":"6","auto-complete":"password"},null,8,["modelValue"]),e("span",null,[p("Don't have an account? "),t(R,{to:{name:"register"},class:"underline text-rose-500"},{default:N(()=>[p("Register")]),_:1})]),e("button",z,[s(o).loading?(r(),l("span",q)):(r(),l("span",B,"Sign in"))])],32),F,e("div",{class:"flex gap-x-5 justify-center",onClick:w},[t(s(f),{class:"size-14 hover:scale-110 cursor-pointer transition-all"}),t(s(v),{class:"size-14 hover:scale-110 cursor-pointer transition-all"}),t(s(h),{class:"size-14 scale-110 hover:scale-125 cursor-pointer transition-all"})])])])])}}};export{J as default};
