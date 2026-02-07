import React, { useState } from "react";

export default function AccountPage() {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    // you will connect actual OTP login API here
    alert("OTP sent to: " + mobile);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Login / Register</h1>
        <p className="mt-2 text-sm">Login with your mobile number</p>
      </div>

      {/* Login Form */}
      <div className="flex-grow container mx-auto px-4 py-8 max-w-md">
        <div className="bg-white shadow rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g. 9999999999"
            className="w-full px-4 py-3 border rounded-md focus:outline-indigo-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 mt-4 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Send OTP
          </button>

          {/* Optional Register link */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-600 font-semibold">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Info Banners */}
      <div className="container mx-auto px-4 py-6 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-medium">Free Shipping</p>
          <p className="text-sm text-gray-600">On all orders across India</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-medium">30 Days Return Policy</p>
          <p className="text-sm text-gray-600">Hassle-free returns</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 text-sm text-center py-6">
        <p>Need help? Contact our support team</p>
        <p>Phone: +91 8666776777</p>
      </footer>
    </div>
  );
}
