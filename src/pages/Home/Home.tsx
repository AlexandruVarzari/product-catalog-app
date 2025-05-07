import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../../components/common/Card/ProductCard";
import { useCart } from "../../context/CartContext";
import { FilterOptions } from "../../types";
import { Select } from "../../components/common/Select/Select";

export const Home = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: "",
    sortBy: "price",
    sortOrder: "asc",
  });

  const { products, loading, error } = useProducts(filters);
  const { addToCart } = useCart();

  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "electronics", label: "Electronics" },
    { value: "jewelery", label: "Jewelery" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
  ];

  const sortOptions = [
    { value: "price", label: "Price" },
    { value: "name", label: "Name" },
  ];

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <div className="filters">
        <Select
          options={categoryOptions}
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        />

        <Select
          options={sortOptions}
          value={filters.sortBy}
          onChange={(e) =>
            setFilters({
              ...filters,
              sortBy: e.target.value as "price" | "name",
            })
          }
        />

        <button
          className="sort-btn"
          onClick={() =>
            setFilters({
              ...filters,
              sortOrder: filters.sortOrder === "asc" ? "desc" : "asc",
            })
          }
        >
          {filters.sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};
