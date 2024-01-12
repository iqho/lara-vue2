import{f as h,l as m,c as o,a as e,k as x,b as c,w as u,F as g,m as f,r as v,o as l,d as p,t as _}from"./app-aSmC4ThY.js";import{u as y}from"./store-Hzw9aIBJ.js";const w={key:0},k={class:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",role:"alert"},C=e("span",{class:"block sm:inline"},"User Deleted Successfully.",-1),U={class:"absolute top-0 bottom-0 right-0 px-4 py-3"},N=e("title",null,"Close",-1),V=e("path",{d:`M14.348 14.849a1 1 0 01-1.414 0L10
                            11.414l-2.93 2.93a1 1 0 01-1.414
                            0l-.707-.707a1 1 0 010-1.414l2.93-2.93-2.93-2.93a1
                            1 0 010-1.414l.707-.707a1 1 0 011.414
                            0l2.93 2.93 2.93-2.93a1 1 0 011.414
                            0l.707.707a1 1 0 010 1.414l-2.93 2.93 2.93
                            2.93a1 1 0 010 1.414l-.707.707z`},null,-1),B=[N,V],D={class:"table-auto"},E=e("td",{colspan:"2"},[e("h1",{class:"text-[28px] inline-flex border-b-2 px-3 border-red-900"}," User List ")],-1),L={colspan:"2"},S=e("tr",null,[e("th",{class:"px-4 py-2"},"ID"),e("th",{class:"px-4 py-2"},"Name"),e("th",{class:"px-4 py-2"},"Email"),e("th",{class:"px-4 py-2"},"Actions")],-1),A={class:"border px-4 py-2"},F={class:"border px-4 py-2"},I={class:"border px-4 py-2"},M={class:"border px-4 py-2"},T=["onClick"],G={__name:"Index",setup($){const a=y(),s=h([]),n=h(!1),b=async d=>{confirm("Are you sure you want to delete this user?")&&(await a.deleteUser(d),s.value=a.users,s.value=s.value.filter(r=>r.id!==d),n.value=!0,setTimeout(()=>{n.value=!1},5e3))};return m(async()=>{await a.getUsers(),s.value=a.users}),(d,r)=>{const i=v("router-link");return l(),o("div",null,[n.value?(l(),o("div",w,[e("div",k,[C,e("span",U,[(l(),o("svg",{onClick:r[0]||(r[0]=t=>n.value=!1),class:"fill-current h-6 w-6 text-green-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},B))])])])):x("",!0),e("table",D,[e("thead",null,[e("tr",null,[E,e("td",L,[c(i,{to:{name:"admin.users.create"},class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right"},{default:u(()=>[p(" Create User ")]),_:1},8,["to"])])]),S]),e("tbody",null,[(l(!0),o(g,null,f(s.value,t=>(l(),o("tr",{key:t.id},[e("td",A,_(t.id),1),e("td",F,_(t.name),1),e("td",I,_(t.email),1),e("td",M,[c(i,{to:{name:"admin.users.show",params:{id:t.id}},class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-1"},{default:u(()=>[p(" View ")]),_:2},1032,["to"]),c(i,{to:{name:"admin.users.edit",params:{id:t.id}},class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1"},{default:u(()=>[p(" Edit ")]),_:2},1032,["to"]),e("button",{to:"#",onClick:z=>b(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold rounded",style:{padding:"5px 12px"}}," Delete ",8,T)])]))),128))])])])}}};export{G as default};