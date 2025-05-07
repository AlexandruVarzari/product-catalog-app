import { Product } from "../../../types";
import { Button } from "../Button/Button";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <Button
          variant="primary"
          onClick={() => onAddToCart(product)}
          className="add-to-cart-btn"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
