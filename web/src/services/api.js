import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack11-guilfer.herokuapp.com'
});

export default api;