import { POST_SIGN_IN } from '../actionTypes';
import axios from '../../api';
import loading from '../util/loading';
import { toast } from 'react-toastify';

const postSignIn = ({ email, password }) => async dispatch => {
  try {
    dispatch(loading(POST_SIGN_IN, true));
    const response = await axios({
      method: 'POST',
      url: 'user/signin',
      data: {
        email,
        password,
      },
    });
    if (response.data.status) {
      dispatch(loading(POST_SIGN_IN, false));
      dispatch({
        type: `${POST_SIGN_IN}_SUCCESS`,
        payload: response.data,
      });
      toast.success(response.data.message);
    } else {
      dispatch(loading(POST_SIGN_IN, false));
      dispatch({
        type: `${POST_SIGN_IN}_ERROR`,
        payload: response.data,
      });
      toast.warn(response.data.message);
    }
  } catch (error) {
    dispatch(loading(POST_SIGN_IN, false));
    dispatch({
      type: `${POST_SIGN_IN}_ERROR`,
      payload: error.data || error,
    });
    toast.error(error.message);
  }
};

export default postSignIn;
