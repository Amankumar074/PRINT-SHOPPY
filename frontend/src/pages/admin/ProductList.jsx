import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3">₹{p.price}</td>
                <td className="p-3 text-sm text-gray-500">{p.slug}</td>
                <td className="p-3">{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
