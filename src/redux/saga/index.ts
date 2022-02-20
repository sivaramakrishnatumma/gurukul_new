import { takeEvery } from "redux-saga/effects";
import {
  EVT_ADD_BIBLIO_ITEM,
  EVT_GET_BIBLIO_ITEMS_LIST,
  EVT_UPDATE_BIBLIO_ITEM,
} from "../actions/biblio-items.actions.types";
import {
  EVT_ADD_ITEM_TYPE,
  EVT_GET_ITEM_TYPES_LIST,
  EVT_UPDATE_ITEM_TYPE,
} from "../actions/item-types.actions.types";
import {
  EVT_ADD_ITEM,
  EVT_GET_ITEMS_LIST,
  EVT_UPDATE_ITEM,
} from "../actions/items.actions.types";
import {
  EVT_ADD_USER,
  EVT_GET_USERS_LIST,
  EVT_UPDATE_USER,
} from "../actions/users.actions.types";
import {
  addBiblioItemSaga,
  getBiblioItemsSaga,
  updateBiblioItemSaga,
} from "./biblioItemsSaga";
import { addItemSaga, getItemsSaga, updateItemSaga } from "./itemsSaga";
import {
  addItemTypeSaga,
  getItemTypesSaga,
  updateItemTypeSaga,
} from "./itemTypesSaga";
import { addUserSaga, getUsersSaga, updateUserSaga } from "./usersSaga";

export function* rootSaga() {
  yield takeEvery(EVT_GET_ITEM_TYPES_LIST, getItemTypesSaga);
  yield takeEvery(EVT_ADD_ITEM_TYPE, addItemTypeSaga);
  yield takeEvery(EVT_UPDATE_ITEM_TYPE, updateItemTypeSaga);

  yield takeEvery(EVT_GET_BIBLIO_ITEMS_LIST, getBiblioItemsSaga);
  yield takeEvery(EVT_ADD_BIBLIO_ITEM, addBiblioItemSaga);
  yield takeEvery(EVT_UPDATE_BIBLIO_ITEM, updateBiblioItemSaga);

  yield takeEvery(EVT_GET_ITEMS_LIST, getItemsSaga);
  yield takeEvery(EVT_ADD_ITEM, addItemSaga);
  yield takeEvery(EVT_UPDATE_ITEM, updateItemSaga);

  yield takeEvery(EVT_GET_USERS_LIST, getUsersSaga);
  yield takeEvery(EVT_ADD_USER, addUserSaga);
  yield takeEvery(EVT_UPDATE_USER, updateUserSaga);
}
