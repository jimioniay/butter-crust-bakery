import { GET_BANKS } from '../actionTypes';

const initialState = {
  spinner: false,
  status: false,
  message: '',
  bankList: [{}],
};

const getBanksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BANKS}_START`:
      return {
        ...state,
        spinner: true,
      };
    case `${GET_BANKS}_SUCCESS`:
      const banks = action.payload.data;
      banks.unshift({
        name: 'Choose...',
        code: '',
      });
      return {
        ...state,
        spinner: false,
        status: true,
        message: action.payload.message,
        bankList: banks,
      };
    case `${GET_BANKS}_ERROR`:
      return {
        ...state,
        spinner: false,
        status: false,
        message: `An error occured while fetching banks  ${action.payload.message}`,
      };
    default:
      return state;
  }
};

export default getBanksReducer;
