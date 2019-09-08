import MainNaviDetail from "../components/MainNaviDetail";
import { connect } from "react-redux";

import { onNaviChange } from "../store/modules/Navi";
import { 
  onFileExplorerOpen, 
  onFileExplorerSelect, 
  onFileFocus 
} from "../store/modules/FileExplorer";

import { onUpdateVersion } from "../store/modules/Compiler";

const mapStateToProps = ({Navi, FileExplorer, Compiler}) => {
  return {
    selectedNavi: Navi.selectedNavi,
    files: FileExplorer.files,
    selects: FileExplorer.selects,
    basePath: FileExplorer.basePath,
    compilerVersion: Compiler.compilerVersion
  };
};

const MainContainer = connect(
  mapStateToProps,
  { onNaviChange,
    onFileExplorerOpen,
    onFileExplorerSelect,
    onFileFocus,
    onUpdateVersion}
)(MainNaviDetail);

export default MainContainer;