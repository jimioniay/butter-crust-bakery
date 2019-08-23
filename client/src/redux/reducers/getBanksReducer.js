import { GET_BANKS } from '../actionTypes';

const initialState = {
  spinner: false,
  status: false,
  message: '',
  bankList: [],
};

const getBanksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BANKS}_START`:
      return {
        bankList: [],
        spinner: true,
      };
    case `${GET_BANKS}_SUCCESS`:
      return {
        spinner: false,
        status: true,
        message: action.payload.message,
        bankList: action.payload.data,
      };
    case `${GET_BANKS}_ERROR`:
      return {
        ...state,
        spinner: false,
        status: false,
        message: 'An error occured while fetching banks',
      };
    default:
      return state;
  }
};

export default getBanksReducer;
