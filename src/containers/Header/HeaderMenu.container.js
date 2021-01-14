import { connect } from "react-redux";
import { setVisible } from "../../actions/kants";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  visible: state.components.visible,
});
const mapDispatchToProps = {
  setVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
