import{C as q,k as I,b as C,j as v,o as c,c as i,a as e,F as w,r as P,B as j,z as k,D as z,t as n,q as g,u as T,l as A,d as F,e as L,E as D}from"./index-BahIuGGq.js";const E={class:"flex flex-col grow"},V=e("h1",{class:"text-4xl font-semibold mb-3"},"Shopping Cart",-1),B={class:"table table-pin-rows rounded-none bg-gray-200"},N=e("thead",{class:"max-md:hidden"},[e("tr",{class:"border-bottom border-black bg-gray-200"},[e("th",null,"Products"),e("th",null,"Price"),e("th",null,"Quantity"),e("th",null,"Total Price")])],-1),O={key:0,class:"max-md:hidden"},Q={class:"p-5"},M={class:"flex gap-x-5 items-center"},R=["onClick"],Y={class:"flex justify-center items-center bg-white size-40 shrink-0 rounded-lg"},G=["src"],H={class:"loading loading-spinner text-rose-500"},J={class:"flex flex-col justify-center"},K={class:"font-semibold underline min-w-max"},W={class:"max-w-96 line-clamp-3 text-xl max-xl:text-sm"},X={class:"font-bold"},Z={class:"font-bold"},ee={class:"flex gap-x-5 items-center"},te=["onClick"],se=e("span",{class:"text-2xl"},"-",-1),oe=[se],le=["onClick"],ne=e("span",{class:"text-2xl"},"+",-1),ae=[ne],ce={class:"font-bold"},ie={key:1,class:"hidden max-md:table-row-group"},re={class:"border-black"},de={class:"p-5 max-md:first:w-full"},ue={class:"flex gap-x-5 items-center"},_e=["onClick"],he={class:"flex gap-x-5 items-center max-sm:flex-col max-sm:items-start"},me={class:"flex justify-center items-center bg-white size-40 shrink-0 rounded-lg max-sm:size-36"},xe=["src"],fe={class:"loading loading-spinner text-rose-500"},pe={class:"flex flex-col justify-center"},ve={class:"font-semibold underline min-w-max"},ge={class:"max-w-96 line-clamp-3 text-xl max-xl:text-sm"},be={class:"border-black"},ye=e("th",{class:"w-1/4 bg-gray-200"},"Price",-1),we={class:"font-bold text-center"},Ce={class:"border-black"},ke=e("th",{class:"w-1/4 bg-gray-200"},"Quantity",-1),$e={class:"font-bold"},Pe={class:"flex gap-x-5 items-center"},je=["onClick"],ze=e("span",{class:"text-2xl"},"-",-1),qe=[ze],Ie=["onClick"],Se=e("span",{class:"text-2xl"},"+",-1),Ue=[Se],Te={class:"border-black"},Ae=e("th",{class:"w-1/4 bg-gray-200"},"Total Price",-1),Fe={class:"font-bold text-center"},Le={key:0,class:"flex justify-center items-center grow"},De=e("span",{class:"loading loading-spinner text-rose-500 size-32"},null,-1),Ee=[De],Ve={__name:"ProductTable",props:{products:{type:Object,required:!0}},setup($){const r=q(),b=I(),x=$,d=l=>r.userPref?`${(l*r.latest.rates[r.userPref]).toFixed(2)}/${r.userPref}`:`${l.toFixed(2)}/USD`,o=C(()=>x.products),u=v(!0),m=()=>{u.value=!1},f=(l,_)=>{const t=o.value.findIndex(p=>p.product.id===_),a=o.value[t];l==="-"?a.quantity>1?a.quantity-=1:b.warning("Can't reduce further. Please delete the item"):a.quantity+=1};return(l,_)=>(c(),i("section",E,[V,e("table",B,[N,o.value?(c(),i("tbody",O,[(c(!0),i(w,null,P(o.value,t=>(c(),i("tr",{key:t.product.id,class:"border-black"},[e("td",Q,[e("div",M,[e("span",{onClick:a=>l.$emit("removeProduct",t.product.id),class:"text-2xl cursor-pointer"},"×",8,R),e("div",Y,[e("img",{class:j([{"opacity-0 absolute":u.value,"opacity-100":!u.value},"size-32 object-contain shrink-0"]),onLoad:m,loading:"lazy",alt:"Product Image",src:t.product.image},null,42,G),k(e("span",H,null,512),[[z,u.value]])]),e("section",J,[e("span",K,n(t.product.category.charAt(0).toUpperCase()+t.product.category.slice(1)),1),e("h4",W,n(t.product.title),1)])])]),e("td",X,n(d(t.product.price)),1),e("td",Z,[e("div",ee,[e("div",{onClick:a=>f("-",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},oe,8,te),e("span",null,n(t.quantity),1),e("div",{onClick:a=>f("+",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},ae,8,le)])]),e("td",ce,n(d(t.product.price*t.quantity)),1)]))),128))])):g("",!0),o.value?(c(),i("tbody",ie,[(c(!0),i(w,null,P(o.value,t=>(c(),i(w,{key:t.product.id},[e("tr",re,[e("td",de,[e("div",ue,[e("span",{onClick:a=>l.$emit("removeProduct",t.product.id),class:"text-2xl cursor-pointer"},"×",8,_e),e("div",he,[e("div",me,[e("img",{class:j([{"opacity-0 absolute":u.value,"opacity-100":!u.value},"size-32 object-contain shrink-0"]),onLoad:m,loading:"lazy",alt:"Product Image",src:t.product.image},null,42,xe),k(e("span",fe,null,512),[[z,u.value]])]),e("section",pe,[e("span",ve,n(t.product.category.charAt(0).toUpperCase()+t.product.category.slice(1)),1),e("h4",ge,n(t.product.title),1)])])])])]),e("tr",be,[ye,e("td",we,n(d(t.product.price)),1)]),e("tr",Ce,[ke,e("td",$e,[e("div",Pe,[e("div",{onClick:a=>f("-",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},qe,8,je),e("span",null,n(t.quantity),1),e("div",{onClick:a=>f("+",t.product.id),class:"rounded-full size-8 flex justify-center items-center cursor-pointer"},Ue,8,Ie)])])]),e("tr",Te,[Ae,e("td",Fe,n(d(t.product.price*t.quantity)),1)])],64))),128))])):g("",!0)]),o.value.length?g("",!0):(c(),i("div",Le,Ee))]))}},Be={class:"h-full flex p-5 gap-x-5 max-lg:flex-col max-lg:gap-y-5"},Ne={class:"flex flex-col w-96 max-lg:flex-row max-lg:w-full max-lg:h-64 max-sm:flex-col max-sm:w-full max-sm:min-h-min"},Oe={class:"flex flex-col h-1/2 max-h-96 items-start justify-between max-lg:h-full max-lg:w-1/2 max-sm:w-full"},Qe=e("div",null,[e("h2",{class:"text-2xl font-semibold"},"Coupon Code"),e("p",{class:"mt-3"},"Enter your coupon code to get a discount")],-1),Me={class:"w-full"},Re=e("div",{class:"w-full divider max-lg:divider-horizontal max-sm:divider-vertical"},null,-1),Ye={class:"flex flex-col h-1/2 max-h-96 bg-amber-300 p-3 rounded-lg max-lg:h-full max-lg:w-1/2 max-sm:w-full"},Ge=e("h2",{class:"text-2xl font-semibold mb-3"},"Cart Total",-1),He={class:"flex justify-between"},Je=e("span",null,"Items:",-1),Ke={class:"text-red-500"},We={class:"flex justify-between"},Xe=e("span",null,"Coupon:",-1),Ze={class:"text-emerald-500"},et={class:"flex justify-between font-semibold text-xl"},tt=e("span",null,"Total:",-1),st={class:"flex flex-col gap-y-2 mt-auto"},ot=e("button",{class:"w-full bg-white font-bold text-black py-3 rounded-3xl hover:bg-slate-100 transition-all"},"Purchase",-1),nt={__name:"CartView",setup($){const r=q(),b=T(),x=A(),d=I(),o=v([]),u=async()=>{for(const s of x.userCart){const h=b.items.find(y=>y.id===s.productId);h&&o.value.push({product:h,quantity:s.quantity})}},m=C(()=>o.value.map(s=>s.product.price*s.quantity).reduce((s,h)=>s+h,0)),f="Y9s4j23Lq0mA2gE2",l=v(!1),_=v(""),t=C(()=>l.value?m.value*.2:0),a=()=>{_.value.trim()&&(_.value===f?(d.success("Coupon used!"),l.value=!0,_.value=""):d.warning("Coupon is not correct"))},p=s=>r.userPref?`${(s*r.latest.rates[r.userPref]).toFixed(2)}/${r.userPref}`:`${s.toFixed(2)}/USD`,S=()=>{l.value=!1,_.value="",t.value=0,d.success("Coupon removed!")},U=s=>{x.removeFromCart(s),o.value=o.value.filter(h=>h.product.id!=s),d.success("Item removed from your cart")};return F(async()=>{await x.fetchUserId(),await x.fetchCart(),u()}),(s,h)=>(c(),i("div",Be,[L(Ve,{products:o.value,onRemoveProduct:U},null,8,["products"]),e("div",Ne,[e("div",Oe,[Qe,e("div",Me,[k(e("input",{"onUpdate:modelValue":h[0]||(h[0]=y=>_.value=y),class:"mb-3 w-full rounded-3xl bg-gray-200 border-none focus:ring-0",type:"text",placeholder:"Coupon Code..."},null,512),[[D,_.value]]),e("button",{onClick:a,class:"w-full bg-black text-white py-3 rounded-3xl hover:ring hover:ring-black hover:ring-offset-2 transition-all"},"Apply")])]),Re,e("section",Ye,[Ge,e("div",He,[Je,e("span",Ke,n(p(m.value)),1)]),e("div",We,[Xe,e("span",Ze,n(p(t.value)),1)]),e("div",et,[tt,e("span",null,n(p(l.value?m.value-t.value:m.value)),1)]),e("div",st,[l.value?(c(),i("button",{key:0,onClick:S,class:"w-full bg-white text-rose-500 py-3 rounded-3xl hover:bg-slate-100 transition-all"},"Remove Coupon")):g("",!0),ot])])])]))}};export{nt as default};
