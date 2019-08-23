import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? `/api/v1`
    : process.env.REACT_APP_ENDPOINT_BASE_URL;

const instance = axios.create({
  baseURL,
});

export default instance;
