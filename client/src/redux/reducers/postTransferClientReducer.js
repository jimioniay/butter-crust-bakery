import { POST_TRANX_CLIENT } from '../actionTypes';

const initialState = {
  status: false,
  spinner: false,
  message: '',
  data: {},
};

const postTransferClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_TRANX_CLIENT}_START`:
      return {
        ...state,
        spinner: true,
      };
    case `${POST_TRANX_CLIENT}_SUCCESS`:
      return {
        ...state,
        status: true,
        spinner: false,
        message: action.payload.message,
        data: action.payload.data,
      };
    case `${POST_TRANX_CLIENT}_ERROR`:
      return {
        ...state,
        status: false,
        spinner: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default postTransferClientReducer;
