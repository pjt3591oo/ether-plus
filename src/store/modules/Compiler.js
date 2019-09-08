const COMPILERSETVERSION = "COMPILER/SETVERSION";

const initialState = {
  compilerVersion: ''
};

export function onUpdateVersion(version) {
  return {
    type: COMPILERSETVERSION,
    version: version, 
  };
}

export const Compiler = function(state = initialState, action) {
  switch (action.type) {
    case COMPILERSETVERSION:
      return {
        ...state,
        compilerVersion: action.version,
      };

    default:
      return state;
  }
};
