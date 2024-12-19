import{C as q,k as I,b as w,j as g,o as i,c as r,a as e,F as k,r as P,B as j,z as C,D as z,t as s,m as v,u as A,l as F,d as L,e as E,E as D}from"./index-C5wHkDfd.js";const N={class:"flex flex-col grow"},V=e("h1",{class:"text-4xl mb-3 tracking-wider font-light"},"SHOPPING CART",-1),B={class:"table table-pin-rows rounded-none bg-gray-200"},O=e("thead",{class:"max-md:hidden"},[e("tr",{class:"border-bottom border-black bg-gray-200"},[e("th",null,"Products"),e("th",null,"Price"),e("th",null,"Quantity"),e("th",null,"Total Price")])],-1),Q={key:0,class:"max-md:hidden"},R={class:"p-5"},H={class:"flex gap-x-5 items-center"},M=["onClick"],Y={class:"flex justify-center items-center bg-white size-40 shrink-0 rounded-lg"},G=["src"],J={class:"loading loading-spinner text-rose-500"},K={class:"flex flex-col justify-center"},W={class:"font-semibold underline min-w-max"},X={class:"max-w-96 line-clamp-3 text-xl max-xl:text-sm"},Z={class:"font-bold"},ee={class:"font-bold"},te={class:"flex gap-x-5 items-center"},se=["onClick"],oe=e("span",{class:"text-2xl"},"-",-1),ne=[oe],le=["onClick"],ce=e("span",{class:"text-2xl"},"+",-1),ae=[ce],ie={class:"font-bold"},re={key:1,class:"hidden max-md:table-row-group"},de={class:"border-black"},ue={class:"p-5 max-md:first:w-full"},_e={class:"flex gap-x-5 items-center"},he=["onClick"],xe={class:"flex gap-x-5 items-center max-sm:flex-col max-sm:items-start"},me={class:"flex justify-center items-center bg-white size-40 shrink-0 rounded-lg max-sm:size-36"},fe=["src"],pe={class:"loading loading-spinner text-rose-500"},ge={class:"flex flex-col justify-center"},ve={class:"font-semibold underline min-w-max"},be={class:"max-w-96 line-clamp-3 text-xl max-xl:text-sm"},ye={class:"border-black max-[415px]:hidden"},ke=e("th",{class:"w-1/4 bg-gray-200"},"Price",-1),we={class:"font-bold text-center"},Ce=e("tr",{class:"bg-gray-200 border-t-black min-[415px]:hidden text-center"},[e("th",null,"Price")],-1),$e={class:"font-bold text-center min-[415px]:hidden border-b-black max-[415px]:h-9"},Pe={class:"border-black max-[415px]:hidden"},je=e("th",{class:"w-1/4 bg-gray-200"},"Quantity",-1),ze={class:"font-bold"},qe={class:"flex gap-x-5 items-center"},Ie=["onClick"],Se=e("span",{class:"text-2xl"},"-",-1),Te=[Se],Ue=["onClick"],Ae=e("span",{class:"text-2xl"},"+",-1),Fe=[Ae],Le=e("tr",{class:"bg-gray-200 border-t-black min-[415px]:hidden text-center"},[e("th",null,"Quantity")],-1),Ee={class:"font-bold min-[415px]:hidden border-b-black max-[415px]:h-9"},De={class:"flex gap-x-5 items-center justify-center"},Ne=["onClick"],Ve=e("span",{class:"text-2xl"},"-",-1),Be=[Ve],Oe=["onClick"],Qe=e("span",{class:"text-2xl"},"+",-1),Re=[Qe],He={class:"border-black max-[415px]:hidden"},Me=e("th",{class:"w-1/4 bg-gray-200"},"Total Price",-1),Ye={class:"font-bold text-center"},Ge=e("tr",{class:"bg-gray-200 border-t-black min-[415px]:hidden text-center"},[e("th",null,"Total Price")],-1),Je={class:"font-bold text-center min-[415px]:hidden border-b-black max-[415px]:h-9"},Ke={key:0,class:"flex justify-center items-center grow"},We=e("span",{class:"loading loading-spinner text-rose-500 size-32"},null,-1),Xe=[We],Ze={__name:"ProductTable",props:{products:{type:Object,required:!0}},setup($){const d=q(),b=I(),f=$,a=l=>d.userPref?`${(l*d.latest.rates[d.userPref]).toFixed(2)}/${d.userPref}`:`${l.toFixed(2)}/USD`,n=w(()=>f.products),u=g(!0),m=()=>{u.value=!1},x=(l,_)=>{const t=n.value.findIndex(p=>p.product.id===_),c=n.value[t];l==="-"?c.quantity>1?c.quantity-=1:b.warning("Can't reduce further. Please delete the item"):c.quantity+=1};return(l,_)=>(i(),r("section",N,[V,e("table",B,[O,n.value?(i(),r("tbody",Q,[(i(!0),r(k,null,P(n.value,t=>(i(),r("tr",{key:t.product.id,class:"border-black"},[e("td",R,[e("div",H,[e("span",{onClick:c=>l.$emit("removeProduct",t.product.id),class:"text-2xl cursor-pointer"},"×",8,M),e("div",Y,[e("img",{class:j([{"opacity-0 absolute":u.value,"opacity-100":!u.value},"size-32 object-contain shrink-0"]),onLoad:m,loading:"lazy",alt:"Product Image",src:t.product.image},null,42,G),C(e("span",J,null,512),[[z,u.value]])]),e("section",K,[e("span",W,s(t.product.category.charAt(0).toUpperCase()+t.product.category.slice(1)),1),e("h4",X,s(t.product.title),1)])])]),e("td",Z,s(a(t.product.price)),1),e("td",ee,[e("div",te,[e("div",{onClick:c=>x("-",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},ne,8,se),e("span",null,s(t.quantity),1),e("div",{onClick:c=>x("+",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},ae,8,le)])]),e("td",ie,s(a(t.product.price*t.quantity)),1)]))),128))])):v("",!0),n.value?(i(),r("tbody",re,[(i(!0),r(k,null,P(n.value,t=>(i(),r(k,{key:t.product.id},[e("tr",de,[e("td",ue,[e("div",_e,[e("span",{onClick:c=>l.$emit("removeProduct",t.product.id),class:"text-2xl cursor-pointer"},"×",8,he),e("div",xe,[e("div",me,[e("img",{class:j([{"opacity-0 absolute":u.value,"opacity-100":!u.value},"size-32 object-contain shrink-0"]),onLoad:m,loading:"lazy",alt:"Product Image",src:t.product.image},null,42,fe),C(e("span",pe,null,512),[[z,u.value]])]),e("section",ge,[e("span",ve,s(t.product.category.charAt(0).toUpperCase()+t.product.category.slice(1)),1),e("h4",be,s(t.product.title),1)])])])])]),e("tr",ye,[ke,e("td",we,s(a(t.product.price)),1)]),Ce,e("tr",$e,s(a(t.product.price)),1),e("tr",Pe,[je,e("td",ze,[e("div",qe,[e("div",{onClick:c=>x("-",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},Te,8,Ie),e("span",null,s(t.quantity),1),e("div",{onClick:c=>x("+",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},Fe,8,Ue)])])]),Le,e("tr",Ee,[e("div",De,[e("div",{onClick:c=>x("-",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},Be,8,Ne),e("span",null,s(t.quantity),1),e("div",{onClick:c=>x("+",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},Re,8,Oe)])]),e("tr",He,[Me,e("td",Ye,s(a(t.product.price*t.quantity)),1)]),Ge,e("tr",Je,s(a(t.product.price*t.quantity)),1)],64))),128))])):v("",!0)]),n.value.length?v("",!0):(i(),r("div",Ke,Xe))]))}},et={class:"h-full flex p-5 gap-x-5 max-lg:flex-col max-lg:gap-y-5"},tt={class:"flex flex-col w-96 max-lg:flex-row max-lg:w-full max-lg:h-64 max-sm:flex-col max-sm:w-full max-sm:min-h-min"},st={class:"flex flex-col h-1/2 max-h-96 items-start justify-between max-lg:h-full max-lg:w-1/2 max-sm:w-full"},ot=e("div",null,[e("h2",{class:"text-2xl font-semibold tracking-tighter"},"Coupon Code"),e("p",{class:"mt-3 tracking-wide"},"Enter your coupon code to get a discount")],-1),nt={class:"w-full"},lt=e("div",{class:"w-full divider max-lg:divider-horizontal max-sm:divider-vertical"},null,-1),ct={class:"flex flex-col h-1/2 max-h-96 bg-amber-300 p-3 rounded-lg max-lg:h-full max-lg:w-1/2 max-sm:w-full"},at=e("h2",{class:"text-2xl font-semibold mb-3 tracking-tight"},"Cart Total",-1),it={class:"flex justify-between"},rt=e("span",{class:"tracking-wide"},"Items:",-1),dt={class:"text-red-500"},ut={class:"flex justify-between"},_t=e("span",{class:"tracking-wide"},"Coupon:",-1),ht={class:"text-emerald-500"},xt={class:"flex justify-between font-semibold text-xl"},mt=e("span",{class:"tracking-wide"},"Total:",-1),ft={class:"flex flex-col gap-y-2 mt-auto"},gt={__name:"CartView",setup($){const d=q(),b=A(),f=F(),a=I(),n=g([]),u=async()=>{for(const o of f.userCart){const h=b.items.find(y=>y.id===o.productId);h&&n.value.push({product:h,quantity:o.quantity})}},m=w(()=>n.value.map(o=>o.product.price*o.quantity).reduce((o,h)=>o+h,0)),x="Y9s4j23Lq0mA2gE2",l=g(!1),_=g(""),t=w(()=>l.value?m.value*.2:0),c=()=>{_.value.trim()&&(_.value===x?(a.success("Coupon used!"),l.value=!0,_.value=""):a.warning("Coupon is not correct"))},p=o=>d.userPref?`${(o*d.latest.rates[d.userPref]).toFixed(2)}/${d.userPref}`:`${o.toFixed(2)}/USD`,S=()=>{l.value=!1,_.value="",t.value=0,a.success("Coupon removed!")},T=o=>{f.removeFromCart(o),n.value=n.value.filter(h=>h.product.id!=o),a.success("Item removed from your cart")},U=()=>{a.error("Purchase not implemented!")};return L(async()=>{await f.fetchUserId(),await f.fetchCart(),u()}),(o,h)=>(i(),r("div",et,[E(Ze,{products:n.value,onRemoveProduct:T},null,8,["products"]),e("div",tt,[e("div",st,[ot,e("div",nt,[C(e("input",{"onUpdate:modelValue":h[0]||(h[0]=y=>_.value=y),class:"mb-3 w-full rounded-3xl bg-gray-200 border-none focus:ring-0",type:"text",placeholder:"Coupon Code..."},null,512),[[D,_.value]]),e("button",{onClick:c,class:"w-full bg-black text-white py-2 tracking-widest font-medium text-lg rounded-3xl hover:ring hover:ring-black hover:ring-offset-2 transition-all"},"APPLY")])]),lt,e("section",ct,[at,e("div",it,[rt,e("span",dt,s(p(m.value)),1)]),e("div",ut,[_t,e("span",ht,s(p(t.value)),1)]),e("div",xt,[mt,e("span",null,s(p(l.value?m.value-t.value:m.value)),1)]),e("div",ft,[l.value?(i(),r("button",{key:0,onClick:S,class:"w-full bg-white text-rose-500 py-3 rounded-3xl hover:bg-slate-100 transition-all"},"Remove Coupon")):v("",!0),e("button",{onClick:U,class:"w-full bg-white font-bold text-black py-3 rounded-3xl tracking-widest hover:bg-slate-100 transition-all"},"PURCHASE")])])])]))}};export{gt as default};
