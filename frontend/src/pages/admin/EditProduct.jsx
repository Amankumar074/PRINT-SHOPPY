import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    subtitle: "",
    slug: "",
    price: "",
    oldPrice: "",
    category: "",
    pricingSlabs: [],
    options: [],
    details: [],
    trust: [],
    personalizationEnabled: true
  })

  const [categories, setCategories] = useState([])
  const [images, setImages] = useState([])        // existing images
  const [newImages, setNewImages] = useState([])  // newly selected images
  const [loading, setLoading] = useState(true)

  // 🔹 FETCH CATEGORIES
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
  }, [])

  // 🔹 LOAD PRODUCT DATA
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const product = res.data.find(p => p._id === id)

        if (!product) {
          alert("Product not found")
          return
        }

        setForm({
          name: product.name || "",
          subtitle: product.subtitle || "",
          slug: product.slug || "",
          price: product.price || "",
          oldPrice: product.oldPrice || "",
          category: product.category || "",
          pricingSlabs: product.pricingSlabs || [],
          options: product.options || [],
          details: product.details || [],
          trust: product.trust || [],
          personalizationEnabled: product.personalizationEnabled ?? true
        })

        setImages(product.images || [])
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        alert("Failed to load product")
      })
  }, [id])

  // 🔹 UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append("name", form.name)
    data.append("subtitle", form.subtitle)
    data.append("slug", form.slug)
    data.append("price", form.price)
    data.append("oldPrice", form.oldPrice)
    data.append("category", form.category)

    data.append("pricingSlabs", JSON.stringify(form.pricingSlabs))
    data.append("options", JSON.stringify(form.options))
    data.append("details", JSON.stringify(form.details))
    data.append("trust", JSON.stringify(form.trust))
    data.append("personalizationEnabled", form.personalizationEnabled)

    newImages.forEach(img => data.append("images", img))

    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        data
      )

      alert("Product updated successfully")
      navigate("/admin/products")
    } catch (err) {
      console.error(err)
      alert("Update failed")
    }
  }

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Product
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* NAME */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          {/* SUBTITLE */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={(e) =>
              setForm({ ...form, subtitle: e.target.value })
            }
          />

          {/* OLD PRICE */}
          <input
            type="number"
            className="w-full border p-3 rounded"
            placeholder="Old Price (MRP)"
            value={form.oldPrice}
            onChange={(e) =>
              setForm({ ...form, oldPrice: e.target.value })
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
            required
          />

          {/* CATEGORY */}
          <select
            className="w-full border p-3 rounded"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* EXISTING IMAGES */}
          {images.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">
                Current Images
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-wrap gap-3">
                  {images.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={`http://localhost:5000/uploads/${img}`}
                        className="h-20 w-20 object-cover rounded border"
                        alt=""
                      />

                      {/* DELETE BUTTON */}
                      <button
                        type="button"
                        onClick={async () => {
                          if (!window.confirm("Delete this image?")) return

                          await axios.delete(
                            `http://localhost:5000/api/products/${id}/image/${img}`
                          )

                          // UI update
                          setImages(prev => prev.filter(i => i !== img))
                        }}
                        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* NEW IMAGES */}
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setNewImages([...e.target.files])
            }
          />

          {/* PERSONALIZATION TOGGLE */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.personalizationEnabled}
              onChange={(e) =>
                setForm({
                  ...form,
                  personalizationEnabled: e.target.checked
                })
              }
            />
            Enable Personalization
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
