import { combineReducers } from "redux";
import biblioItemsReducer from "./biblioItemsReducer";
import commonReducer from "./commonReducer";
import itemsReducer from "./itemsReducer";
import itemTypesReducer from "./itemTypesReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  commonReducer,
  itemType: itemTypesReducer,
  biblioItem: biblioItemsReducer,
  item: itemsReducer,
  user: usersReducer
});

export default rootReducer;
