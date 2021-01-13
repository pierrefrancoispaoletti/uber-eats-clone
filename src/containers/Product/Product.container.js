import { connect } from "react-redux";
import {
    getProducts,
    getSubCategories
} from "../../actions/kants";
import Product from "../../components/Main/Shop/Products/Product/Product";

const mapStateToProps = (state) => ({
    products: state.shop.products,
    productLoader: state.shop.productLoader,
});
const mapDispatchToProps = {
    getProducts,
    getSubCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
