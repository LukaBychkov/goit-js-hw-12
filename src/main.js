import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  appendGallery,
} from './js/render-functions';

let page = 1;
let currentQuery = '';

const form = document.querySelector('.form');
const button = document.querySelector('.load-btn');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();

  if (!query) return;

  currentQuery = query;
  page = 1;

  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        messageSize: '16px',
        maxWidth: 432,
      });
      return;
    }

    createGallery(data.hits);
    showLoadMoreButton();
    e.target.reset();

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

button.addEventListener('click', async e => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    appendGallery(data.hits);

    const card = document.querySelector('.gallery li');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'We`re sorry, but you`ve reached the end of search results.',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      messageSize: '16px',
      maxWidth: 432,
    });
  } finally {
    hideLoader();
  }
});
