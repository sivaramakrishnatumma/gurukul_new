import { EVT_GET_USERS_LIST_SUCCESS } from "../actions/users.actions.types";

const initialState = {
  rows: [],
};

const usersReducer = (state = initialState, { type, value }: any) => {
  switch (type) {
    case EVT_GET_USERS_LIST_SUCCESS:

      return {
        ...state,
        rows: value.map((item: any) => ({ ...item, id: item.userId })),
      };

    default:
      return state;
  }
};

export default usersReducer;
