const FILEEXPLOREROPEN = "FILEEXPLORER/OPEN";
const FILEEXPLORERSELECT = "FILEEXPLORER/SELECT";
const FILEEXPLORERFOCUS = "FILEEXPLORER/FOCUS";

const initialState = {
  files: [],
  selects: [],
  focusFile: '',
  basePath: ''
};

export function onFileExplorerOpen(files, basePath) {
  return {
    type: FILEEXPLOREROPEN,
    files: files, 
    basePath: basePath
  };
}

export function onFileExplorerSelect(files) {
  return {
    type: FILEEXPLORERSELECT,
    selects: files
  };
}

export function onFileFocus(focusFile) {
  return {
    type: FILEEXPLORERFOCUS,
    focusFile: focusFile
  }
}

export const FileExplorer = function(state = initialState, action) {
  switch (action.type) {
    case FILEEXPLOREROPEN:
      return {
        ...state,
        files: action.files,
        basePath: action.basePath
      };

    case FILEEXPLORERSELECT:
      return {
        ...state,
        selects: action.selects
      };

    case FILEEXPLORERFOCUS:
      return {
        ...state,
        focusFile: action.focusFile
      };

    default:
      return state;
  }
};
