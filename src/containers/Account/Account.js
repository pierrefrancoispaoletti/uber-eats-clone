import { connect } from "react-redux";
// import {
//   getMerchants
// } from "../../actions/kants";
import Account from "../../components/Account/Account";

const mapStateToProps = (state) => ({
    user: state.auth.user,
});
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
