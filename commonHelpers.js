import{S as l,i}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();new l(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});document.getElementById("searchForm").addEventListener("submit",function(o){o.preventDefault();var n=document.getElementById("searchQuery").value.trim();if(n===""){i.error({title:"Error",message:"Please enter a search query."});return}document.getElementById("gallery").innerHTML="";var r="42597661-931c8df930c5d1251b47bbd62",a="https://pixabay.com/api/?key="+r+"&q="+encodeURIComponent(n)+"&image_type=photo&orientation=horizontal&safesearch=true";fetch(a).then(e=>e.json()).then(e=>{e.hits.length>0?(e.hits.forEach(t=>{d(t)}),lightbox.refresh()):i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."})}).catch(e=>{i.error({title:"Error",message:"An error occurred while processing your request. Please try again."}),console.error("Error:",e)})});function d(o){var n=document.getElementById("gallery"),r=document.createElement("a");r.classList.add("card"),r.href=o.largeImageURL;var a=document.createElement("img");a.src=o.webformatURL,a.alt=o.tags;var e=document.createElement("p");e.textContent="Likes: "+o.likes;var t=document.createElement("p");t.textContent="Views: "+o.views;var s=document.createElement("p");s.textContent="Comments: "+o.comments;var c=document.createElement("p");c.textContent="Downloads: "+o.downloads,r.appendChild(a),r.appendChild(e),r.appendChild(t),r.appendChild(s),r.appendChild(c),n.appendChild(r)}
//# sourceMappingURL=commonHelpers.js.map
