import {
  EVT_ADD_ITEM_TYPE,
  EVT_GET_ITEM_TYPES_LIST,
  EVT_UPDATE_ITEM_TYPE,
} from "./item-types.actions.types";

const getListAction = () => ({
  type: EVT_GET_ITEM_TYPES_LIST,
});

const addAction = (data: any) => ({
  type: EVT_ADD_ITEM_TYPE,
  value: data,
});

const updateAction = (data: any, id: string) => ({
  type: EVT_UPDATE_ITEM_TYPE,
  value: { data, id },
});

export const ItemTypesActions = {
  getListAction,
  addAction,
  updateAction,
};
