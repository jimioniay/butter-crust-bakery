import { SET_AMOUNT } from '../actionTypes';
const setAmount = amount => dispatch => {
  dispatch({
    type: SET_AMOUNT,
    payload: {
      amountInKobo: parseInt(amount) * 100,
      formattedAmount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      }).format(amount),
    },
  });
};

export default setAmount;
