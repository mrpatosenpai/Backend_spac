import axios from 'axios';

const api = axios.create({
    baseURL: 'http://<tu-servidor>:3000',
});

export default api;