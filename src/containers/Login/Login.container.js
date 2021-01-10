import { connect } from "react-redux";
import {
    login
} from "../../actions/kants";
import Login from "../../components/Login/Login";

const mapStateToProps = (state) => ({
    user: state.auth.user,
});
const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
