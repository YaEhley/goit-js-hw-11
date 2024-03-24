import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function searchImages(userQuery) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = `?key=43045712-2af2c0632fda7941642b98154&q=${userQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
    const URL = BASE_URL + END_POINT + PARAMS;
    return fetch(URL)
        .then(res => res.json())
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    messageColor: 'white',
                    position: 'topRight',
                    backgroundColor: 'red',
                    progressBar: false,
                    close: false,
                    closeOnClick: true,
                    message: 'Sorry, there are no images matching youre search query. Please, try again!',
                });
            }
            return data;
        });
}