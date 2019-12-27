var apiKey;
import axios from 'axios'

//Configure axios for catapi framework
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = apiKey;

export async function getBreeds() {
    const res = await axios('/breeds');
    return res.data;
}
export async function getCatsImagesByBreed(breed_id, amount) {
    const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);
    
    console.table(res.data)
    return res.data;
}
