import { connect } from "react-redux";
import {
    getCategories
} from "../../actions/kants";
import Shop from "../../components/Main/Shop/Shop";

const mapStateToProps = (state) => ({
    shops: state.merchants.merchants,
    categories: state.shop.categories,
    categoryLoader: state.shop.categoryLoader
});
const mapDispatchToProps = {
    getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
