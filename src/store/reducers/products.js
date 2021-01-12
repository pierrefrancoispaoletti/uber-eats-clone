import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SET_CART,
  UPDATE_CART,
} from "../../actions/kants";

const initialState = {
  cart: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      let localCart = [];
      if (localStorage.cart) {
        localCart = JSON.parse(localStorage.getItem("cart"));
        localCart.push(action.item);
        localStorage.setItem("cart", JSON.stringify(localCart));
      }
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }
    case SET_CART:
      console.log(action.recordedCart);
      return {
        ...state,
        cart: [...state.cart, ...action.recordedCart],
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case REMOVE_FROM_CART: {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      let newLocalCart = localCart.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("cart", JSON.stringify(newLocalCart));
      console.log(localCart);
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `impossible de supprimer le produit (id: ${action.id}) il n'est pas dans le panier !`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case UPDATE_CART: {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      newCart[index].quantity = action.quantity;
      
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
}

export default reducer;
