import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

import {getImagesByQuery} from "./js/pixabay-api";
import {createGallery, 
        clearGallery, 
        showLoader, 
        hideLoader, 
        showLoadMoreButton, 
        hideLoadMoreButton,
        refs
    } from "./js/render-functions";

    let page = 1;
    let currentQuery = "";
    let totalPages = 0;
    const perPage = 15;

form.addEventListener("submit", handleClick);

 async function handleClick(event) {
  event.preventDefault();

  currentQuery = event.target.elements['search-text'].value.trim();
  page = 1;
  
  showLoader(); 
  hideLoadMoreButton();
  clearGallery();
 

  if(currentQuery === "") {
    iziToast.error({
           message: "The search field cannot be empty",
            position: 'topRight',
            backgroundColor: '#c30d7dff',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
        return;
  }
  try {

    const data = await getImagesByQuery(currentQuery, page = 1);

    if(data.hits.length === 0) {
      iziToast.warning({
           message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight',
            backgroundColor: '#c30d7dff',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
    }

    createGallery(data.hits);

    totalPages = Math.ceil(data.totalHits / perPage);

    if(page < totalPages) {
      showLoadMoreButton();
    }
    
    
  

  } catch(error) {
      iziToast.error({
           message: "Ooooops! Something went wrong",
            position: 'topRight',
            backgroundColor: '#c30d7dff',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
  } finally {
    hideLoader();
  }
  
}

refs.btnLoadMore.addEventListener("click", loadMoreHandler);

async function loadMoreHandler() {
  page++;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);
    
    if(page < totalPages) {
      showLoadMoreButton();
    } else {
       iziToast.warning({
           message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
            backgroundColor: '#c30d7dff',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
    }

    const card = document.querySelector(".gallery-item");
    const cardSize = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardSize * 2,
      behavior: "smooth"
    })

  } catch(error) {
      iziToast.warning({
           message: `Error: ${error.message}`,
            position: 'topRight',
            backgroundColor: '#c30d7dff',
            progressBar: false,
            messageColor: "white",
            icon: "",
            iconUrl: new URL('./img/error.svg', import.meta.url).href,
            close: false
        })
  } finally {
    hideLoader();
  }
  
}


function foo() {
  // !!! прибрати
}














// function handleClick(event) {
//     event.preventDefault();
    
//     const inputValue = event.target.elements['search-text'].value.trim();
    
//     if(inputValue === "") {
//           iziToast.error({
//            message: "The search field cannot be empty",
//             position: 'topRight',
//             backgroundColor: '#ef4040',
//             progressBar: false,
//             messageColor: "white",
//             icon: "",
//             iconUrl: new URL('./img/error.svg', import.meta.url).href,
//             close: false
//         })
        
//         return;
//     }

//    clearGallery();
//    showLoader();
   

//     getImagesByQuery(inputValue)
//   .then(data => {
//     if(data.hits.length === 0) {
//       iziToast.warning({
//            message: "Sorry, there are no images matching your search query. Please try again!",
//             position: 'topRight',
//             backgroundColor: '#ef4040',
//             progressBar: false,
//             messageColor: "white",
//             icon: "",
//             iconUrl: new URL('./img/error.svg', import.meta.url).href,
//             close: false
//         })
//     }
//     createGallery(data.hits); 
//   })
//   .catch(error => {
//       iziToast.error({
//            message: "Ooooops! Something went wrong",
//             position: 'topRight',
//             backgroundColor: '#ef4040',
//             progressBar: false,
//             messageColor: "white",
//             icon: "",
//             iconUrl: new URL('./img/error.svg', import.meta.url).href,
//             close: false
//         })
//   })
//   .finally(() => {
//     hideLoader();
    
//   })
// }


