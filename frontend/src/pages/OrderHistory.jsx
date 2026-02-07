import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/api/orders/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 🔥 SAFE SET
        setOrders(Array.isArray(res.data) ? res.data : res.data.orders || []);
      } catch (error) {
        console.error("Order fetch error", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="bg-white p-4 mb-4 shadow rounded">
            <p>Order #{order._id?.slice(-6)}</p>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.totalPrice}</p>
          </div>
        ))
      )}
    </div>
  );
}
