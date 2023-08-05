import axios, { AxiosRequestConfig } from "axios";
import { Schema } from "../interfaces/Schema";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc2c9e08074e40db8e7c674d77c466e2",
  },
});

const getAllClient = <T>(endpoint: string, config?: AxiosRequestConfig) => {
  return apiClient.get<Schema<T>>(endpoint, config).then((res) => res.data);
};

const getClient = <T>(endpoint: string) => {
  return apiClient.get<T>(endpoint).then((res) => res.data);
};

export { getClient  ,getAllClient };

