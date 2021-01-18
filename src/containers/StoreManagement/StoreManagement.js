import { connect } from "react-redux";
import {
    getMerchants, 
} from "../../actions/kants";
import StoreManagement from "../../components/StoreManagement/StoreManagement";

const mapStateToProps = (state) => ({
    user: state.auth.user,
});
const mapDispatchToProps = {
    getMerchants,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreManagement);
