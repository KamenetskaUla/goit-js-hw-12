import axios from 'axios';

const API_KEY = '39338997-3d04d1d59a8e2d0c329000ae7';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPhotosByQuery(query) {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .catch(error =>
      iziToast.error({
        message: 'Sorry, something went wrong!',
      })
    );
}
