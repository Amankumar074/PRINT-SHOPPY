import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    price: "",
    slug: "",
    category: "",
  })

  const [categories, setCategories] = useState([])
  const [oldImage, setOldImage] = useState("")
  const [newImage, setNewImage] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔹 FETCH CATEGORIES (DYNAMIC)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
  }, [])

  // 🔹 LOAD PRODUCT
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      const product = res.data.find((p) => p._id === id)

      if (!product) {
        alert("Product not found")
        return
      }

      setForm({
        name: product.name || "",
        price: product.price || "",
        slug: product.slug || "",
        category: product.category || "",
      })

      setOldImage(product.image)
      setLoading(false)
    })
  }, [id])

  // 🔹 UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    if (form.name) formData.append("name", form.name)
    if (form.price) formData.append("price", form.price)
    if (form.slug) formData.append("slug", form.slug)
    if (form.category) formData.append("category", form.category)
    if (newImage) formData.append("image", newImage)

    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData
      )

      alert("Product updated successfully")
      navigate("/admin/products")
    } catch (err) {
      console.error(err)
      alert("Update failed")
    }
  }

  if (loading) return <p className="p-6">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* NAME */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          {/* PRICE */}
          <input
            type="number"
            className="w-full border p-3 rounded"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          {/* SLUG */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Slug"
            value={form.slug}
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />

          {/* CATEGORY (DYNAMIC) */}
          <select
            className="w-full border p-3 rounded"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* OLD IMAGE */}
          {oldImage && (
            <div>
              <p className="text-sm mb-1">Current Image</p>
              <img
                src={`http://localhost:5000/uploads/${oldImage}`}
                className="h-20 w-24 rounded border"
                alt=""
              />
            </div>
          )}

          {/* NEW IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
