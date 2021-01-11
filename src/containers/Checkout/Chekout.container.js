import { connect } from "react-redux";
import { removeFromCart, emptyCart } from "../../actions/kants";
import Checkout from "../../components/Main/Checkout/Checkout";

const mapStateToProps = (state) => ({
  cart: state.products.cart,
  user: state.auth.user,
});
const mapDispatchToProps = {
  removeFromCart,
  emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
