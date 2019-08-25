import { POST_SIGN_UP } from '../actionTypes';

const initialState = {
  status: false,
  message: '',
  data: {},
};

const postSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_SIGN_UP}_SUCCESS`:
      return {
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data,
      };

    case `${POST_SIGN_UP}_ERROR`:
      return {
        status: action.payload.status,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default postSignUpReducer;
