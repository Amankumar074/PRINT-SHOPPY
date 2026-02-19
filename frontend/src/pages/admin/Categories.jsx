import { useEffect, useState } from "react"
import api from "@/api/axios"
import { Pencil, Trash2, Plus, Check, X } from "lucide-react"
import { useOutletContext } from "react-router-dom"

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const { search } = useOutletContext() || { search: "" }

  // add category
  const [showAdd, setShowAdd] = useState(false)
  const [newCategory, setNewCategory] = useState("")

  // edit category
  const [editingId, setEditingId] = useState(null)
  const [editData, setEditData] = useState({
    name: "",
    showSlider: false,
    widthPercent: 100,
    bgColor: "#ffffff",
    imagesPerRow: 4,
  })

  /* LOAD */
  const loadCategories = async () => {
    try {
      setLoading(true)
      const res = await api.get("/api/categories")
      setCategories(res.data)
      setError("")
    } catch {
      setError("Failed to load categories")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  /* ADD */
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return

    try {
      await api.post("/api/categories", { name: newCategory })
      setNewCategory("")
      setShowAdd(false)
      loadCategories()
    } catch {
      alert("Failed to add category")
    }
  }

  /* EDIT */
  const startEdit = (cat) => {
    setEditingId(cat._id)
    setEditData({
      name: cat.name,
      showSlider: cat.showSlider ?? false,
      widthPercent: cat.widthPercent ?? 100,
      bgColor: cat.bgColor ?? "#ffffff",
      imagesPerRow: cat.imagesPerRow ?? 4,
    })
  }

  const saveEdit = async (id) => {
    if (!editData.name.trim()) return

    const payload = {
      name: editData.name,
      showSlider: Boolean(editData.showSlider),
      widthPercent: Number(editData.widthPercent) || 100,
      bgColor: editData.bgColor || "#ffffff",
      imagesPerRow: Number(editData.imagesPerRow) || 4,
    }

    try {
      await api.put(`/api/categories/${id}`, payload)
      setEditingId(null)
      loadCategories()
    } catch {
      alert("Update failed")
    }
  }

  /* DELETE */
  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return

    try {
      await api.delete(`/api/categories/${id}`)
      loadCategories()
    } catch {
      alert("Delete failed")
    }
  }

  /* SEARCH FILTER */
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )

  /* STATES */
  if (loading) {
    return <p className="text-gray-500">Loading categories...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="p-6 max-w-5xl">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Categories</h2>

        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:opacity-90"
        >
          <Plus size={16} /> Add Category
        </button>
      </div>

      {/* ADD CATEGORY */}
      {showAdd && (
        <div className="mb-4 flex gap-2 bg-white p-4 rounded shadow">
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Category name"
            className="border px-3 py-2 rounded w-full"
          />
          <button
            onClick={handleAddCategory}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setShowAdd(false)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Category</th>
              <th className="p-3 w-48">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategories.length === 0 && (
              <tr>
                <td colSpan="2" className="p-6 text-center text-gray-500">
                  No categories found
                </td>
              </tr>
            )}

            {filteredCategories.map((cat) => (
              <tr key={cat._id} className="border-t align-top">
                {/* NAME / EDIT */}
                <td className="p-3">
                  {editingId === cat._id ? (
                    <div className="space-y-3">

                      <input
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border px-2 py-1 rounded w-full"
                      />

                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={editData.showSlider}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              showSlider: e.target.checked,
                            })
                          }
                        />
                        Show Slider
                      </label>

                      <div>
                        <label className="text-sm">Width (%)</label>
                        <input
                          type="number"
                          min="10"
                          max="100"
                          value={editData.widthPercent}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              widthPercent: Number(e.target.value),
                            })
                          }
                          className="border px-2 py-1 rounded w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm">Background Color</label>
                        <input
                          type="color"
                          value={editData.bgColor}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              bgColor: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div>
                        <label className="text-sm">
                          Images per row{" "}
                          <span className="text-xs text-gray-500">
                            (any number)
                          </span>
                        </label>

                        <input
                          type="number"
                          step="0.1"
                          min="0.1"
                          value={editData.imagesPerRow}
                          onChange={(e) => {
                            const val = e.target.value
                            setEditData({
                              ...editData,
                              imagesPerRow: val === "" ? "" : Number(val),
                            })
                          }}
                          onBlur={() => {
                            if (
                              editData.imagesPerRow === "" ||
                              isNaN(editData.imagesPerRow)
                            ) {
                              setEditData({
                                ...editData,
                                imagesPerRow: 4,
                              })
                            }
                          }}
                          className="border px-2 py-1 rounded w-full"
                        />
                      </div>

                    </div>
                  ) : (
                    <div>
                      <div className="font-medium">{cat.name}</div>
                      <div className="text-xs text-gray-500">
                        Slider: {cat.showSlider ? "Yes" : "No"} | Width:{" "}
                        {cat.widthPercent ?? 100}% | Grid:{" "}
                        {cat.imagesPerRow ?? 4}
                      </div>
                    </div>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex gap-2">
                    {editingId === cat._id ? (
                      <>
                        <button
                          onClick={() => saveEdit(cat._id)}
                          className="p-2 bg-green-100 text-green-600 rounded"
                        >
                          <Check size={16} />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="p-2 bg-gray-200 rounded"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => startEdit(cat)}
                        className="p-2 bg-blue-100 text-blue-600 rounded"
                      >
                        <Pencil size={16} />
                      </button>
                    )}

                    <button
                      onClick={() => deleteCategory(cat._id)}
                      className="p-2 bg-red-100 text-red-600 rounded"
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
