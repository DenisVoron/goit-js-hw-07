import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onImageContainerClick);


function createGalleryCard(card) {
    return card.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');

}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onImageContainerClick(evt) {
    evt.preventDefault();
    const swatchEl = evt.target;
    //console.log(swatchEl);

    const isImageSwatchEl = !swatchEl.classList.contains('gallery__image');

    if (isImageSwatchEl) {
        return;
    }
    //console.log(isImageSwatchEl);
}