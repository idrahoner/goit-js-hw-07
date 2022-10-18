import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
let originalImage = {};

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

galleryEl.addEventListener("click", onClickImage);

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
  if (event.code === "Escape") {
    event.preventDefault();
    originalImage.close();

    window.removeEventListener("keydown", onEscKeyPress);
  }
}
