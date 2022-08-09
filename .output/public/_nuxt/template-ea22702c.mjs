import{b as w,v as g,o as l,A as n,H as e,u as d,N as x,a5 as _,a0 as h,a4 as p,Y as i,ai as y,ar as C}from"./entry-0effd9e2.mjs";import{e as m}from"./template-a37b3662.mjs";import{e as k}from"./index-ee311efc.mjs";const $={class:"drawer"},z=e("input",{id:"my-drawer",type:"checkbox",class:"drawer-toggle"},null,-1),T={class:"drawer-content"},q=["data-theme"],B={class:"fixed left-0 md:left-2 top-1/3 z-50 flex flex-col"},L=e("span",{class:"material-symbols-outlined"}," chevron_left ",-1),N=[L],S=e("label",{for:"my-drawer",class:"btn btn-square btn-md md:scale-100 scale-75 drawer-button shadow-md"},[e("span",{class:"material-symbols-outlined"}," flaky ")],-1),R={class:"drawer-side"},V=e("label",{for:"my-drawer",class:"drawer-overlay"},null,-1),j={class:"menu w-80 bg-base-100 p-4"},A=e("li",{class:"menu-title"},[e("a",null,"Choose Theme")],-1),D={class:"dropdown mt-2"},E={tabindex:"1"},F=["value"],H={tabindex:"1",class:"dropdown-content max-h-96 grid-cols-1 w-72 p-4 pt-0 bg-base-300 rounded-box overflow-y-scroll"},M=["data-set-theme","onClick"],Y=["data-theme"],G={class:"grid grid-cols-5 grid-rows-3"},I={class:"col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"},J={class:"flex-grow text-sm font-bold"},K=y('<div class="flex flex-shrink-0 flex-wrap gap-1"><div class="bg-primary w-2 rounded"></div><div class="bg-secondary w-2 rounded"></div><div class="bg-accent w-2 rounded"></div><div class="bg-neutral w-2 rounded"></div></div>',1),O=e("li",{class:"menu-title mt-4"},[e("a",null,"Choose Language")],-1),P={class:"dropdown mt-2"},Q={tabindex:"2"},U=["value"],W={tabindex:"2",class:"dropdown-content max-h-96 grid-cols-1 w-72 p-4 pt-0 bg-base-300 rounded-box overflow-y-scroll"},X=["onClick"],Z={class:"bg-base-100 text-base-content w-full cursor-pointer font-sans px-4 py-3 flex justify-between"},ee={class:"capitalize"},ne={__name:"template",setup(se){const{path:b,query:f}=w(),c={en:"english",zh:"\u4E2D\u6587"},r=g(f.lang||"en"),v=t=>{r.value=t,C().push(`${b}?lang=${t}`)},a=k({modes:m});return(t,u)=>(l(),n("div",$,[z,e("div",T,[e("div",{id:"template-priview",class:"fixed left-0 w-full top-0","data-theme":d(a)},[x(t.$slots,"default")],8,q),e("div",B,[e("div",{class:"btn btn-primary btn-md btn-square md:scale-100 scale-75 drawer-button shadow-md md:mb-2",onClick:u[0]||(u[0]=s=>t.$router.back())},N),S])]),e("div",R,[V,e("ul",j,[A,e("div",D,[e("label",E,[e("input",{type:"text",class:"input input-bordered w-72 focus:outline-none focus:border-primary focus:border-2",placeholder:"Choose a Theme",value:d(a)},null,8,F)]),e("div",H,[(l(!0),n(_,null,h(d(m),s=>(l(),n("div",{key:s,class:p(["outline-base-content mt-4 overflow-hidden w-full rounded-lg outline-2 outline-offset-2",{outline:s===d(a)}]),"data-set-theme":s,"data-act-class":"outline",onClick:o=>a.value=s},[e("div",{"data-theme":s,class:"bg-base-100 text-base-content w-full cursor-pointer font-sans"},[e("div",G,[e("div",I,[e("div",J,i(s),1),K])])],8,Y)],10,M))),128))])]),O,e("div",P,[e("label",Q,[e("input",{type:"text",class:"input input-bordered w-72 focus:outline-none focus:border-primary focus:border-2",placeholder:"Choose a Theme",value:c[r.value]},null,8,U)]),e("div",W,[(l(),n(_,null,h(c,(s,o)=>e("div",{key:o,class:p(["mt-4 overflow-hidden w-full rounded-lg outline-primary",{outline:o===r.value}]),onClick:te=>v(o)},[e("div",Z,[e("span",null,i(o),1),e("span",ee,i(s),1)])],10,X)),64))])])])])]))}};export{ne as default};
