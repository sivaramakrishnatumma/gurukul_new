import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
  EVT_TOGGLE_SIDE_NAV,
} from "../actions/common.actions.types";

const initialState = {
  menuOpen: false,
  loader: false,
  alert: null,
};

const commonReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_TOGGLE_SIDE_NAV:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    case EVT_SHOW_LOADER:
      return { ...state, loader: true, alert: null };

    case EVT_HIDE_LOADER:
      return { ...state, loader: false };

    case EVT_SHOW_ERROR:
      return { ...state, alert: { type: "error", msg: value } };

    default:
      return state;
  }
};

export default commonReducer;
