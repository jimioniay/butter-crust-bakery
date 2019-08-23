import { SELECTED_BANK } from '../actionTypes';
const initialState = {
  selectedBank: {
    bank_code: '',
    bank_name: '',
  },
};

const selectedBankReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_BANK:
      return {
        selectedBank: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default selectedBankReducer;
