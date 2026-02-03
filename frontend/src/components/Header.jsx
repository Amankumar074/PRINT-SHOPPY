import { ShoppingCart, User, LogIn } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full bg-theme-color-1 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="  text-white">
            <div className="flex justify-between">
              <Link to="/" className="pr-4">Contact Us</Link>
              <Link to="/" className="pr-4">FAQ's</Link>
              <Link to="/" className="">Track Order</Link>
            </div>
          </div>

          <div className="text-xl font-bold text-theme-color-4">
            Print Shoppy
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button className="hover:text-theme-color-4 transition">
              Login
            </button>

            <button className="border border-theme-color-4 px-4 py-1 rounded hover:bg-theme-color-4 hover:text-theme-color-1 transition">
              Register
            </button>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 hover:text-theme-color-4 transition" />
              <span className="absolute -top-2 -right-2 bg-theme-color-3 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </nav>

          {/* Mobile Menu Icons */}
          <div className="flex md:hidden items-center gap-4">
            <LogIn className="w-6 h-6" />
            <User className="w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
          </div>

        </div>
      </div>
    </header>
  )
}
