import { POST_SIGN_UP } from '../actionTypes';
import loading from '../util/loading';
import axios from '../../api';

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
    } else {
      dispatch(loading(POST_SIGN_UP, false));
      dispatch({
        type: `${POST_SIGN_UP}_ERROR`,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch(loading(POST_SIGN_UP, false));
    dispatch({
      type: `${POST_SIGN_UP}_ERROR`,
      payload: error,
    });
  }
};

export default postSignUp;
