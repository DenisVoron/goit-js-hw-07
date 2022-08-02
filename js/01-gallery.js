import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery')
//console.log(containerGallery);

const imgMarkup = createGalleryCard(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);

containerGallery.addEventListener('click', onImageContainerClick);


function createGalleryCard(card) {
    return card.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
              />
         </a>
        </div>
        `;
    }).join('');
}

function onImageContainerClick(evt) {
    evt.preventDefault();
    const swatchEl = evt.target;

    console.log(swatchEl);
    const isImageSwatchEl = swatchEl.nodeName !== 'IMG';

    console.log(isImageSwatchEl);
    if (isImageSwatchEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${swatchEl.dataset.source}">
`)

    instance.show();
}
