import { connect } from "react-redux";
import {
  getMerchants
} from "../../actions/kants";
import AddressComponent from "../../components/Main/AdressComponent/AdressComponent";

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {
    getMerchants,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent);
