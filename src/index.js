import './css/styles.css';
import { fetchPictures } from './js/fetchPictures';
import { renderQuery } from './js/render-query';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.btn-load-more');

searchForm.addEventListener('submit', onSearchForm);
loadMoreButton.addEventListener('click', onLoadMoreBtn);

function onSearchForm(event) {
  event.preventDefault();
  query = event.currentTurget.searchQuery.value.trim();
  gallery.innerHTML = '';
  loadMoreButton.classList.add('is-hidden');
}
