import { EVT_GET_BORROWERS_LIST_SUCCESS } from "../actions/borrowers.actions.types";

const initialState = {
  rows: [],
};

const borrowersReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_GET_BORROWERS_LIST_SUCCESS:
      return {
        ...state,
        rows: value,
      };

    default:
      return state;
  }
};

export default borrowersReducer;
