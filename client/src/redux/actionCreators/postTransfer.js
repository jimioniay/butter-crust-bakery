import { POST_TRANX } from '../actionTypes';
import axios from '../././../api';

const postTransfer = ({
  description,
  amount,
  receipient,
  OTP,
}) => async dispatch => {
  try {
    dispatch({
      type: `${POST_TRANX}_START`,
    });
    const response = await axios({
      method: 'POST',
      url: '/transfer/postTransaction',
      data: {
        reason: description,
        amount: amount,
        receipient: receipient,
        OTP: OTP,
      },
    });
    response.status
      ? dispatch({
          type: `${POST_TRANX}_SUCCESS`,
          payload: response.data,
        })
      : dispatch({
          type: `${POST_TRANX}_ERROR`,
          payload: response,
        });
  } catch (error) {
    dispatch({
      type: `${POST_TRANX}_ERROR`,
      payload: error,
    });
  }
};

export default postTransfer;
