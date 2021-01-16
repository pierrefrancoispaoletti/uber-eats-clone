import { connect } from "react-redux";
import {
    getCategories, getProducts
} from "../../actions/kants";
import Shop from "../../components/Main/Shop/Shop";

const mapStateToProps = (state) => ({
    shops: state.merchants.merchants,
    categories: state.shop.categories,
    categoryLoader: state.shop.categoryLoader,
});
const mapDispatchToProps = {
    getCategories,
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
