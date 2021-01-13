import { connect } from "react-redux";
import {
    addToCart
} from "../../actions/kants";
import ProductModal from "../../components/Main/Shop/Products/Product/ProductModal";

const mapStateToProps = (state) => ({
 cart: state.products.cart,
 subCategories: state.shop.subCategories,
});
const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
