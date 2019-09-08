import { combineReducers } from "redux";

import { FileExplorer } from "./modules/FileExplorer";
import { Navi } from "./modules/Navi";
import { Editor } from "./modules/Editor";
import { Compiler } from "./modules/Compiler";

export default combineReducers({
  Navi,
  FileExplorer,
  Editor,
  Compiler
});