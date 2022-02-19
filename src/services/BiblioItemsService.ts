import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";
import { handleCatch } from "../utils/utility_fns";

export async function getBiblioItemsService() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.BIBLIO_ITEM,
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

export async function addBiblioItemService(data: any, isEdit: boolean = false) {
  const config: AxiosRequestConfig = {
    method: isEdit ? "PUT" : "POST",
    url: Constants.API_URLS.BIBLIO_ITEM,
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

export async function updateBiblioItemService(data: any, id: string) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: Constants.API_URLS.BIBLIO_ITEM + "/" + id,
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

export async function getBiblioItemDetailsService(id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS.BIBLIO_ITEM + "/" + id,
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

export const BiblioItemsServices = {
  getService: getBiblioItemsService,
  addService: addBiblioItemService,
  updateService: updateBiblioItemService,
  getByIdService: getBiblioItemDetailsService,
};
