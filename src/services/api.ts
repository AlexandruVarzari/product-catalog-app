import axios from "axios";
import { Product } from "../types";

const API_URL = "https://fakestoreapi.com";

export const api = {
  getProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await axios.get(
      `${API_URL}/products/category/${category}`
    );
    return response.data;
  },
};
