import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const categories = [
  "POPULAR PRODUCTS",
  "NEW IN",
  "WALL DECORATIVES",
  "DESK DECORATIVES",
  "PHOTO ALBUMS & PRINTS",
  "HOME DECORATIVES",
  "CAR ACCESSORIES",
  "FASHION & ACCESSORIES",
  "KIDS ZONE",
  "MOBILE ACCESSORIES",
  "BUSINESS NEEDS",
]

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    price: "",
    slug: "",
    category: "",
  })

  const [oldImage, setOldImage] = useState("")
  const [newImage, setNewImage] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔹 Load product
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      const product = res.data.find((p) => p._id === id)

      if (!product) {
        alert("Product not found")
        return
      }

      setForm({
        name: product.name,
        price: product.price,
        slug: product.slug,
        category: product.category,
      })
      setOldImage(product.image)
      setLoading(false)
    })
  }, [id])

  // 🔹 Update product
  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("price", form.price)
    formData.append("slug", form.slug)
    formData.append("category", form.category)

    if (newImage) {
      formData.append("image", newImage)
    }

    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      alert("Product updated successfully")
      navigate("/admin/products")
    } catch (err) {
      alert("Update failed")
    }
  }

  if (loading) return <p className="p-6">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          {/* Price */}
          <input
            type="number"
            className="w-full border p-3 rounded"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

          {/* Slug */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            required
          />

          {/* Category */}
          <select
            className="w-full border p-3 rounded"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Old Image */}
          {oldImage && (
            <div>
              <p className="text-sm mb-1">Current Image</p>
              <img
                src={`http://localhost:5000/uploads/${oldImage}`}
                className="h-20 w-24 rounded border"
              />
            </div>
          )}

          {/* New Image */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
