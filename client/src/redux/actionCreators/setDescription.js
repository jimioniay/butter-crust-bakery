import { SET_DESCRIPTION } from '../actionTypes';
const setDescription = description => dispatch => {
  dispatch({
    type: SET_DESCRIPTION,
    payload: description,
  });
};

export default setDescription;
