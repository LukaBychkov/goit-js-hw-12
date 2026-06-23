import{a as L,S as b,i}from"./assets/vendor-CVWx-W0A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const v="56324525-03890bcfd6a05b42467a818f7";async function d(o,t){return(await L.get("https://pixabay.com/api/",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const u=new b(".gallery a",{}),p=document.querySelector(".gallery"),f=document.querySelector(".load-btn"),h=document.querySelector(".loader");function w(o){const t=o.map(e=>`<li>
      <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"/></a>

     <div class="card-info">
  <p><span>Likes</span><span>${e.likes}</span></p>
  <p><span>Views</span><span>${e.views}</span></p>
  <p><span>Comments</span><span>${e.comments}</span></p>
  <p><span>Downloads</span><span>${e.downloads}</span></p>
</div>
    </li>`).join("");p.innerHTML=t,u.refresh()}function $(){p.innerHTML=""}function m(){h.classList.add("active")}function g(){h.classList.remove("active")}function S(){f.classList.add("active")}function l(){f.classList.remove("active")}function q(o){const t=o.map(e=>`<li>
      <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"/></a>

     <div class="card-info">
  <p><span>Likes</span><span>${e.likes}</span></p>
  <p><span>Views</span><span>${e.views}</span></p>
  <p><span>Comments</span><span>${e.comments}</span></p>
  <p><span>Downloads</span><span>${e.downloads}</span></p>
</div>
    </li>`).join("");p.insertAdjacentHTML("beforeend",t),u.refresh()}let n=1,y="";const R=document.querySelector(".form"),x=document.querySelector(".load-btn");R.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){y=t,n=1,l(),$(),m();try{const e=await d(t,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",messageSize:"16px",maxWidth:432});return}w(e.hits),S(),o.target.reset();const a=Math.ceil(e.totalHits/15);n>=a&&(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){i.error({message:`Something went wrong: ${e.message}`,position:"topRight"})}finally{g()}}});x.addEventListener("click",async o=>{n+=1,m();try{const t=await d(y,n);q(t.hits);const a=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"});const s=Math.ceil(t.totalHits/15);n>=s&&(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",messageSize:"16px",maxWidth:432})}finally{g()}});
//# sourceMappingURL=index.js.map
