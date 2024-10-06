import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description})=> 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`

).join('')

gallery.insertAdjacentHTML('beforeend', markup)

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()


document.addEventListener('keydown', onImgClose);
function onImgClose (event) {
        console.log(event.code)
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener('keydown', onImgClose)
        }
    }
}





    
