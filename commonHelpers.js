import{S as y,i}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="39338997-3d04d1d59a8e2d0c329000ae7",f="https://pixabay.com/api/";function h(o){const s=new URLSearchParams({q:o,key:m,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).catch(t=>iziToast.error({message:"Sorry, something went wrong!"}))}const p=o=>o.map(({webformatURL:s,largeImageURL:t,tags:n,likes:e,views:r,comments:a,downloads:u})=>`
      
        <li class="card">
        <a href="${t}">
          <img src="${s}" alt="${n}" class="gallery-img" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              
              <p class="text-body-secondary">Likes: ${e}</p>
              <p class="text-body-secondary">Views: ${r}</p>
              <p class="text-body-secondary">Comments: ${a}</p>
              <p class="text-body-secondary">Downloads: ${u}</p>
            </div>
          </div>
          </a>
        </li>
      `).join(""),g=new y(".gallery a",{captionsData:"alt"}),c=document.querySelector(".loader"),l=document.querySelector(".js-search-form"),d=document.querySelector(".gallery");l.addEventListener("submit",b);function b(o){o.preventDefault();const s=l.elements.searchQuery.value.trim();if(d.innerHTML="",s===""){i.warning({message:"Enter something for search!"});return}c.style.display="block",h(s).then(t=>{if(t.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=p(t.hits);d.insertAdjacentHTML("beforeend",n),g.refresh()}).catch(t=>i.error({message:"Sorry, something went wrong!"})).finally(()=>{c.style.display="none",l.reset()})}setTimeout(()=>c.style.display="none",500);
//# sourceMappingURL=commonHelpers.js.map
