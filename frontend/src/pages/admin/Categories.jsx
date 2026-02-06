import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus, Check, X } from "lucide-react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // add category
  const [showAdd, setShowAdd] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  // edit category
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  /* LOAD */
  const loadCategories = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  /* ADD */
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    await axios.post("http://localhost:5000/api/categories", {
      name: newCategory,
    });

    setNewCategory("");
    setShowAdd(false);
    loadCategories();
  };

  /* EDIT */
  const startEdit = (cat) => {
    setEditingId(cat._id);
    setEditName(cat.name);
  };

  const saveEdit = async (id) => {
    if (!editName.trim()) return;

    await axios.put(`http://localhost:5000/api/categories/${id}`, {
      name: editName,
    });

    setEditingId(null);
    loadCategories();
  };

  /* DELETE */
  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    await axios.delete(`http://localhost:5000/api/categories/${id}`);
    loadCategories();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Categories</h2>

        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          <Plus size={16} /> Add Category
        </button>
      </div>

      {/* ADD CATEGORY INPUT */}
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>

          <button
            onClick={() => {
              setShowAdd(false);
              setNewCategory("");
            }}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      )}

      {/* TABLE */}
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Category Name</th>
            <th className="p-3 w-40">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id} className="border-t">
              {/* NAME */}
              <td className="p-3">
                {editingId === cat._id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  cat.name
                )}
              </td>

              {/* ACTIONS */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  {/* EDIT / SAVE */}
                  {editingId === cat._id ? (
                    <>
                      <button
                        onClick={() => saveEdit(cat._id)}
                        className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white"
                        title="Save"
                      >
                        <Check size={16} />
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-600 hover:text-white"
                        title="Cancel"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(cat)}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                  )}

                  {/* DELETE */}
                  <button
                    onClick={() => deleteCategory(cat._id)}
                    className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white"
                    title="Delete"
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
  );
}
