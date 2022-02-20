import { EVT_GET_ITEM_TYPES_LIST_SUCCESS } from "../actions/item-types.actions.types";

const initialState = {
  rows: [],
};

const itemTypesReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_GET_ITEM_TYPES_LIST_SUCCESS:
      return {
        ...state,
        rows: value,
      };

    default:
      return state;
  }
};

export default itemTypesReducer;
