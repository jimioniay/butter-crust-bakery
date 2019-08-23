import { SET_DESCRIPTION } from '../actionTypes';
const initialState = {
  description: '',
};

const setDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESCRIPTION:
      return {
        description: action.payload,
      };
    default:
      return state;
  }
};

export default setDescriptionReducer;
