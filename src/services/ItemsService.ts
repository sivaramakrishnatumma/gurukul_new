import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";
import { handleCatch } from "../utils/utility_fns";

export async function getItemsService() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.ITEM,
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

export async function addItemService(data: any, isEdit: boolean = false) {
  const config: AxiosRequestConfig = {
    method: isEdit ? "PUT" : "POST",
    url: Constants.API_URLS.ITEM,
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

export async function updateItemService(data: any, id: string) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: Constants.API_URLS.ITEM + "/" + id,
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

export async function getItemDetailsService(id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.ITEM + "/" + id,
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

export const ItemsServices = {
  getService: getItemsService,
  addService: addItemService,
  updateService: updateItemService,
  getByIdService: getItemDetailsService,
};
