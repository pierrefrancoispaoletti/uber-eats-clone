import { connect } from "react-redux";
import {
    removeFromCart,
    emptyCart,
    updateCartQuantity,
} from "../../actions/kants";
import Payment from "../../components/Payment/Payment";

const mapStateToProps = (state) => ({
    user: state.auth.user,
    cart: state.products.cart,
});
const mapDispatchToProps = {
    removeFromCart,
    emptyCart,
    updateCartQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
