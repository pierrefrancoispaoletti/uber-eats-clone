import { connect } from "react-redux";
// import {
// } from "../../actions/kants";
import Main from "../../components/Main/Main/Main";

const mapStateToProps = (state) => ({
    shops: state.merchants.merchants,
    user: state.auth.user
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
