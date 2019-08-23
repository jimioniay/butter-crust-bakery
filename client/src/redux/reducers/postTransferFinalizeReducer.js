import { POST_TRANX_FINALIZE } from '../actionTypes';

const initialState = {
  status: false,
  message: '',
  data: {},
  spinner: false,
};

const postTransferFinalizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_TRANX_FINALIZE}_START`:
      return {
        message: '',
        spinner: true,
      };
    case `${POST_TRANX_FINALIZE}_SUCCESS`:
      return {
        spinner: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data,
      };
    case `${POST_TRANX_FINALIZE}_ERROR`:
      return {
        spinner: false,
        status: false,
        message:
          action.payload.message === undefined
            ? action.payload
            : action.payload.message,
      };
    default:
      return state;
  }
};

export default postTransferFinalizeReducer;
