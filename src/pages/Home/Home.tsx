import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../../components/common/Card/ProductCard";
import { useCart } from "../../context/CartContext";
import { FilterOptions } from "../../types";

export const Home = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: "",
    sortBy: "price",
    sortOrder: "asc",
  });

  const { products, loading, error } = useProducts(filters);
  const { addToCart } = useCart();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
      <div className="filters">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters({
              ...filters,
              sortBy: e.target.value as "price" | "name",
            })
          }
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>

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
