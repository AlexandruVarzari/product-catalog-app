import { useState, useEffect } from "react";
import { Product, FilterOptions } from "../types";
import { api } from "../services/api";
import axios from "axios";

export const useProducts = (filters: FilterOptions) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = filters.category
          ? await api.getProductsByCategory(filters.category)
          : await api.getProducts();

        // Apply sorting
        const sortedData = [...data].sort((a, b) => {
          if (filters.sortBy === "price") {
            return filters.sortOrder === "asc"
              ? a.price - b.price
              : b.price - a.price;
          }
          return filters.sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        });

        setProducts(sortedData);
      } catch (err) {
        if (axios.isCancel(err)) {
          // Request was cancelled, do nothing
          return;
        }

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Cleanup function to cancel the request if the component unmounts
    // or if the filters change
    return () => {
      controller.abort();
    };
  }, [filters]);

  return { products, loading, error };
};
