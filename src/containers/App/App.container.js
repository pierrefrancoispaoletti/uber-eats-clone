import { connect } from "react-redux";
import { setUser, setCart } from "../../actions/kants";
import App from "../../components/App/App";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.products.cart,
});
const mapDispatchToProps = {
  setUser,
  setCart
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
