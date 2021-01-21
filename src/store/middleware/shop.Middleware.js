import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SUBCATEGORIES,
  setCategories,
  setCatLoading,
  setProductLoading,
  setProducts,
  setSubCategories,
} from "../../actions/kants";
import Axios from "axios";

const ShopMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      store.dispatch(setCatLoading(true));
      if (action.id !== undefined) {
        Axios({
          method: "get",
          url: `/category/${action.id}`,
        })
          .then((response) => {
            store.dispatch(setCategories(response.data.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            store.dispatch(setCatLoading(false));
          });
        next(action);
        break;
      }
      next(action);
      break;
    }
    case GET_PRODUCTS: {
      store.dispatch(setProductLoading(true));
      Axios({
        method: "get",
        url: `/products/category/${action.categoryId}`,
      })
        .then((response) => {
          store.dispatch(setProducts(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => store.dispatch(setProductLoading(false)));
      next(action);
      break;
    }
    case GET_SUBCATEGORIES: {
      Axios({
        method: "get",
        url: `/products/subcategory/category/${action.categoryId}`,
      }).then((response) => {
        store.dispatch(setSubCategories(response.data.data));
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default ShopMiddleware;
