const EDITOROPEN = "EDITOR/OPEN";


const initialState = {
  code: ''
};

export function onCodeOpen(code) {
  return {
    type: EDITOROPEN,
    code: code, 
  };
}

export const Editor = function(state = initialState, action) {
  switch (action.type) {
    case EDITOROPEN:
      return {
        ...state,
        code: action.code,
      };

    default:
      return state;
  }
};
