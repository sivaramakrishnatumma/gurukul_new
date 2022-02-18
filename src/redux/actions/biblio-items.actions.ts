import {
  EVT_ADD_BIBLIO_ITEM,
  EVT_GET_BIBLIO_ITEMS_LIST,
  EVT_UPDATE_BIBLIO_ITEM,
} from "./biblio-items.actions.types";

const getListAction = () => ({
  type: EVT_GET_BIBLIO_ITEMS_LIST,
});

const addAction = (data: any) => ({
  type: EVT_ADD_BIBLIO_ITEM,
  value: data,
});

const updateAction = (data: any, id: string) => ({
  type: EVT_UPDATE_BIBLIO_ITEM,
  value: { data, id },
});

export const BiblioItemsActions = {
  getListAction,
  addAction,
  updateAction,
};
