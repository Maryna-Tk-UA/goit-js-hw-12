import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

import {getImagesByQuery} from "./js/pixabay-api";
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";

form.addEventListener("submit", handleClick);

function handleClick(event) {
    event.preventDefault();
    
    const inputValue = event.target.elements['search-text'].value.trim();
    
    if(inputValue === "") {
          iziToast.error({
           message: "The search field cannot be empty",
            position: 'topRight',
            backgroundColor: '#ef4040',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
        return;
    }

   clearGallery();
   showLoader();

    getImagesByQuery(inputValue)
  .then(data => {
    if(data.hits.length === 0) {
      iziToast.warning({
           message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight',
            backgroundColor: '#ef4040',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
    }
    createGallery(data.hits); 
  })
  .catch(error => {
      iziToast.error({
           message: "Ooooops! Something went wrong",
            position: 'topRight',
            backgroundColor: '#ef4040',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
  })
  .finally(() => {
    hideLoader();
  })


}