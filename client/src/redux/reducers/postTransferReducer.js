import { POST_TRANX } from '../actionTypes';

const initialState = {
  status: false,
  spinner: false,
  message: '',
  data: {},
};

const postTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_TRANX}_START`:
      return {
        spinner: true,
        message: '',
        data: {
          status: '',
        },
      };
    case `${POST_TRANX}_SUCCESS`:
      return {
        spinner: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data,
      };
    case `${POST_TRANX}_ERROR`:
      return {
        spinner: false,
        status: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default postTransactionReducer;
