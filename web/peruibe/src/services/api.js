import axios from 'axios'

const api = axios.create({
    baseURL: 'http://ftp.nodejs7605.kinghost.net:21086'
});

export default api;