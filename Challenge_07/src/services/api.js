import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.23.150.156:3333',
});

export default api;
