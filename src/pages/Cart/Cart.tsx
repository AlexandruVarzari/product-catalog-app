import { useCart } from "../../context/CartContext";
import { Button } from "../../components/common/Button/Button";

export const Cart = () => {
  const { state, removeFromCart, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {state.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${state.total.toFixed(2)}</h2>
        <Button
          variant="primary"
          onClick={clearCart}
          className="clear-cart-btn"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};
