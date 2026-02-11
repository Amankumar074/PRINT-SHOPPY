import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { Trash2 } from "lucide-react"

const API_URL = import.meta.env.VITE_API_URL

export default function Cart() {
  const { cart, setCart } = useCart()

  const increaseQty = (index) => {
    const updated = [...cart]
    updated[index].quantity += 1
    setCart(updated)
  }

  const decreaseQty = (index) => {
    const updated = [...cart]
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1
      setCart(updated)
    }
  }

  const removeItem = (index) => {
    if (!window.confirm("Remove this item from cart?")) return
    setCart(cart.filter((_, i) => i !== index))
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  /* ================= EMPTY CART ================= */
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-3">Your cart is empty 🛒</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= CART ITEMS ================= */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl p-5 shadow hover:shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={`${API_URL}/uploads/${item.image}`}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-cover rounded-xl border"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {item.name}
                </h3>

                {item.options && (
                  <div className="text-sm text-gray-600 space-y-1 mb-2">
                    {Object.entries(item.options).map(([key, value]) => (
                      <p key={key}>
                        <strong>{key}:</strong> {value}
                      </p>
                    ))}
                  </div>
                )}

                {item.personalization && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Personalization:</strong>{" "}
                    {item.personalization}
                  </p>
                )}

                <p className="text-orange-500 font-bold text-lg">
                  ₹{item.price}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex sm:flex-col justify-between sm:items-end gap-4">
                {/* QUANTITY */}
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button
                    onClick={() => decreaseQty(index)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                  >
                    −
                  </button>
                  <span className="px-4 font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(index)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl font-bold shadow-lg">
            Proceed to Checkout
          </button>

          <Link
            to="/"
            className="block text-center text-sm text-gray-600 mt-4 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
