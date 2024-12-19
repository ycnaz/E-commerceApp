import{C as m,l as p,L as _,j as v,b as x,o as b,c as w,a as t,t as a,B as y,z as k,D as S,g as P,f as i,v as C}from"./index-C5wHkDfd.js";const I={class:"w-auto min-h-96 bg-gray-100 p-5 flex flex-col items-center rounded-3xl shadow-lg text-black"},B={class:"font-normal text-center line-clamp-2 mb-5 tracking-wider"},z=["src"],D={class:"loading loading-spinner text-rose-500"},j={class:"text-2xl font-light mt-auto bg-rose-500 w-48 shadow-lg text-center text-white absolute bottom-0"},A={class:"tracking-wide"},L=["disabled"],E={__name:"ItemCard",props:{item:{type:Object,required:!0},disabled:{type:Boolean}},setup(d){const e=d,s=m(),r=p(),g=_(),n=C(),f=u=>Math.round(u*s.latest.rates[s.userPref]),o=v(!0),h=()=>{o.value=!1},c=x(()=>!!(r.isAuth&&r.userId===e.item.userId)),l=()=>{c.value?n.push({name:"sell",params:{id:e.item.id}}):r.isAuth?g.setProduct(e.item):n.push({name:"sign-in"})};return(u,M)=>(b(),w("li",I,[t("h1",B,a(e.item.title.toUpperCase()),1),t("div",{onClick:l,class:"size-64 bg-white rounded-full flex justify-center items-center shadow-lg mt-auto relative cursor-pointer"},[t("img",{class:y([{"opacity-0 absolute":o.value,"opacity-100":!o.value},"size-44 object-contain"]),onLoad:h,loading:"lazy",alt:"Product Image",src:e.item.image},null,42,z),k(t("span",D,null,512),[[S,o.value]]),t("strong",j,[P(a(i(s).userPref?f(e.item.price):Math.round(e.item.price))+" / ",1),t("span",A,a(i(s).userPref?i(s).userPref:"USD"),1)])]),t("button",{onClick:l,disabled:e.disabled,class:"bg-gray-800 text-white w-24 h-10 rounded-3xl font-medium mt-5 shadow-lg tracking-widest hover:ring hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-200 focus:ring focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-200 active:ring active:ring-gray-800 active:ring-offset-2 active:ring-offset-gray-200 transition-all"},a(c.value?"EDIT":"BUY"),9,L)]))}};export{E as _};
