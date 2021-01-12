import { connect } from "react-redux";
import { removeFromCart, emptyCart, updateCartQuantity } from "../../actions/kants";
import Checkout from "../../components/Main/Checkout/Checkout";

const mapStateToProps = (state) => ({
  cart: state.products.cart,
  user: state.auth.user,
});
const mapDispatchToProps = {
  removeFromCart,
  emptyCart,
  updateCartQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
