import { SELECTED_BANK } from '../actionTypes';
const selectedBank = (bank, cb) => dispatch => {
  dispatch({
    type: SELECTED_BANK,
    payload: bank,
  });
};

export default selectedBank;
