import { GET_BENEFICIARY_NAME } from '../actionTypes';
import axios from '../../api';
import { toast } from 'react-toastify';

const getBeneficiaryName = (account_number, bank_code) => async dispatch => {
  try {
    dispatch({
      type: `${GET_BENEFICIARY_NAME}_START`,
    });
    const response = await axios({
      method: 'GET',
      url: `/transfer/getBeneficiaryName?account_number=${account_number}&bank_code=${bank_code}`,
    });

    if (response.data.status) {
      dispatch({
        type: `${GET_BENEFICIARY_NAME}_SUCCESS`,
        payload: response.data,
      });
      toast.success(response.data.message);
    } else {
      dispatch({
        type: `${GET_BENEFICIARY_NAME}_ERROR`,
        payload: response.data,
      });
      toast.warn(response.data.message);
    }
  } catch (error) {
    dispatch({
      type: `${GET_BENEFICIARY_NAME}_ERROR`,
      payload: error,
    });
    toast.error(error.message);
  }
};
export default getBeneficiaryName;
