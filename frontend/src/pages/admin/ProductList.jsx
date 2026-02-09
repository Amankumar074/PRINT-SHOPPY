import { useEffect, useState } from "react"
import axios from "axios"
import { Pencil, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  // ✅ GET PRODUCTS
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  // ✅ DELETE PRODUCT
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`)
      setProducts(products.filter((p) => p._id !== id))
    } catch (err) {
      alert("Delete failed")
    }
  }

  // ✅ EDIT PRODUCT
  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Category</th>
              <th className="p-3">Image</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.name}</td>
                <td className="p-3">₹{p.price}</td>
                <td className="p-3 text-sm text-gray-500">{p.slug}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">
                  <img
                    src={`http://localhost:5000/uploads/${p.images[0]}`}
                    className="h-10 w-10 rounded object-cover"
                  />
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    {/* EDIT */}
                    <button
                      onClick={() => handleEdit(p._id)}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                      title="Edit Product"
                    >
                      <Pencil size={16} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                      title="Delete Product"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ProductList
