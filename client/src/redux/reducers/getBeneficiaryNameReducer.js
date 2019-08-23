import { GET_BENEFICIARY_NAME } from '../actionTypes';

const initialState = {
  status: false,
  message: '',
  spinner: false,
  data: {
    account_no: '',
    account_name: '',
  },
};

const getBeneficiaryNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BENEFICIARY_NAME}_START`:
      return {
        ...state,
        spinner: true,
      };
    case `${GET_BENEFICIARY_NAME}_SUCCESS`:
      return {
        status: true,
        spinner: false,
        message: action.payload.message,
        data: action.payload.data,
      };
    case `${GET_BENEFICIARY_NAME}_ERROR`:
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

export default getBeneficiaryNameReducer;
