import{I as r,o as t,c as o,a as s,t as c,e as n,w as i,g as d,f as u,R as f,F as m,r as x,h as _,m as p,J as h,K as g}from"./index-DESkFLJa.js";import{_ as y}from"./ItemCard-Bolv0jUo.js";const w=a=>(h("data-v-59a1405d"),a=a(),g(),a),k={class:"h-[500px] max-xl:w-full"},v={class:"w-full h-full flex flex-col items-center"},b={class:"flex flex-col gap-y-5 min-w-[74%] max-w-full h-full"},I={class:"flex max-xl:px-5"},S={class:"self-start text-3xl font-medium min-w-max max-[350px]:text-2xl"},B={class:"horizontal-scroll-container flex justify-center items-center h-full w-full overflow-x-auto scroll-smooth overflow-y-hidden scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500"},N={key:0,class:"flex gap-x-5 min-w-full pb-4 max-xl:px-5"},q={key:1,class:"loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"},L={key:2,class:"w-full h-full bg-rose-500 flex justify-center items-center"},V=w(()=>s("span",null,"No items returned by API.",-1)),j=[V],z={__name:"HomeLister",props:{loading:{type:Boolean,required:!0},data:{type:Object,required:!0},title:{type:String,required:!0},category:{required:!0}},setup(a){const e=a;return(C,F)=>(t(),o("div",k,[s("figure",v,[s("div",b,[s("div",I,[s("figcaption",S,c(e.title),1),n(u(f),{to:{name:"products",params:{category:e.category}},class:"underline ml-auto place-self-end cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none min-w-max"},{default:i(()=>[d("See all")]),_:1},8,["to"])]),s("div",B,[!e.loading&&e.data.length!=0?(t(),o("ul",N,[(t(!0),o(m,null,x(e.data.slice(0,4),l=>(t(),_(y,{key:l.id,class:"w-min flex-shrink-0",item:l},null,8,["item"]))),128))])):e.loading?(t(),o("span",q)):e.data.length==0?(t(),o("div",L,j)):p("",!0)])])])]))}},A=r(z,[["__scopeId","data-v-59a1405d"]]);export{A as default};
