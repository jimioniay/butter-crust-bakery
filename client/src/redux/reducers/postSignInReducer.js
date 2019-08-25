import { POST_SIGN_IN } from '../actionTypes';

const initialState = {
  status: false,
  message: '',
  token: '',
};

const postSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_SIGN_IN}_SUCCESS`:
      return {
        status: action.payload.status,
        message: action.payload.message,
        token: action.payload.token,
      };
    case `${POST_SIGN_IN}_ERROR`:
      return {
        status: action.payload.status,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default postSignInReducer;
