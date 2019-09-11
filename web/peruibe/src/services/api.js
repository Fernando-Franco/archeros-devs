import axios from 'axios'

const api = axios.create({
    baseURL: 'URL_DO_BACKEND'
});

export default api;