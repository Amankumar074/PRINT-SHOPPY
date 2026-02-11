import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Cart() {
  const { cart, setCart } = useCart();

  // 🔥 Quantity increase
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
  };

  // 🔥 Quantity decrease
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCart(updated);
    }
  };

  // 🔥 Remove item
  const removeItem = (index) => {
    if (!window.confirm("Remove this item from cart?")) return;
    setCart(cart.filter((_, i) => i !== index));
  };

  // 🔥 Subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔥 Empty Cart
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">
          Your cart is empty 🛒
        </h2>
        <Link
          to="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {/* ================= CART ITEMS ================= */}
      <div className="space-y-6">

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 border rounded-xl p-6 bg-white shadow-sm"
          >

            {/* IMAGE */}
            <img
              src={`${API_URL}/uploads/${item.image}`}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                {item.name}
              </h3>

              {/* OPTIONS */}
              {item.options && (
                <div className="text-sm text-gray-600 mb-2">
                  {Object.entries(item.options).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  ))}
                </div>
              )}

              {/* PERSONALIZATION */}
              {item.personalization && (
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Personalization:</strong> {item.personalization}
                </p>
              )}

              {/* PRICE */}
              <p className="text-lg font-semibold text-orange-500">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col items-end gap-4">

              {/* QUANTITY */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => decreaseQty(index)}
                  className="px-3 py-1 text-lg bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(index)}
                  className="px-3 py-1 text-lg bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 flex items-center gap-1"
              >
                <Trash2 size={16} />
                Remove
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* ================= SUMMARY ================= */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <h2 className="text-2xl font-bold">
          Subtotal: ₹{subtotal}
        </h2>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-bold">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}
