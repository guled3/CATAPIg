var apiKey;
import axios from 'axios'



axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = apiKey;

export default axios;