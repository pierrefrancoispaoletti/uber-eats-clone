export const GET_MERCHANTS = "GET_MERCHANTS";
export const SET_MERCHANTS = "SET_MERCHANTS";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SET_USER = "SET_USER";

export const ADD_TO_CART = "ADD_TO_CART";
export const SET_CART = "SET_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";

export const getMerchants = (userAddress) => ({
  type: GET_MERCHANTS,
  userAddress,
});

export const setMerchants = (merchants) => ({
  type: SET_MERCHANTS,
  merchants,
});

export const login = (user) => ({
  type: LOGIN,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const setCart = (recordedCart) => ({
  type: SET_CART,
  recordedCart,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
