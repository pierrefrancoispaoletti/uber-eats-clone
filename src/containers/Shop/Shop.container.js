import { connect } from "react-redux";
// import {
// } from "../../actions/kants";
import Shop from "../../components/Main/Shop/Shop";

const mapStateToProps = (state) => ({
    shops: state.merchants.merchants,
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
