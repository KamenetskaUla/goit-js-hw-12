export const createGalleryItemMarkup = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      
        <li class="card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" class="gallery-img" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              
              <p class="text-body-secondary">Likes: ${likes}</p>
              <p class="text-body-secondary">Views: ${views}</p>
              <p class="text-body-secondary">Comments: ${comments}</p>
              <p class="text-body-secondary">Downloads: ${downloads}</p>
            </div>
          </div>
          </a>
        </li>
      `
    )
    .join('');
};
