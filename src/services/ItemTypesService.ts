import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";

export async function getItemTypesService() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.ITEM_TYPE,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);

    if (response.status === 200 && response.data) {
      return response.data || [];
    }
  } catch (error) {
    return handleCatch(error);
  }
}

export async function addItemTypeService(data: any, isEdit: boolean = false) {
  const config: AxiosRequestConfig = {
    method: isEdit ? "PUT" : "POST",
    url: Constants.API_URLS.ITEM_TYPE,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error: any) {
    return handleCatch(error);
  }
}

export async function updateItemTypeService(data: any, id: string) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: Constants.API_URLS.ITEM_TYPE + "/" + id,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    if (response.status === 200 && response.data) {
      return response.data;
    }
  } catch (error: any) {
    return handleCatch(error);
  }
}

export async function getItemTypeDetailsService(id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.ITEM_TYPE + "/" + id,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);

    if (response.status === 200 && response.data) {
      return response.data.result;
    }
  } catch (error: any) {
    return handleCatch(error);
  }
}

function handleCatch(error: any) {
  if (axios.isCancel(error)) {
    console.error(error);
  } else {
    console.log(error);
    return [];
  }
}

export const ItemTypesServices = {
  getService: getItemTypesService,
  addService: addItemTypeService,
  updateService: updateItemTypeService,
  getByIdService: getItemTypeDetailsService,
};
