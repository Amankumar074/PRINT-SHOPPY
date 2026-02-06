import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const updateName = async (id, name) => {
    await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
    loadCategories();
  };

  const updateOrder = async (id, direction) => {
    await axios.put(
      `http://localhost:5000/api/categories/reorder/${id}`,
      { direction }
    );
    loadCategories();
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Manage Categories</h2>

      {categories.map((cat, index) => (
        <div
          key={cat._id}
          className="flex items-center gap-2 mb-3"
        >
          <input
            defaultValue={cat.name}
            onBlur={(e) =>
              updateName(cat._id, e.target.value)
            }
            className="border px-3 py-2 rounded flex-1"
          />

          <button
            disabled={index === 0}
            onClick={() => updateOrder(cat._id, "up")}
            className="px-2 py-1 border rounded"
          >
            ↑
          </button>

          <button
            disabled={index === categories.length - 1}
            onClick={() => updateOrder(cat._id, "down")}
            className="px-2 py-1 border rounded"
          >
            ↓
          </button>
        </div>
      ))}
    </div>
  );
}
