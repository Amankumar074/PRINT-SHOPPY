import React from "react";

const faqCategories = [
  { title: "Product Customization", count: 5 },
  { title: "Communication and Feedback", count: 5 },
  { title: "How to Place Order?", count: 7 },
  { title: "Payment and Security", count: 8 },
  { title: "Shipping and Delivery", count: 15 },
  { title: "My Account / Order History", count: 16 },
  { title: "Cancellation and Returns", count: 9 },
  { title: "Coupons and Offers", count: 5 },
  { title: "About PrintShoppy", count: 5 },
];

export default function Faq() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Header */}
      <div className="bg-indigo-600 text-white text-center py-10">
        <h1 className="text-3xl font-bold">FAQ’s</h1>
        <p className="mt-2 text-sm">Find answers to your questions</p>
      </div>

      {/* Search Box */}
      <div className="container mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-3 border rounded-md focus:outline-indigo-500"
        />
      </div>

      {/* FAQ Category List */}
      <div className="container mx-auto px-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {faqCategories.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {item.count} Articles
            </p>
          </div>
        ))}
      </div>

      {/* Optional Links */}
      <div className="container mx-auto px-4 py-6 text-center">
        <a href="/contact" className="text-indigo-600 hover:underline mx-2">
          Contact Us
        </a>
        <a href="/login" className="text-indigo-600 hover:underline mx-2">
          Login / Register
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 text-sm text-center py-6">
        <p>Premium Quality Assured • Free And Fast Delivery • 30 DAYS RETURN POLICY</p>
        <p className="mt-2">100% Secure Payments</p>
      </footer>
    </div>
  );
}
