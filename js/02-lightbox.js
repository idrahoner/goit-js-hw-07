import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const galleryCards = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryCards);

const image = new SimpleLightbox(".gallery a", {
  captionSelector: ".gallery__image",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
