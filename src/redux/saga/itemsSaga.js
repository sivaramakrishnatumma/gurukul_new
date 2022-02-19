import { call, put } from "redux-saga/effects";
import { history } from "../../history";
import {
  addItemService,
  getItemsService,
  updateItemService,
} from "../../services/ItemsService";
import { handleValidationError } from "../../utils/utility_fns";
import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
} from "../actions/common.actions.types";
import { EVT_GET_ITEMS_LIST_SUCCESS } from "../actions/items.actions.types";

export function* getItemsSaga() {
  try {
    // Showing loader while getting item types list
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(getItemsService);
    if (response.statusCode === 200) {
      yield put({
        type: EVT_GET_ITEMS_LIST_SUCCESS,
        value: response.result,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put({ type: EVT_HIDE_LOADER });
  }
}

export function* addItemSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(addItemService, value);
    if (response.statusCode === 200) {
      history.push("items-manangement");
      yield put({ type: EVT_HIDE_LOADER });
    }
  } catch (error) {
    console.error(error);
    const msg = handleValidationError(error.response);
    if (msg) {
      yield put({ type: EVT_SHOW_ERROR, value: msg });
    }

    yield put({ type: EVT_HIDE_LOADER });
  }
}

export function* updateItemSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(updateItemService, value.data, value.id);
    if (response.statusCode === 200) {
      history.push("items-manangement");
      yield put({ type: EVT_HIDE_LOADER });
    }
  } catch (error) {
    console.error(error);
    const msg = handleValidationError(error.response);
    if (msg) {
      yield put({ type: EVT_SHOW_ERROR, value: msg });
    }

    yield put({ type: EVT_HIDE_LOADER });
  }
}
