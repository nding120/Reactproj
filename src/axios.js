import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:2000'
});

export default instance;