import { EVT_TOGGLE_SIDE_NAV } from "../actions/common.action-types";

const initialState = {
  menuOpen: false,
};

const commonReducer = function (state = initialState, { type, value }) {
  switch (type) {
    case EVT_TOGGLE_SIDE_NAV:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
};

export default commonReducer;
