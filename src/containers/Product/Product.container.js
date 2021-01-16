import { connect } from "react-redux";
import {
    setProductLoading
} from "../../actions/kants";
import Product from "../../components/Main/Shop/Products/Product/Product";

const mapStateToProps = (state) => ({
    products: state.shop.products,
    productLoader: state.shop.productLoader,
    subCategories: state.shop.subCategories
});
const mapDispatchToProps = {
    setProductLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
