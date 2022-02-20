import { EVT_GET_ITEMS_LIST_SUCCESS } from "../actions/items.actions.types";

const initialState = {
  rows: [],
};

const itemsReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_GET_ITEMS_LIST_SUCCESS:
      return {
        ...state,
        rows: value,
      };

    default:
      return state;
  }
};

export default itemsReducer;
