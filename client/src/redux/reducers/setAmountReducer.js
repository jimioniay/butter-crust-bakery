import { SET_AMOUNT } from '../actionTypes';
const initialState = {
  status: false,
  data: { amountInKobo: 0, formattedAmount: 0 },
};

const setAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        status: true,
        data: {
          amountInKobo: action.payload.amountInKobo,
          formattedAmount: action.payload.formattedAmount,
        },
      };
    default:
      return state;
  }
};

export default setAmountReducer;
