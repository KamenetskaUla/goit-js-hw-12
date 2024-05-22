import axios from 'axios';

const API_KEY = '39338997-3d04d1d59a8e2d0c329000ae7';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchPhotosByQuery(query, page = 1) {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });
  try {
    const { data } = await axios(`${BASE_URL}?${searchParams}`);

    return data;
  } catch (error) {
    iziToast.error({
      message: 'Sorry, something went wrong!',
    });
  }
}
