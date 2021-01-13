import { GET_MERCHANTS, setLoading, setMerchants } from "../../actions/kants";
import Axios from "axios";

const merchantsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MERCHANTS: {
      store.dispatch(setLoading(true));
      Axios({
        method: "post",
        url: "/listAllMerchants",
        data: {
          gpsCoordinates: action.userAddress,
        },
      })
        .then((response) => {
          store.dispatch(setMerchants(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => store.dispatch(setLoading(false)));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default merchantsMiddleware;
