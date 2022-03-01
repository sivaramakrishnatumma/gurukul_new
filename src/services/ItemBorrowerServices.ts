import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";
import { handleCatch } from "../utils/utility_fns";

export async function getItemBorroweListService() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS[Constants.PAGES.ITEM_BORROWER],
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);

    if (response.status === 200 && response.data) {
      return response.data.result || [];
    }
  } catch (error) {
    return handleCatch(error);
  }
}

export async function updateItemBorrowerService(data: any, id: string) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: Constants.API_URLS[Constants.PAGES.ITEM_BORROWER] + "/" + id,
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

export async function checkOutItemService(data: any) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: Constants.API_URLS[Constants.PAGES.ITEM_BORROWER],
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
