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
  });

  const [images, setImages] = useState([]);
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

  if (!form.name || !form.slug || !form.price || !form.category) {
    alert("Name, Slug, Price and Category are required");
    return;
  }

  if (isNaN(form.price)) {
    alert("Price must be a number");
    return;
  }

  if (images.length === 0) {
    alert("Please select at least one image");
    return;
  }

  const cleanPricingSlabs = form.pricingSlabs.filter(
    s => s.qty && s.price
  );

  const data = new FormData();

  data.append("name", form.name);
  data.append("subtitle", form.subtitle);
  data.append("slug", form.slug);
  data.append("price", String(form.price));
  data.append("oldPrice", String(form.oldPrice || ""));
  data.append("category", form.category);

  images.forEach(img => data.append("images", img));

  data.append("pricingSlabs", JSON.stringify(cleanPricingSlabs));
  data.append("options", JSON.stringify(form.options));
  data.append("details", JSON.stringify(form.details));
  data.append("trust", JSON.stringify(form.trust));
  data.append(
    "personalizationEnabled",
    form.personalizationEnabled ? "true" : "false"
  );

  await api.post("/api/products/create", data);

  alert("Product Added Successfully");
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Product</h2>

        {/* BASIC INFO */}
        <input
          placeholder="Product Name"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          placeholder="Subtitle"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        />

        <input
          type="number"
          placeholder="Old Price (MRP)"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, oldPrice: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Slug"
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
        />

        {/* CATEGORY */}
        <select
          className="w-full border p-3 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
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

        {/* IMAGES */}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full border p-2 rounded"
          onChange={(e) => setImages([...e.target.files])}
        />

        {/* 🔥 PRICING SLABS */}
        <h3 className="font-semibold">Pricing Slabs</h3>
        <button
          type="button"
          className="text-sm text-blue-600 p-1 border rounded"
          onClick={() =>
            setForm({
              ...form,
              pricingSlabs: [...form.pricingSlabs, { qty: "", price: "" }]
            })
          }
        >
          + Add Slab
        </button>

        {form.pricingSlabs.map((slab, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="number"
              placeholder="Qty"
              className="border p-2 w-1/2"
              onChange={(e) => {
                const arr = [...form.pricingSlabs];
                arr[i].qty = e.target.value;
                setForm({ ...form, pricingSlabs: arr });
              }}
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 w-1/2"
              onChange={(e) => {
                const arr = [...form.pricingSlabs];
                arr[i].price = e.target.value;
                setForm({ ...form, pricingSlabs: arr });
              }}
            />
          </div>
        ))}

        {/* 🔥 OPTIONS */}
        <h3 className="font-semibold">Product Options</h3>
        <button
          type="button"
          className="text-sm text-blue-600 p-1 border rounded"
          onClick={() =>
            setForm({
              ...form,
              options: [...form.options, { name: "", values: [] }]
            })
          }
        >
          + Add Option
        </button>

        {form.options.map((opt, i) => (
          <div key={i}>
            <input
              placeholder="Option Name (Size, Color)"
              className="border p-2 w-full mb-1"
              onChange={(e) => {
                const arr = [...form.options];
                arr[i].name = e.target.value;
                setForm({ ...form, options: arr });
              }}
            />
            <input
              placeholder="Values (comma separated)"
              className="border p-2 w-full"
              onChange={(e) => {
                const arr = [...form.options];
                arr[i].values = e.target.value.split(",");
                setForm({ ...form, options: arr });
              }}
            />
          </div>
        ))}

        {/* 🔥 PRODUCT DETAILS */}
        <h3 className="font-semibold">Product Details</h3>
        <button
          type="button"
          className="text-sm text-blue-600 p-1 border rounded"
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
              placeholder="Title"
              className="border p-2 w-full mb-1"
              onChange={(e) => {
                const arr = [...form.details];
                arr[i].title = e.target.value;
                setForm({ ...form, details: arr });
              }}
            />
            <textarea
              placeholder="Description"
              className="border p-2 w-full"
              onChange={(e) => {
                const arr = [...form.details];
                arr[i].desc = e.target.value;
                setForm({ ...form, details: arr });
              }}
            />
          </div>
        ))}

        {/* 🔥 TRUST SECTION */}
        <h3 className="font-semibold">Trust Section</h3>
        <button
          type="button"
          className="text-sm text-blue-600 p-1 border rounded"
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
              placeholder="Icon name"
              className="border p-2 w-1/2"
              onChange={(e) => {
                const arr = [...form.trust];
                arr[i].icon = e.target.value;
                setForm({ ...form, trust: arr });
              }}
            />
            <input
              placeholder="Text"
              className="border p-2 w-1/2"
              onChange={(e) => {
                const arr = [...form.trust];
                arr[i].text = e.target.value;
                setForm({ ...form, trust: arr });
              }}
            />
          </div>
        ))}

        {/* PERSONALIZATION */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.personalizationEnabled}
            onChange={(e) =>
              setForm({ ...form, personalizationEnabled: e.target.checked })
            }
          />
          Enable Personalization
        </label>

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
