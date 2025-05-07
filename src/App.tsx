import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/common/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

export const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
};
