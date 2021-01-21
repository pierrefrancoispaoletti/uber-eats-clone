import { connect } from "react-redux";
import {
    getMerchants, 
    getCategories,
    getProducts,
} from "../../actions/kants";
import StoreManagement from "../../components/StoreManagement/StoreManagement";

const mapStateToProps = (state) => ({
    user: state.auth.user,
    categories: state.shop.categories,
});
const mapDispatchToProps = {
    getMerchants,
    getCategories,
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreManagement);
