import { useEffect, useState } from "react";
import { ShoppingCart, User, LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
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
              <ShoppingCart className="w-6 h-6" />
            </nav>

            {/* Mobile Right */}
            <div className="flex md:hidden gap-4">
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
