import { GET_BENEFICIARY_NAME } from '../actionTypes';
import axios from '../../api';

const getBeneficiaryName = (account_number, bank_code) => async dispatch => {
  try {
    dispatch({
      type: `${GET_BENEFICIARY_NAME}_START`,
    });
    const response = await axios({
      method: 'GET',
      url: `/transfer/getBeneficiaryName?account_number=${account_number}&bank_code=${bank_code}`,
    });

    response.data.status
      ? dispatch({
          type: `${GET_BENEFICIARY_NAME}_SUCCESS`,
          payload: response.data,
        })
      : dispatch({
          type: `${GET_BENEFICIARY_NAME}_ERROR`,
          payload: response.data,
        });
  } catch (error) {
    dispatch({
      type: `${GET_BENEFICIARY_NAME}_ERROR`,
      payload: error,
    });
  }
};
export default getBeneficiaryName;
