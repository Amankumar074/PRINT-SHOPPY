import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "@/api/axios"

const API_URL = import.meta.env.VITE_API_URL

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
  const [images, setImages] = useState([])
  const [newImages, setNewImages] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔹 FETCH CATEGORIES
  useEffect(() => {
    api.get("/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
  }, [])

  // 🔹 LOAD PRODUCT
  useEffect(() => {
    api.get("/api/products")
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
      .catch(() => alert("Failed to load product"))
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

    await api.put(`/api/products/${id}`, data)

    alert("Product updated successfully")
    navigate("/admin/products")
  }

  if (loading) return <p className="p-6 text-center">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Product
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* BASIC INFO */}
          <input
            className="w-full border p-3 rounded"
            placeholder="Product Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={e => setForm({ ...form, subtitle: e.target.value })}
          />

          <input
            type="number"
            className="w-full border p-3 rounded"
            placeholder="Old Price (MRP)"
            value={form.oldPrice}
            onChange={e => setForm({ ...form, oldPrice: e.target.value })}
          />

          <input
            type="number"
            className="w-full border p-3 rounded"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Slug"
            value={form.slug}
            onChange={e => setForm({ ...form, slug: e.target.value })}
            required
          />

          {/* CATEGORY */}
          <select
            className="w-full border p-3 rounded"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
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
              <p className="font-medium text-sm mb-2">Current Images</p>
              <div className="flex flex-wrap gap-3">
                {images.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={`${API_URL}/uploads/${img}`}
                      className="h-20 w-20 rounded object-cover border"
                    />
                    <button
                      type="button"
                      onClick={async () => {
                        if (!window.confirm("Delete image?")) return
                        await api.delete(`/api/products/${id}/image/${img}`)
                        setImages(prev => prev.filter(i => i !== img))
                      }}
                      className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEW IMAGES */}
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={e => setNewImages([...e.target.files])}
          />

          {/* 🔥 PRICING SLABS */}
          <h3 className="font-semibold">Pricing Slabs</h3>
          <button
            type="button"
            className="text-blue-600 text-sm"
            onClick={() =>
              setForm({
                ...form,
                pricingSlabs: [...form.pricingSlabs, { qty: "", price: "" }]
              })
            }
          >
            + Add Slab
          </button>

          {form.pricingSlabs.map((s, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="number"
                className="border p-2 w-1/2"
                placeholder="Qty"
                value={s.qty}
                onChange={e => {
                  const arr = [...form.pricingSlabs]
                  arr[i].qty = e.target.value
                  setForm({ ...form, pricingSlabs: arr })
                }}
              />
              <input
                type="number"
                className="border p-2 w-1/2"
                placeholder="Price"
                value={s.price}
                onChange={e => {
                  const arr = [...form.pricingSlabs]
                  arr[i].price = e.target.value
                  setForm({ ...form, pricingSlabs: arr })
                }}
              />
            </div>
          ))}

          {/* 🔥 OPTIONS */}
          <h3 className="font-semibold">Options</h3>
          <button
            type="button"
            className="text-blue-600 text-sm"
            onClick={() =>
              setForm({
                ...form,
                options: [...form.options, { name: "", values: [] }]
              })
            }
          >
            + Add Option
          </button>

          {form.options.map((o, i) => (
            <div key={i}>
              <input
                className="border p-2 w-full mb-1"
                placeholder="Option Name"
                value={o.name}
                onChange={e => {
                  const arr = [...form.options]
                  arr[i].name = e.target.value
                  setForm({ ...form, options: arr })
                }}
              />
              <input
                className="border p-2 w-full"
                placeholder="Values (comma separated)"
                value={o.values.join(",")}
                onChange={e => {
                  const arr = [...form.options]
                  arr[i].values = e.target.value.split(",")
                  setForm({ ...form, options: arr })
                }}
              />
            </div>
          ))}

          {/* 🔥 DETAILS */}
          <h3 className="font-semibold">Product Details</h3>
          <button
            type="button"
            className="text-blue-600 text-sm"
            onClick={() =>
              setForm({
                ...form,
                details: [...form.details, { title: "", desc: "" }]
              })
            }
          >
            + Add Detail
          </button>

          {form.details.map((d, i) => (
            <div key={i}>
              <input
                className="border p-2 w-full mb-1"
                placeholder="Title"
                value={d.title}
                onChange={e => {
                  const arr = [...form.details]
                  arr[i].title = e.target.value
                  setForm({ ...form, details: arr })
                }}
              />
              <textarea
                className="border p-2 w-full"
                placeholder="Description"
                value={d.desc}
                onChange={e => {
                  const arr = [...form.details]
                  arr[i].desc = e.target.value
                  setForm({ ...form, details: arr })
                }}
              />
            </div>
          ))}

          {/* 🔥 TRUST */}
          <h3 className="font-semibold">Trust Section</h3>
          <button
            type="button"
            className="text-blue-600 text-sm"
            onClick={() =>
              setForm({
                ...form,
                trust: [...form.trust, { icon: "", text: "" }]
              })
            }
          >
            + Add Trust
          </button>

          {form.trust.map((t, i) => (
            <div key={i} className="flex gap-2">
              <input
                className="border p-2 w-1/2"
                placeholder="Icon"
                value={t.icon}
                onChange={e => {
                  const arr = [...form.trust]
                  arr[i].icon = e.target.value
                  setForm({ ...form, trust: arr })
                }}
              />
              <input
                className="border p-2 w-1/2"
                placeholder="Text"
                value={t.text}
                onChange={e => {
                  const arr = [...form.trust]
                  arr[i].text = e.target.value
                  setForm({ ...form, trust: arr })
                }}
              />
            </div>
          ))}

          {/* PERSONALIZATION */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.personalizationEnabled}
              onChange={e =>
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
