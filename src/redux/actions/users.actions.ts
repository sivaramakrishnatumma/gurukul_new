import {
  EVT_ADD_USER,
  EVT_GET_USERS_LIST,
  EVT_UPDATE_USER,
} from "./users.actions.types";

const getListAction = () => ({
  type: EVT_GET_USERS_LIST,
});

const addAction = (data: any) => ({
  type: EVT_ADD_USER,
  value: data,
});

const updateAction = (data: any, id: string) => ({
  type: EVT_UPDATE_USER,
  value: { data, id },
});

export const UsersActions = {
  getListAction,
  addAction,
  updateAction,
};
