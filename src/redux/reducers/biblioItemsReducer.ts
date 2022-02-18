import { EVT_GET_BIBLIO_ITEMS_LIST_SUCCESS } from "../actions/biblio-items.actions.types";

const initialState = {
  rows: [],
};

const biblioItemsReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_GET_BIBLIO_ITEMS_LIST_SUCCESS:
      console.log(state);
      return {
        ...state,
        rows: value,
      };

    default:
      return state;
  }
};

export default biblioItemsReducer;
