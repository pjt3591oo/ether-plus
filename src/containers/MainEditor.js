import MainEditor from "../components/MainEditor";
import { connect } from "react-redux";

import { onNaviChange } from "../store/modules/Navi";
import { 
  onFileFocus,
  onFileExplorerSelect
} from "../store/modules/FileExplorer";

import { onCodeOpen } from "../store/modules/Editor"

const mapStateToProps = ({Navi, FileExplorer, Editor}) => {
  return {
    selectedNavi: Navi.selectedNavi,
    selects: FileExplorer.selects,
    code: Editor.code,
    basePath: FileExplorer.basePath,
    focusFile: FileExplorer.focusFile,
    files: FileExplorer.files
  };
};

const MainContainer = connect(
  mapStateToProps,
  { onNaviChange,
    onFileFocus,
    onCodeOpen,
    onFileExplorerSelect
    }
)(MainEditor);

export default MainContainer;