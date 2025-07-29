import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "51359402-e1cf81f867165d4b6bb985455";
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {

    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page
        };

   try {

     const { data } = await axios(BASE_URL, { params });

    return data;

   } catch(error) {
    //  iziToast.error({
    //        message: "Ooooops! Something went wrong",
    //         position: 'topRight',
    //         backgroundColor: '#c30d7dff',
    //         progressBar: false,
    //         messageColor: "white",
    //         icon: "",
    //         iconUrl: new URL('../img/error.svg', import.meta.url).href,
    //         close: false
    //     });
        throw error;
   }
}