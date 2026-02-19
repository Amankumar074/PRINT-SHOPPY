import { Outlet, useLocation, Link } from "react-router-dom"
import { useState } from "react"

const AdminLayout = () => {
  const location = useLocation()
  const [search, setSearch] = useState("")

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Analytics", path: "/admin/analytics" },
    { name: "Settings", path: "/admin/settings" },
  ]

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-5 flex-col">
        <h1 className="text-2xl font-bold mb-10">YourBrand</h1>

        <nav className="space-y-2 flex-1">
          {menu.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg transition
                ${
                  location.pathname === item.path
                    ? "bg-indigo-600"
                    : "hover:bg-slate-700"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-slate-400">© 2026 Admin Panel</div>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white px-6 py-4 flex justify-between shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-slate-100 px-4 py-2 rounded-lg w-40 sm:w-64 md:w-80"
          />

          <div className="flex items-center gap-4">
            <span>🔔</span>
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet context={{ search }} />
        </main>

      </div>
    </div>
  )
}

export default AdminLayout
