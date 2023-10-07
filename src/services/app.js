import axios from 'axios';

export const fetchPictures = async (searchString = '' , page = 1, perPage = 12) => {
  const SEARCH_IMAGES = 'https://pixabay.com/api/';
  const API_KEY = '38948666-72a52c33b9b70edb25ef78ef1';

  const params = {
    key: API_KEY,
    q: searchString,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: page,
  };
  const paramsURL = new URLSearchParams(params).toString();
  const { data } = await axios.get(`${SEARCH_IMAGES}?${paramsURL}`);

  return data;
};
