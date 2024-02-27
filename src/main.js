import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Отримання значення текстового поля
      var searchQuery = document.getElementById('searchQuery').value.trim();

      // Перевірка, чи не є поле порожнім
      if (searchQuery === '') {
        // Виведення повідомлення про порожнє поле
        iziToast.error({
          title: 'Error',
          message: 'Please enter a search query.',
        });
        return;
      }

      // Очищення вмісту галереї перед новим пошуком
      document.getElementById('gallery').innerHTML = '';

      // Виконання HTTP-запиту до сервісу Pixabay
      var apiKey = '42597661-931c8df930c5d1251b47bbd62';
      var apiUrl = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + encodeURIComponent(searchQuery) + '&image_type=photo&orientation=horizontal&safesearch=true';

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Перевірка, чи є зображення у відповіді
          if (data.hits.length > 0) {
            // Додавання карток зображень до галереї
            data.hits.forEach(image => {
              addImageToGallery(image);
            });

            // Оновлення галереї
            lightbox.refresh();
          } else {
            // Виведення повідомлення про відсутність результатів
            iziToast.info({
              title: 'Info',
              message: 'Sorry, there are no images matching your search query. Please try again.',
            });
          }
        })
        .catch(error => {
          // Виведення повідомлення про помилку
          iziToast.error({
            title: 'Error',
            message: 'An error occurred while processing your request. Please try again.',
          });
          console.error('Error:', error);
        });
    });

    // Функція для додавання карток зображень до галереї
    function addImageToGallery(image) {
      var galleryElement = document.getElementById('gallery');

      var card = document.createElement('a'); // Змінено div на a
      card.classList.add('card');
      card.href = image.largeImageURL; // Додано посилання для великої версії зображення

      var img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;

      var likes = document.createElement('p');
      likes.textContent = 'Likes: ' + image.likes;

      var views = document.createElement('p');
      views.textContent = 'Views: ' + image.views;

      var comments = document.createElement('p');
      comments.textContent = 'Comments: ' + image.comments;

      var downloads = document.createElement('p');
      downloads.textContent = 'Downloads: ' + image.downloads;

      card.appendChild(img);
      card.appendChild(likes);
      card.appendChild(views);
      card.appendChild(comments);
      card.appendChild(downloads);

      galleryElement.appendChild(card);
    }
    