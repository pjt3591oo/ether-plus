const NAVISELECT = "NAVI/NAVISELECT";

const initialState = {
  selectedNavi: "1"
};

export function onNaviChange(navi) {
  return {
    type: NAVISELECT,
    selectedNavi: navi
  };
}

export const Navi = function(state = initialState, action) {
  switch (action.type) {
    case NAVISELECT:
      return {
        ...state,
        selectedNavi: action.selectedNavi
      };

    default:
      return state;
  }
};
