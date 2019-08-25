const initialState = {
  load: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type.includes('LOADING')) {
    case true:
      return {
        ...state,
        load: action.status,
      };
    default:
      return state;
  }
};

export default loadingReducer;
