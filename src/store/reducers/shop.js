import {
  SET_CATEGORIES,
  SET_CATLOADING,
  SET_PRODUCTS,
  SET_PRODUCT_LOADING,
  SET_SUBCATEGORIES,
} from "../../actions/kants";

const initialState = {
  categories: [],
  products: [],
  subCategories: [],
  categoryLoader: false,
  productLoader: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_SUBCATEGORIES:
      return {
        ...state,
        subCategories: action.subCategories,
      };
    case SET_CATLOADING:
      return {
        ...state,
        categoryLoader: action.loading,
      };
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        productLoader: action.loading,
      };
      case SET_SUBCATEGORIES: 
      return {
          ...state,
          subCategories: action.subCategories
      }
    default:
      return state;
  }
}

export default reducer;
