import { SET_LOADING, SET_MERCHANTS } from "../../actions/kants";

const initialState = {
  merchants: undefined,
  loading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MERCHANTS:
      return {
        ...state,
        merchants: action.merchants,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}

export default reducer;
