import axios from 'axios';
import {BASE_URL} from 'api/constants';

const API = axios.create({
  baseURL: BASE_URL,
});

API.defaults.params = {
  api_key: '28b3c7557f0205640b0baf8b83122f48',
};

export default API;
