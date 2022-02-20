import axios, { AxiosRequestConfig } from "axios";
import * as Constants from "../constants/config";

export async function fetchData(url: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: Constants.BASE_URL + url,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);

    if (response.status === 200 && response.data) {
      if (Array.isArray(response.data)) {
        return response.data;
      }
      return response.data.result || [];
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error(error);
    } else {
      console.error(error);
      return error;
    }
  }
}
