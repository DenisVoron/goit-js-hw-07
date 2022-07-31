import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery')
//console.log(containerGallery);

//console.log(createGalleryCard(galleryItems));
const imgMarkup = createGalleryCard(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);
//createGalleryCard(galleryItems);
containerGallery.addEventListener('click', onImageContainerClick);

window.addEventListener('keydown', onClickLightbox);

//let instance;

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

    //console.log(swatchEl.dataset.source);

    /*const instance = basicLightbox.create(`
    <img src="${swatchEl.dataset.source}">
`)*/
    const instance = basicLightbox.create(`
    <div class="modal">
       <a class="gallery__link" href="${swatchEl.dataset.source}"></a>
        <a>Close</a>
    </div>
`, {
        onShow: (instance) => {
            //instance.element().querySelector('a').onclick = instance.close
        }
    })

    instance.show();
}

/*function onCloseModal() {
    instance.show()
}*/

/*function onEscKeyPress(evt) {
    console.log(evt.code);
    const ESC_KEY_CODE = 'Escape';

    const isEscKey = evt.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}

/*const instance = basicLightbox.close(`
    <img src="${instance.target.dataset.source}">
`, {
    onShow: (instance) => {
        console.log(instance);
        window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {

        window.removeEventListener('keydown', onEscKeyPress);
    }

})
instance.close()*/


function onClickLightbox(evt) {

    const instance = basicLightbox.show(`
    <img src="${evt.target.dataset.source}">
`, {
        onShow: (instance) => {
            console.log(instance);
            //window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
            //window.removeEventListener('keydown', onClickLightbox);
        }

    })
    onClose();
    //instance.close()
    /*window.addEventListener('keydown', onEscKeyPress);
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = evt.code === ESC_KEY_CODE;*/

    /*instance.close(isEscKey);*/
    /*if (evt.code === 'Escape') {
        onCloseModal();*/
}
instance.close()
//console.log(evt.code);


/*<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
        />
    </a>
</div>*/

