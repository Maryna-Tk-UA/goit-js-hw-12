import{a as g,i as l,S as u}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51359402-e1cf81f867165d4b6bb985455",p="https://pixabay.com/api/";function d(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return g.get(p,{params:r}).then(o=>o.data).catch(o=>{l.error({message:"Ooooops! Something went wrong",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"white",icon:"",iconUrl:new URL("../img/error.svg",import.meta.url).href,close:!1})})}const n=document.querySelector(".gallery"),y=new u(".gallery a"),c=document.querySelector(".container-loader");function w(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:m,downloads:f})=>`
          <a href="${a}" class="gallery-item">
          <div class="img-container">
        <img src="${o}" alt="${e}" class="gallery-item-img" width="360">
        </div>
        <ul class="descr-list">
          <li class="descr-list-item">
            <h3 class="title-item">Likes</h3>
            <p class="text-item">${t}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Views</h3>
            <p class="text-item">${i}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Comments</h3>
            <p class="text-item">${m}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Downloads</h3>
            <p class="text-item">${f}</p>
          </li>
        </ul>
      </a>
    `).join("");n.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){n.innerHTML=""}function b(){c.classList.add("is-active")}function v(){c.classList.remove("is-active")}const C=document.querySelector(".form");C.addEventListener("submit",S);function S(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r===""){l.error({message:"The search field cannot be empty",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"white",icon:"",iconUrl:new URL("./img/error.svg",import.meta.url).href,close:!1});return}L(),b(),d(r).then(o=>{o.hits.length===0&&l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"white",icon:"",iconUrl:new URL("./img/error.svg",import.meta.url).href,close:!1}),w(o.hits)}).catch(o=>{l.error({message:"Ooooops! Something went wrong",position:"topRight",backgroundColor:"#ef4040",progressBar:!1,messageColor:"white",icon:"",iconUrl:new URL("./img/error.svg",import.meta.url).href,close:!1})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
