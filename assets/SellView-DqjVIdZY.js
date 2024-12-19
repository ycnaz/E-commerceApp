import{G as q,l as L,u as T,j as a,b as _,d as D,c as g,a as t,z as d,E as b,H as E,F as A,r as B,f as R,t as h,n as M,h as j,m as F,o as p,v as H}from"./index-C5wHkDfd.js";import{_ as N}from"./ItemCard-DcG38pw6.js";const W={class:"h-full flex gap-x-20 justify-center items-center max-xl:flex-col max-xl:pb-5"},z=t("h2",{class:"text-6xl font-light border-b border-b-black w-full tracking-wider"},"SELL",-1),G={class:"flex gap-x-10 max-md:flex-col"},O={class:"flex flex-col"},$=t("label",{for:"title",class:"tracking-wide"},"Title",-1),J=t("label",{for:"price",class:"tracking-wide"},"Price",-1),K=t("label",{for:"category",class:"tracking-wide"},"Category",-1),Q=t("option",{disabled:"",value:""},"Choose...",-1),X=["value"],Y={class:"flex flex-col"},Z=t("label",{for:"description",class:"tracking-wide"},"Description",-1),ee=t("label",{for:"image",class:"tracking-wide"},"Image",-1),te=["required"],le={class:"bg-rose-500 h-10 text-white tracking-wider text-lg hover:bg-rose-400 focus:bg-rose-400 active:bg-rose-600 transition-all"},oe={__name:"SellView",props:{id:{required:!1}},setup(w){const m=w,y=q(),k=L(),v=T(),P=H(),i=a(""),r=a(0),u=a(""),c=a(""),I=a(null),f=a(""),s=a(!1),o=a(!1),S=n=>{const e=n.target.files[0];e&&(I.value=e,f.value=URL.createObjectURL(e))},x=_(()=>({title:i.value,price:r.value,category:u.value,description:c.value,image:f.value})),U=()=>{o.value?(s.value?v.editAnItem(m.id,x.value):v.addToItems(x.value),P.push({name:"products"})):o.value=!0},C=n=>{const e=v.items.find(l=>l.id==n);e&&k.userId===e.userId&&(s.value=!0,i.value=e.title,r.value=e.price,u.value=e.category,c.value=e.description,f.value=e.image)},V=_(()=>!s.value&&!o.value?"PREVIEW":s.value&&!o.value?"UPDATE":"PUBLISH");return D(()=>{m.id&&C(m.id)}),(n,e)=>(p(),g("div",W,[t("form",{onSubmit:M(U,["prevent"]),class:"flex flex-col text-black gap-y-5 py-5 max-[430px]:w-full max-[430px]:px-5"},[z,t("div",G,[t("div",O,[$,d(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),class:"w-96 max-[430px]:w-full",type:"text",id:"title","aria-label":"Product Title",required:""},null,512),[[b,i.value]]),J,d(t("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l),class:"w-96 max-[430px]:w-full",type:"number",min:"1",max:"100000000",step:"0.01",id:"price","aria-label":"Product Price",required:""},null,512),[[b,r.value]]),K,d(t("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),class:"w-96 max-[430px]:w-full",id:"category","aria-label":"Product Category",required:""},[Q,(p(!0),g(A,null,B(R(y).items,l=>(p(),g("option",{key:l,value:l},h(l.charAt(0).toUpperCase()+l.slice(1)),9,X))),128))],512),[[E,u.value]])]),t("div",Y,[Z,d(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),class:"min-h-10 max-h-[115px]",id:"description","aria-label":"Product Description",maxlength:"500",required:""},null,512),[[b,c.value]]),ee,t("input",{onChange:S,type:"file",id:"image",accept:"image/*","aria-label":"Product Image",required:!s.value},null,40,te)])]),t("button",le,h(V.value),1)],32),o.value?(p(),j(N,{key:0,item:x.value,disabled:!0},null,8,["item"])):F("",!0)]))}};export{oe as default};
