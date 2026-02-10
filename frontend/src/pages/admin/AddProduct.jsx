import { useEffect, useState } from "react";
import api from "@/api/axios";

const AddProduct = () => {
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

  const [images, setImages] = useState([])


  const [categories, setCategories] = useState([]);

  // 🔹 FETCH CATEGORIES
  useEffect(() => {
    api
      .get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please select at least one image");
      return;
    }

    const data = new FormData()

    data.append("name", form.name)
    data.append("subtitle", form.subtitle)
    data.append("slug", form.slug)
    data.append("price", form.price)
    data.append("oldPrice", form.oldPrice)
    data.append("category", form.category)

    images.forEach(img => data.append("images", img))

    data.append("pricingSlabs", JSON.stringify(form.pricingSlabs))
    data.append("options", JSON.stringify(form.options))
    data.append("details", JSON.stringify(form.details))
    data.append("trust", JSON.stringify(form.trust))
    data.append("personalizationEnabled", form.personalizationEnabled)



    await api.post(
  "/api/products/create",
  data
);

    alert("Product Added");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Product
        </h2>

        {/* NAME */}
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
        <input
          placeholder="Subtitle"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, subtitle: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Old Price (MRP)"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, oldPrice: e.target.value })
          }
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }

        />

        {/* SLUG */}
        <input
          type="text"
          placeholder="Slug"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
          required
        />


        {/* CATEGORY (DYNAMIC) */}
        <select
          className="w-full border p-3 rounded mb-4"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="" disabled>
            Select Category
          </option>

          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>


        {/* IMAGE */}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full border p-2 rounded mb-6"
          onChange={(e) => setImages([...e.target.files])}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
