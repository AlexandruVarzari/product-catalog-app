import { useState, useEffect } from "react";
import { Product, FilterOptions } from "../types";
import { api } from "../services/api";

export const useProducts = (filters: FilterOptions) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
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
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products, loading, error };
};
