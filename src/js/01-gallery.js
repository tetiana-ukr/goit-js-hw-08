// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


// знаходжу елемент  за атрибутом елемента(за назвою класу)

const galleryConteiner = document.querySelector('.gallery');

// перебираю масив методом map і створюю новий масив, розміщуючи зображення в LI і задаючи потрібні атрибути

const galleryList = galleryItems.map((image) => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`).join('');

// додаю створений елемент на сторінку всередині elem, після усіх дітей
galleryConteiner.insertAdjacentHTML('beforeend', galleryList);


  //  створюю галерею з заданими опціями
let lightbox = new SimpleLightbox('.gallery a', {

    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
});
   
console.log(galleryItems);

