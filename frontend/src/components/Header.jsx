import { useEffect, useState } from "react"
import { ShoppingCart, User, LogIn } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        w-full bg-white border-b border-black
        transition-all duration-300 ease-out
        will-change-transform
        ${isSticky
          ? "fixed top-0 left-0 z-50 shadow-md translate-y-0"
          : "relative translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex text-sm">
            <Link to="/contact" className="pr-4">Contact Us</Link>
            <Link to="/faq" className="pr-4">FAQ's</Link>
            <Link to="/orders">Track Order</Link>
          </div>

          <Link to="/">
            <img src="/logo.svg" alt="logo" className="h-8" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
           <Link to="/login"> <button>Login</button></Link>
           <Link to="/register"><button className="border px-4 py-1 rounded">Register</button></Link> 
            <ShoppingCart className="w-6 h-6" />
          </nav>

          <div className="flex md:hidden gap-4">
            <LogIn />
            <User />
            <ShoppingCart />
          </div>

        </div>
      </div>
    </header>
  )
}
