import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useTheme } from "../../../context/ThemeContext";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { state } = useCart();
  const { theme, toggleTheme } = useTheme();
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Cart ({itemCount})
          </Link>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p> E-Commerce Test App 2025</p>
      </footer>
    </div>
  );
};
