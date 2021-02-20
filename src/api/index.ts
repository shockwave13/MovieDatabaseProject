import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

API.defaults.params = {
  api_key: '28b3c7557f0205640b0baf8b83122f48',
};

export default API;
