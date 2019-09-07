import axios from 'axios';
import AuthServices from '../redux/util/authServices';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? `/api/v1`
    : process.env.REACT_APP_ENDPOINT_BASE_URL;

const instance = axios.create({
  baseURL,
});

let token = AuthServices.getToken();
instance.defaults.headers.common.Authorization = `Bearer ${token}`;

export default instance;
