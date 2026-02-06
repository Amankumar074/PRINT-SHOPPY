import { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    slug: "",
    category: ""
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  // 🔹 FETCH CATEGORIES
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select image");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    // data.append("price", form.price);
    data.append("slug", form.slug);
    data.append("category", form.category);
    data.append("image", image);

     if (form.price) {
    data.append("price", form.price);
  }

    await axios.post(
      "http://localhost:5000/api/products/create",
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
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) => setImage(e.target.files[0])}
            
          />
        </div>

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
