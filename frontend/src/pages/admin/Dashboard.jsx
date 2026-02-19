import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/add-product" className="bg-white p-6 rounded-xl shadow">
          ➕ Add Product
        </Link>

        <Link to="/admin/products" className="bg-white p-6 rounded-xl shadow">
          📦 All Products
        </Link>

        <Link to="/admin/categories" className="bg-white p-6 rounded-xl shadow">
          🗂 Categories
        </Link>

        <Link to="/admin/faqs" className="bg-white p-6 rounded-xl shadow">
          ❓ FAQs
        </Link>
      </div>
    </>
  )
}

export default Dashboard
