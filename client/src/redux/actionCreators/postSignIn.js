import { POST_SIGN_IN } from '../actionTypes';
import axios from '../../api';
import loading from '../util/loading';

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
    } else {
        dispatch(loading(POST_SIGN_IN, false));
      dispatch({
        type: `${POST_SIGN_IN}_ERROR`,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch(loading(POST_SIGN_IN, false));
    dispatch({
      type: `${POST_SIGN_IN}_ERROR`,
      payload: error.data || error,
    });
  }
};

export default postSignIn;
