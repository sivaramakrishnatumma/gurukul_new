import { call, put } from "redux-saga/effects";
import { history } from "../../history";
import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
} from "../actions/common.actions.types";
import { EVT_GET_BIBLIO_ITEMS_LIST_SUCCESS } from "../actions/biblio-items.actions.types";
import { handleValidationError } from "../../utils/utility_fns";
import { PAGES } from "../../constants/config";
import { generateServices } from "../../services/DataService";

const service = generateServices(PAGES.BIBLIO_ITEM);

export function* getBiblioItemsSaga() {
  try {
    // Showing loader while getting item types list
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(service.getDataService);
    if (response.statusCode === 200) {
      yield put({
        type: EVT_GET_BIBLIO_ITEMS_LIST_SUCCESS,
        value: response.result,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put({ type: EVT_HIDE_LOADER });
  }
}

export function* addBiblioItemSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(service.addDataService, value);
    if (response.statusCode === 200) {
      history.push("biblio-items-manangement");
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

export function* updateBiblioItemSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(
      service.updateDataService,
      value.data,
      value.id
    );
    if (response.statusCode === 200) {
      history.push("biblio-items-manangement");
      yield put({ type: EVT_HIDE_LOADER });
    }
  } catch (error) {
    const msg = handleValidationError(error.response);
    if (msg) {
      yield put({ type: EVT_SHOW_ERROR, value: msg });
    }

    yield put({ type: EVT_HIDE_LOADER });
  }
}
