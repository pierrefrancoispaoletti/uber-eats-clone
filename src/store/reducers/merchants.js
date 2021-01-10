import {
    SET_MERCHANTS,
  } from "../../actions/kants";
  
  const initialState = {
    merchants: undefined,
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_MERCHANTS: 
            return {
                ...state, 
                merchants: action.merchants,
            }
      default:
        return state;
    }
  }
  
  export default reducer;
  