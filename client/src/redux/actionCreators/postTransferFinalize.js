import { POST_TRANX_FINALIZE } from '../actionTypes';
import axios from '../../api';

const postTransferFinalize = ({ otp, transfer_code }) => async dispatch => {
  try {
    dispatch({
      type: `${POST_TRANX_FINALIZE}_START`,
    });
    const response = await axios({
      method: 'POST',
      url: '/transfer/postTransactionFinalize',
      data: {
        otp,
        transfer_code,
      },
    });
    console.log(response);
    response.data.status
      ? dispatch({
          type: `${POST_TRANX_FINALIZE}_SUCCESS`,
          payload: response.data,
        })
      : dispatch({
          type: `${POST_TRANX_FINALIZE}_ERROR`,
          payload: response.data,
        });
  } catch (error) {
    dispatch({
      type: `${POST_TRANX_FINALIZE}_ERROR`,
      payload: error,
    });
  }
};

export default postTransferFinalize;
