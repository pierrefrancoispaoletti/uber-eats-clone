import { LOGIN, LOGOUT, setUser } from "../../actions/kants";
import Axios from "axios";

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      Axios.post("/login", action.user)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          store.dispatch(setUser(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOGOUT: {
      Axios.get("/logout")
        .then((response) => {
          localStorage.removeItem("user");
          localStorage.removeItem("cart");
          store.dispatch(setUser(null));
          window.location.href = "/login";
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
