import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a', {
    scaleImageToRatio: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });

export function displayImages(images) {
    if (images.length === 0) {
        iziToast.show({
            title: 'Info',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        const tagA = document.createElement('a');
        tagA.href = image.webformatURL;
        
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        
        img.addEventListener('click', () => {
            lightbox.open({
                items: [{ src: image.largeImageURL, title: image.tags }],
            });
            
        });
        const likes = document.createElement('p');
        likes.textContent = 'Likes: ' + image.likes;
  
        const views = document.createElement('p');
        views.textContent = 'Views: ' + image.views;
  
        const comments = document.createElement('p');
        comments.textContent = 'Comments: ' + image.comments;
  
        const downloads = document.createElement('p');
        downloads.textContent = 'Downloads: ' + image.downloads;
  
        tagA.appendChild(img);
        card.appendChild(tagA);
        card.appendChild(likes);
        card.appendChild(views);
        card.appendChild(comments);
        card.appendChild(downloads);
        gallery.appendChild(card);

    });

    lightbox.refresh();
    
}