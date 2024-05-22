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
const loadBtn = document.querySelector('.load-btn');
let totalPages = 0;
loadBtn.style.display = 'none';
let page = 1;
let searchQuery = '';
formSearch.addEventListener('submit', searchPhotos);
async function searchPhotos(event) {
  event.preventDefault();
  searchQuery = formSearch.elements.searchQuery.value.trim();
  galleryList.innerHTML = '';
  loadBtn.style.display = 'none';
  page = 1;
  if (searchQuery === '') {
    iziToast.warning({ message: 'Enter something for search!' });
    return;
  }
  loader.style.display = 'block';
  try {
    const data = await fetchPhotosByQuery(searchQuery);
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
    totalPages = Math.ceil(data.totalHits / 15);
    if (data.totalHits > 15) {
      loadBtn.style.display = 'block';
    } else {
      loadBtn.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Sorry, something went wrong!',
    });
  } finally {
    loader.style.display = 'none';
    formSearch.reset();
  }
}
setTimeout(() => (loader.style.display = 'none'), 500);
loadBtn.addEventListener('click', onLoadMore);
async function onLoadMore() {
  page += 1;

  loader.style.display = 'block';
  try {
    const data = await fetchPhotosByQuery(searchQuery, page);

    const markup = createGalleryItemMarkup(data.hits);
    galleryList.insertAdjacentHTML('beforeend', markup);
    smoothScrollOnLoadMore();
    lightbox.refresh();
    if (page === totalPages) {
      loadBtn.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Sorry, something went wrong!',
    });
  } finally {
    loader.style.display = 'none';
  }
}
function smoothScrollOnLoadMore() {
  const lastCard = galleryList.querySelector('.card');
  const cardHeight = lastCard.getBoundingClientRect().height;
  const scrollHeight = cardHeight * 2;

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}
