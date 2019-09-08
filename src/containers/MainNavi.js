import MainNavi from "../components/MainNavi";
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
)(MainNavi);

export default MainContainer;