import {
    SET_VISIBLE,
  } from "../../actions/kants";
  
  const initialState = {
    visible: false,
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_VISIBLE: 

            return {
                ...state, 
                visible: action.visible,
            }
      default:
        return state;
    }
  }
  
  export default reducer;
  