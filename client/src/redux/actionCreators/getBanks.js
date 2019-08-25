import { GET_BANKS } from '../actionTypes';
import axios from '../../api';
import { toast } from 'react-toastify';

const getBanks = () => async dispatch => {
  try {
    dispatch({
      type: `${GET_BANKS}_START`,
    });
    const response = await axios({
      method: 'GET',
      url: '/transfer/getBanks',
    });
    dispatch({
      type: `${GET_BANKS}_SUCCESS`,
      payload: response.data,
    });
    toast.success(response.data.message);
  } catch (error) {
    dispatch({
      type: `${GET_BANKS}_ERROR`,
      payload: error,
    });
    toast.error(error.message);
  }
};
export default getBanks;
