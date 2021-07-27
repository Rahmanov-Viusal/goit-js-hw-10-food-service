import menu from './menu.json';
import itemsTemplate from '../templates/food-gallery.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);
