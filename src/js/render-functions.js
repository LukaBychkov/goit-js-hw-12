import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      image =>
        `<li>
      <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"/></a>

     <div class="card-info">
  <p><span>Likes</span><span>${image.likes}</span></p>
  <p><span>Views</span><span>${image.views}</span></p>
  <p><span>Comments</span><span>${image.comments}</span></p>
  <p><span>Downloads</span><span>${image.downloads}</span></p>
</div>
    </li>`
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}
