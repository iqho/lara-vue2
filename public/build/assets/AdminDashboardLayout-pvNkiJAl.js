import{j as i,k as u,c as d,a as s,b as e,w as o,l as m,r,o as _,d as a}from"./app-D1rvhtJL.js";const f={key:0},x={class:"container mx-auto"},p={class:"flex justify-between items-center py-4"},b={__name:"AdminDashboardLayout",setup(v){const c=i(),n=u(()=>c.meta.isAdmin);return n.value!==!0&&(window.location.href="/"),(y,h)=>{const t=r("router-link"),l=r("router-view");return n.value?(_(),d("div",f,[s("div",x,[s("nav",p,[s("div",null,[e(t,{to:"/",class:"text-gray-900 text-3xl font-semibold"},{default:o(()=>[a("Admin")]),_:1})]),s("div",null,[e(t,{to:"/",class:"text-gray-900"},{default:o(()=>[a("Home")]),_:1}),e(t,{to:"/about",class:"ml-6 text-gray-900"},{default:o(()=>[a("About")]),_:1}),e(t,{to:"/admin",class:"ml-6 text-gray-900"},{default:o(()=>[a("Admin")]),_:1}),e(t,{to:"/admin/users",class:"ml-6 text-gray-900"},{default:o(()=>[a("Users")]),_:1})])]),e(l)])])):m("",!0)}}};export{b as default};
