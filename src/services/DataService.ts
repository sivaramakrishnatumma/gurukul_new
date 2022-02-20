import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";
import { handleCatch } from "../utils/utility_fns";

export async function getDataService(page: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS[page],
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

export async function addDataService(
  page: string,
  data: any,
  isEdit: boolean = false
) {
  const config: AxiosRequestConfig = {
    method: isEdit ? "PUT" : "POST",
    url: Constants.API_URLS[page],
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

export async function updateDataService(page: string, data: any, id: string) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: Constants.API_URLS[page] + "/" + id,
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

export async function getDataByIdService(page: string, id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.API_URLS[page] + "/" + id,
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

export function generateServices(page: string) {
  return {
    getDataService: getDataService.bind(null, page),
    addDataService: addDataService.bind(null, page),
    updateDataService: updateDataService.bind(null, page),
    getDataByIdService: getDataByIdService.bind(null, page),
  };
}
