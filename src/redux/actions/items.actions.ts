import {
  EVT_ADD_ITEM,
  EVT_GET_ITEMS_LIST,
  EVT_UPDATE_ITEM,
} from "./items.actions.types";

const getListAction = () => ({
  type: EVT_GET_ITEMS_LIST,
});

const addAction = (data: any) => ({
  type: EVT_ADD_ITEM,
  value: data,
});

const updateAction = (data: any, id: string) => ({
  type: EVT_UPDATE_ITEM,
  value: { data, id },
});

export const ItemsActions = {
  getListAction,
  addAction,
  updateAction,
};
