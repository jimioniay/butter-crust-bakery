import { POST_SIGN_UP } from '../actionTypes';
import loading from '../util/loading';
import axios from '../../api';
import { toast } from 'react-toastify';

const postSignUp = ({ name, email, password }) => async dispatch => {
  dispatch(loading(POST_SIGN_UP, true));
  try {
    const response = await axios({
      method: 'POST',
      url: 'user/signup',
      data: {
        name,
        email,
        password,
      },
    });

    if (response.data.status) {
      dispatch(loading(POST_SIGN_UP, false));
      dispatch({
        type: `${POST_SIGN_UP}_SUCCESS`,
        payload: response.data,
      });
      toast.success(response.data.message);
    } else {
      dispatch(loading(POST_SIGN_UP, false));
      dispatch({
        type: `${POST_SIGN_UP}_ERROR`,
        payload: response.data,
      });
      toast.warn(response.data.message);
    }
  } catch (error) {
    dispatch(loading(POST_SIGN_UP, false));
    dispatch({
      type: `${POST_SIGN_UP}_ERROR`,
      payload: error,
    });
    toast.error(error.message);
  }
};

export default postSignUp;
