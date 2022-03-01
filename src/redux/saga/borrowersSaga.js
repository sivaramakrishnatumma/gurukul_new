import { call, put } from "redux-saga/effects";
import { PAGES } from "../../constants/config";
import { history } from "../../history";
import { generateServices } from "../../services/DataService";
import { handleValidationError } from "../../utils/utility_fns";
import {
  EVT_HIDE_LOADER,
  EVT_SHOW_ERROR,
  EVT_SHOW_LOADER,
} from "../actions/common.actions.types";
import { EVT_GET_BORROWERS_LIST_SUCCESS } from "../actions/borrowers.actions.types";

const service = generateServices(PAGES.BORROWER);

export function* getBorrowersSaga() {
  try {
    // Showing loader while getting item types list
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(service.getDataService);
    if (response.statusCode === 200) {
      yield put({
        type: EVT_GET_BORROWERS_LIST_SUCCESS,
        value: response.result,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put({ type: EVT_HIDE_LOADER });
  }
}

export function* addBorrowerSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(service.addDataService, value);
    if (response.statusCode === 200) {
      history.push("borrowers-manangement");
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

export function* updateBorrowerSaga({ value }) {
  try {
    // Showing loader while creating new item type
    yield put({ type: EVT_SHOW_LOADER });

    const response = yield call(
      service.updateDataService,
      value.data,
      value.id
    );
    if (response.statusCode === 200) {
      history.push("borrowers-manangement");
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
