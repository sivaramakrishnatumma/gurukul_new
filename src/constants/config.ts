import { biblioItemColumnConfig } from "../forms-config/biblio-items";
import { itemTypeColumnConfig } from "../forms-config/item-types";
import { itemColumnConfig } from "../forms-config/items";
import { BiblioItemsActions } from "../redux/actions/biblio-items.actions";
import { ItemTypesActions } from "../redux/actions/item-types.actions";
import { ItemsActions } from "../redux/actions/items.actions";
import { BiblioItemsServices } from "../services/BiblioItemsService";
import { ItemsServices } from "../services/ItemsService";
import { ItemTypesServices } from "../services/ItemTypesService";
import { IFieldConfig } from "./types";

export const BASE_URL = "https://gurukulapi-dev.azurewebsites.net/api/v1";

export const API_URLS = {
  ITEM_TYPE: BASE_URL + "/ItemType",
  BIBLIO_ITEM: BASE_URL + "/BiblioItem",
  ITEM: BASE_URL + "/Item",
};

interface IConfig {
  actions: any;
  services: any;
  config: IFieldConfig[];
}

export const PageConfig: Record<string, IConfig> = {
  itemType: {
    actions: ItemTypesActions,
    services: ItemTypesServices,
    config: itemTypeColumnConfig,
  },
  biblioItem: {
    actions: BiblioItemsActions,
    services: BiblioItemsServices,
    config: biblioItemColumnConfig,
  },
  item: {
    actions: ItemsActions,
    services: ItemsServices,
    config: itemColumnConfig,
  },
};
