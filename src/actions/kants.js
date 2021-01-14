export const GET_MERCHANTS = "GET_MERCHANTS";
export const SET_MERCHANTS = "SET_MERCHANTS";

export const SET_VISIBLE = "SET_VISIBLE" // HEADER MENU FAIRE DESCENDRE DEPUIS APP

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const SET_USER = "SET_USER";

export const ADD_TO_CART = "ADD_TO_CART";
export const SET_CART = "SET_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const UPDATE_CART = "UPDATE_CART";

export const SET_LOADING = "SET_LOADING";
export const SET_CATLOADING = "SET_CATLOADING";
export const SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING"

export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_SUBCATEGORIES ="GET_SUBCATEGORIES";
export const SET_SUBCATEGORIES = "SET_SUBCATEGORIES";

export const getMerchants = (userAddress) => ({
  type: GET_MERCHANTS,
  userAddress,
});

export const setMerchants = (merchants) => ({
  type: SET_MERCHANTS,
  merchants,
});

export const setVisible = (visible) => ({
  type: SET_VISIBLE,
  visible
})

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
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const updateCartQuantity = (id, quantity) => ({
  type: UPDATE_CART,
  id,
  quantity,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const setCatLoading = (loading) => ({
  type: SET_CATLOADING,
  loading,
});

export const setProductLoading = (loading) => ({
  type: SET_PRODUCT_LOADING,
  loading,
});

//SHOP

export const getCategories = (id) => ({
  type: GET_CATEGORIES,
  id,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const getProducts = (categoryId) => ({
  type: GET_PRODUCTS,
  categoryId,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const getSubCategories = (categoryId) => ({
  type:GET_SUBCATEGORIES,
  categoryId,
})

export const setSubCategories = (subCategories) => ({
  type: SET_SUBCATEGORIES,
  subCategories,
});
