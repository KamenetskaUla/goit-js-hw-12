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
            <div class="d-flex ">
              
              <p class="text">Likes: ${likes}</p>
              <p class="text">Views: ${views}</p>
              <p class="text">Comments: ${comments}</p>
              <p class="text">Downloads: ${downloads}</p>
            </div>
          </div>
          </a>
        </li>
      `
    )
    .join('');
};
