import { connect } from "react-redux";
import { logout } from "../../actions/kants";
import Header from "../../components/Header/Header";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.products.cart,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
