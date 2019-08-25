import { POST_TRANX_CLIENT } from '../actionTypes';
import axios from '../../api';
import { toast } from 'react-toastify';

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
    if (response.status) {
      dispatch({
        type: `${POST_TRANX_CLIENT}_SUCCESS`,
        payload: response.data,
      });
      toast.success(response.data.message);
    } else {
      dispatch({
        type: `${POST_TRANX_CLIENT}_ERROR`,
        payload: response.data,
      });
      toast.warn(response.data.message);
    }
  } catch (error) {
    dispatch({
      type: `${POST_TRANX_CLIENT}_ERROR`,
      payload: error.data || error,
    });
    toast.error(error.message);
  }
};

export default postTransferClient;
