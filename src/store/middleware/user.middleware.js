import { LOGIN, setUser } from "../../actions/kants";
import Axios from "axios";

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log(action.user)
      Axios.post("/login", action.user)
        .then((response) => {
            console.log(response)
            store.dispatch(setUser(response.data.data));
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
