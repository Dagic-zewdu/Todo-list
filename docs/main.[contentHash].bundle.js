(()=>{"use strict";const e=e=>document.querySelector(e),t=e("input.input"),n=e("#add-form");document.querySelectorAll("input.checkbox");const i=e("img.icon"),c=e("button#clear-completed"),o=t=>{let n="";var i;t.forEach((e=>{n+=` <li class="list-item">\n   <div class="description-container">\n       <input type="checkbox" class='checkbox' id="${e.index}" value="${e.index}">\n       <p class="description-text">${e.description}</p>\n   </div>\n   <div class="three-dots">\n       <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/three-dots-3503935-2935846.png"\n           class="options" alt="options">\n   </div>\n</li>`})),i=n,e("ul.todo-list").innerHTML=i},d=(e,t)=>{e.forEach((e=>{e.addEventListener("click",(()=>{t(e.id,e.value)}))}))};let s,l=[{index:1,description:"Read a book",completed:!1},{index:2,description:"Buy milk",completed:!1},{index:3,description:"Go to gym",completed:!1},{index:4,description:"Wath movie",completed:!1}];const r=()=>{l=r(l),o(l)},p=(e,t)=>{l=((e,t,n)=>n.map((n=>n.index===e?{...n,completed:t}:n)))(e,t,l),o(l)};var a;o(l),a=()=>{l=[],o(l)},i.addEventListener("click",a),(e=>{c.addEventListener("click",(()=>e))})(r),window.addEventListener("DOMContentLoaded",(()=>{s=document.querySelectorAll("input.checkbox"),d(s,p)})),n.addEventListener("submit",(e=>{e.preventDefault();const n=(i=t.value,c=l,(e=>e.map(((e,t)=>({...e,index:t}))))([{index:1,description:i,completed:!1},...c]));var i,c;l=n,o(n),window.addEventListener("DOMContentLoaded",(()=>{s=document.querySelectorAll("input.checkbox"),d(s,p)}))}))})();