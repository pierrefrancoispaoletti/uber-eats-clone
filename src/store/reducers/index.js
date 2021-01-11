import { combineReducers } from "redux";
import merchants from "./merchants";
import auth from "./auth";
import products from "./products";

export default combineReducers({
    merchants,
    auth,
    products,
});
