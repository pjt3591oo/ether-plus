import MainLog from "../components/MainLog";
import { connect } from "react-redux";

import { onNaviChange } from "../store/modules/Navi";

const mapStateToProps = ({Navi}) => {
  return {
    selectedNavi: Navi.selectedNavi
  };
};

const MainContainer = connect(
  mapStateToProps,
  { onNaviChange }
)(MainLog);

export default MainContainer;