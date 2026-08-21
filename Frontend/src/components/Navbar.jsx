import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="absolute top-0 z-20 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/products/logo.png"
            alt="Foodiesam Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="text-2xl font-bold text-white">Foodiesam</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium text-white transition hover:text-pink-400"
          >
            Home
          </Link>

          <Link
            to="/cakes"
            className="font-medium text-white transition hover:text-pink-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="rounded-lg bg-pink-600 px-4 py-2 font-medium text-white transition hover:bg-pink-700"
          >
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
