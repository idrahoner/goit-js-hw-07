import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let originalImage = {};

galleryEl.addEventListener("click", onClickImage);

const galleryCards = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryCards);

function onClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageSrc = event.target.dataset.source;

  originalImage = basicLightbox.create(`
    <img src="${imageSrc}">
    `);

  originalImage.show();
  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === "Escape" || event.code === "Space") {
    originalImage.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}
