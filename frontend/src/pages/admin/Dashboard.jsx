import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/add-product"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">➕ Add Product</h2>
          <p className="text-gray-600">Create new product</p>
        </Link>

        <Link
          to="/admin/products"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">📦All Products</h2>
          <p className="text-gray-600">View and manage all products</p>
        </Link>

        {/* 🆕 CATEGORY */}
        <Link
          to="/admin/categories"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">🗂All Categories</h2>
          <p className="text-gray-600">Add / Edit / Sort categories</p>
        </Link>
        <Link
          to="/admin/faqs"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">❓ FAQs</h2>
          <p className="text-gray-600">Manage frequently asked questions</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
