import { combineReducers } from "redux";
import biblioItemsReducer from "./biblioItemsReducer";
import borrowersReducer from "./borrowersReducer";
import commonReducer from "./commonReducer";
import itemsReducer from "./itemsReducer";
import itemTypesReducer from "./itemTypesReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  commonReducer,
  itemType: itemTypesReducer,
  biblioItem: biblioItemsReducer,
  item: itemsReducer,
  user: usersReducer,
  borrower: borrowersReducer,
});

export default rootReducer;
