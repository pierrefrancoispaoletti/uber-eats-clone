import { combineReducers } from "redux";
import merchants from "./merchants";
import auth from "./auth";

export default combineReducers({
    merchants,
    auth,
});
