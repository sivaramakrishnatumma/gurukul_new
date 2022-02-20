import { biblioItemColumnConfig } from "../forms-config/biblio-items";
import { itemTypeColumnConfig } from "../forms-config/item-types";
import { itemColumnConfig } from "../forms-config/items";
import { userColumnConfig } from "../forms-config/users";
import { BiblioItemsActions } from "../redux/actions/biblio-items.actions";
import { ItemTypesActions } from "../redux/actions/item-types.actions";
import { ItemsActions } from "../redux/actions/items.actions";
import { UsersActions } from "../redux/actions/users.actions";
import { generateServices } from "../services/DataService";
import { IFieldConfig } from "./types";

export const BASE_URL = "https://gurukulapi-dev.azurewebsites.net/api/v1";

export const PAGES = {
  ITEM_TYPE: "itemType",
  BIBLIO_ITEM: "biblioItem",
  ITEM: "item",
  USER: "user"
};

export const API_URLS = {
  [PAGES.ITEM_TYPE]: BASE_URL + "/ItemType",
  [PAGES.BIBLIO_ITEM]: BASE_URL + "/BiblioItem",
  [PAGES.ITEM]: BASE_URL + "/Item",
  [PAGES.USER]: BASE_URL + "/User"
};

interface IConfig {
  actions: any;
  services: any;
  config: IFieldConfig[];
}

export const PageConfig: Record<string, IConfig> = {
  [PAGES.ITEM_TYPE]: {
    actions: ItemTypesActions,
    services: generateServices(PAGES.ITEM_TYPE),
    config: itemTypeColumnConfig,
  },
  [PAGES.BIBLIO_ITEM]: {
    actions: BiblioItemsActions,
    services: generateServices(PAGES.BIBLIO_ITEM),
    config: biblioItemColumnConfig,
  },
  [PAGES.ITEM]: {
    actions: ItemsActions,
    services: generateServices(PAGES.ITEM),
    config: itemColumnConfig,
  },
  [PAGES.USER]: {
    actions: UsersActions,
    services: generateServices(PAGES.USER),
    config: userColumnConfig,
  } 
};
