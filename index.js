import{a as p,S as u,i}from"./assets/vendor-CVWx-W0A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="56324525-03890bcfd6a05b42467a818f7";async function d(o){return(await p.get("https://pixabay.com/api/",{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const m=new u(".gallery a",{}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function y(o){const s=o.map(t=>`<li>
      <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"/></a>

     <div class="card-info">
  <p><span>Likes</span><span>${t.likes}</span></p>
  <p><span>Views</span><span>${t.views}</span></p>
  <p><span>Comments</span><span>${t.comments}</span></p>
  <p><span>Downloads</span><span>${t.downloads}</span></p>
</div>
    </li>`).join("");c.innerHTML=s,m.refresh()}function g(){c.innerHTML=""}function h(){l.classList.add("active")}function L(){l.classList.remove("active")}const w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(s){g(),h();try{const t=await d(s);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",messageSize:"16px",maxWidth:432});return}y(t.hits),o.target.reset()}catch(t){i.error({message:`Something went wrong: ${t.message}`,position:"topRight"})}finally{L()}}});
//# sourceMappingURL=index.js.map
