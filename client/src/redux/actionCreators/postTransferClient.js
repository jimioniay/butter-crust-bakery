import { POST_TRANX_CLIENT } from '../actionTypes';
import axios from '../../api';

const postTransferClient = (
  beneficary_name,
  beneficiary_description,
  account_number,
  bank_code,
) => async dispatch => {
  try {
    dispatch({
      type: `${POST_TRANX_CLIENT}_START`,
    });
    const response = await axios({
      method: 'POST',
      url: '/transfer/postTransactionClient',
      data: {
        bank_code: bank_code,
        name: beneficary_name,
        description: beneficiary_description,
        account_number: account_number,
      },
    });
    response.status
      ? dispatch({
          type: `${POST_TRANX_CLIENT}_SUCCESS`,
          payload: response.data,
        })
      : dispatch({
          type: `${POST_TRANX_CLIENT}_ERROR`,
          payload: response.data,
        });
  } catch (error) {
    dispatch({
      type: `${POST_TRANX_CLIENT}_ERROR`,
      payload: error.data || error,
    });
  }
};

export default postTransferClient;
