import { combineReducers } from "redux";
import merchants from "./merchants";
import auth from "./auth";
import products from "./products";
import shop from "./shop";
import components from "./components";

export default combineReducers({
    merchants,
    auth,
    products,
    shop,
    components,
});
