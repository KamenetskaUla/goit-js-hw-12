import{a as b,S as L,i as n}from"./assets/vendor-a595d5bb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="39338997-3d04d1d59a8e2d0c329000ae7",v="https://pixabay.com/api/";async function f(s,t=1){const o=new URLSearchParams({q:s,key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});try{const{data:a}=await b(`${v}?${o}`);return a}catch{iziToast.error({message:"Sorry, something went wrong!"})}}const m=s=>s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:c,downloads:w})=>`
      
        <li class="card">
        <a href="${o}">
          <img src="${t}" alt="${a}" class="gallery-img" />
          <div class="card-body">
            <div class="d-flex ">
              
              <p class="text">Likes: ${e}</p>
              <p class="text">Views: ${r}</p>
              <p class="text">Comments: ${c}</p>
              <p class="text">Downloads: ${w}</p>
            </div>
          </div>
          </a>
        </li>
      `).join(""),p=new L(".gallery a",{captionsData:"alt"}),l=document.querySelector(".loader"),h=document.querySelector(".js-search-form"),u=document.querySelector(".gallery"),i=document.querySelector(".load-btn");let g=0;i.style.display="none";let d=1,y="";h.addEventListener("submit",P);async function P(s){if(s.preventDefault(),y=h.elements.searchQuery.value.trim(),u.innerHTML="",i.style.display="none",d=1,y===""){n.warning({message:"Enter something for search!"});return}l.style.display="block";try{const t=await f(y);if(t.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=m(t.hits);u.insertAdjacentHTML("beforeend",o),p.refresh(),g=Math.ceil(t.totalHits/15),t.totalHits>15?i.style.display="block":(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Sorry, something went wrong!"})}finally{l.style.display="none",h.reset()}}setTimeout(()=>l.style.display="none",500);i.addEventListener("click",$);async function $(){d+=1,l.style.display="block";try{const s=await f(y,d),t=m(s.hits);u.insertAdjacentHTML("beforeend",t),x(),p.refresh(),d===g&&(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Sorry, something went wrong!"})}finally{l.style.display="none"}}function x(){const o=u.querySelector(".card").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
