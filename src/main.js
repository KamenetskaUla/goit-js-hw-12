import { fetchPhotosByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryItemMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
const loader = document.querySelector('.loader');
const formSearch = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.gallery');
formSearch.addEventListener('submit', searchPhotos);
function searchPhotos(event) {
  event.preventDefault();
  const searchQuery = formSearch.elements.searchQuery.value.trim();
  galleryList.innerHTML = '';

  if (searchQuery === '') {
    iziToast.warning({ message: 'Enter something for search!' });
    return;
  }
  loader.style.display = 'block';
  fetchPhotosByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      const markup = createGalleryItemMarkup(data.hits);
      galleryList.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        message: 'Sorry, something went wrong!',
      })
    )
    .finally(() => {
      loader.style.display = 'none';
      formSearch.reset();
    });
}
setTimeout(() => (loader.style.display = 'none'), 500);
