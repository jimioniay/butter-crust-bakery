import { GET_BANKS } from '../actionTypes';
import axios from '../../api';

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
  } catch (error) {
    dispatch({
      type: `${GET_BANKS}_ERROR`,
      payload: error,
    });
  }
};
export default getBanks;
