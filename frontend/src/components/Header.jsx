import { useEffect, useState } from "react";
import { ShoppingCart, User, LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart(); // 🔥 CART CONTEXT

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          w-full bg-white border-b border-black
          transition-all duration-300 ease-out
          ${isSticky
            ? "fixed top-0 left-0 z-50 shadow-md"
            : "relative"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Desktop Left */}
            <div className="hidden md:flex text-sm gap-4">
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ's</Link>
              <Link to="/orders">Track Order</Link>
            </div>

            {/* Mobile Left - Menu Icon */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </button>

            {/* Logo Center */}
            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
            >
              <img src="/logo.svg" alt="logo" className="h-8" />
            </Link>

            {/* Desktop Right */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/login">
                <button>Login</button>
              </Link>

              <Link to="/register">
                <button className="border px-4 py-1 rounded">
                  Register
                </button>
              </Link>

              {/* 🔥 CART ICON WITH COUNT */}
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />

                {cart.length > 0 && (
                  <span
                    className="
                      absolute -top-2 -right-2
                      bg-orange-500 text-white
                      text-xs font-bold
                      w-5 h-5
                      flex items-center justify-center
                      rounded-full
                    "
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            </nav>

            {/* Mobile Right */}
            <div className="flex md:hidden gap-4 items-center">
              {/* 🔥 MOBILE CART */}
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span
                    className="
                      absolute -top-2 -right-2
                      bg-orange-500 text-white
                      text-xs
                      w-5 h-5
                      flex items-center justify-center
                      rounded-full
                    "
                  >
                    {cart.length}
                  </span>
                )}
              </Link>

              <User />
            </div>

          </div>
        </div>
      </header>

      {/* 🔥 Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="w-64 bg-white h-full shadow-lg p-6">
          <button
            className="mb-6"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

          <div className="flex flex-col gap-4 text-lg">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link to="/faq" onClick={() => setIsOpen(false)}>
              FAQ's
            </Link>
            <Link to="/orders" onClick={() => setIsOpen(false)}>
              Track Order
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              Register
            </Link>

            {/* 🔥 CART LINK IN MOBILE SIDEBAR */}
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Cart ({cart.length})
            </Link>
          </div>
        </div>

        {/* Overlay */}
        <div
          className="flex-1 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </>
  );
}
