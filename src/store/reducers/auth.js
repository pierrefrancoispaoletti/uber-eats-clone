import {
    SET_USER,
  } from "../../actions/kants";
  
  const initialState = {
    user: null,
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_USER: 

            return {
                ...state, 
                user: action.user,
            }
      default:
        return state;
    }
  }
  
  export default reducer;
  