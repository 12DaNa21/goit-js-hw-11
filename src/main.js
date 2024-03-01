import { PixabayAPI } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { displayImages } from './js/render-functions';
const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const loader = document.getElementById('loader');
const gallery = document.getElementById('gallery');
const api = new PixabayAPI();
let searchTerm;
function showLoader() {
    setTimeout(()=>{
        loader.style.display = 'none';
    }, 750);
}
form.addEventListener('submit', async function (e) {
    e.preventDefault();

     searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search term.',
            backgroundColor: 'orange',
        });
        return;
    }

    loader.style.display = 'block';
    gallery.innerHTML = '';
       
    api.query = searchTerm;
    try { 
        showLoader();
        let photos = await api.getPhotos();
        
        displayImages(photos.hits);
    
     } catch(error) {
       handleError(error) 
     }
    
   
});

function handleError(error) {
    iziToast.show({
        title: 'Error',
        message: 'An error occurred. Please try again later.',
        backgroundColor: 'red',
    });
    console.error('Error:', error);
}

window.addEventListener('scroll', scrollFunction);

async function scrollFunction() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      
try { 
    showLoader();
    let photos = await api.getPhotos();
    api.incrementPage();
    displayImages(photos.hits);

 } catch(error) {
   handleError(error) 
 }
  } 
};


