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
      return {
        ...state,
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
        message: `An error occured while fetching banks  ${action.payload.message}`,
      };
    default:
      return state;
  }
};

export default getBanksReducer;
