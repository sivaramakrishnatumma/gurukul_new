import { combineReducers } from "redux";
import biblioItemsReducer from "./biblioItemsReducer";
import commonReducer from "./commonReducer";
import itemsReducer from "./itemsSaga";
import itemTypesReducer from "./itemTypesReducer";

const rootReducer = combineReducers({
  commonReducer,
  itemType: itemTypesReducer,
  biblioItem: biblioItemsReducer,
  item: itemsReducer,
});

export default rootReducer;
