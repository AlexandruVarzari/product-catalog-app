import axios, { AxiosError } from "axios";
import { Product } from "../types";

const API_URL = "https://fakestoreapi.com";
const TIMEOUT = 5000; // 5 seconds timeout
const MAX_RETRIES = 3;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

const retryRequest = async (fn: () => Promise<any>, retries = MAX_RETRIES) => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;

    // Only retry on network errors or 5xx server errors
    if (
      error instanceof AxiosError &&
      (!error.response || error.response.status >= 500)
    ) {
      // Wait for 1 second before retrying
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return retryRequest(fn, retries - 1);
    }
    throw error;
  }
};

export const api = {
  getProducts: async (): Promise<Product[]> => {
    return retryRequest(async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    });
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    return retryRequest(async () => {
      const response = await axiosInstance.get(
        `/products/category/${category}`
      );
      return response.data;
    });
  },
};
