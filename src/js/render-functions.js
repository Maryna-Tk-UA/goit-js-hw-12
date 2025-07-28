// createGallery(images). Ця функція повинна приймати масив images, 
// створювати HTML-розмітку для галереї, додавати її в контейнер галереї
//  та викликати метод екземпляра SimpleLightbox refresh(). 
// Нічого не повертає.

// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст 
// контейнера галереї. Нічого не повертає.

// showLoader(). Ця функція нічого не приймає, повинна додавати клас для 
// відображення лоадера. Нічого не повертає.

// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для
//  відображення лоадера. Нічого не повертає.

// showLoadMoreButton(). Ця функція нічого не приймає, повинна додавати 
// клас для відображення кнопки Load more. Нічого не повертає.

// hideLoadMoreButton(). Ця функція нічого не приймає, повинна прибирати 
// клас для відображення кнопки Load more. Нічого не повертає.

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.container-loader');

export function createGallery(images) {
        const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
          <a href="${largeImageURL}" class="gallery-item">
          <div class="img-container">
        <img src="${webformatURL}" alt="${tags}" class="gallery-item-img" width="360">
        </div>
        <ul class="descr-list">
          <li class="descr-list-item">
            <h3 class="title-item">Likes</h3>
            <p class="text-item">${likes}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Views</h3>
            <p class="text-item">${views}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Comments</h3>
            <p class="text-item">${comments}</p>
          </li>
          <li class="descr-list-item">
            <h3 class="title-item">Downloads</h3>
            <p class="text-item">${downloads}</p>
          </li>
        </ul>
      </a>
    `).join("");

    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
     galleryContainer.innerHTML = "";
}

export function showLoader() {
//   loader.style.display = 'block';
  loader.classList.add('is-active');
}

export function hideLoader() {
//   loader.style.display = 'none';
loader.classList.remove('is-active');
}