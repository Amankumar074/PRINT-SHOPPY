import React, { useState } from "react";

export default function ContactUs() {
  const [method, setMethod] = useState("");

  return (
  
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="office"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-indigo-500/30"></div>

          {/* Title */}
          <h2 className="absolute top-8 left-8 text-3xl font-bold text-white">
            Contact us
          </h2>

         
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">
            Send Us A Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full px-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Radio Buttons */}
            <div>
              <p className="text-gray-600 mb-2">
                Preferred method of communication
              </p>

              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="method"
                    value="email"
                    checked={method === "email"}
                    onChange={(e) => setMethod(e.target.value)}
                    className="text-indigo-600"
                  />
                  <span>Email</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="method"
                    value="phone"
                    checked={method === "phone"}
                    onChange={(e) => setMethod(e.target.value)}
                    className="text-indigo-600"
                    />
                  <span>Phone</span>
                </label>
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
              >
              Send
            </button>

          </form>
        </div>
      </div>
    </div>
       {/* Contact Info Card */}
          <div className=" flex justify-around bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">📞</span>
              <span className="text-gray-700">470-601-1911</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">✉️</span>
              <span className="text-gray-700">Pagedone123@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl">📍</span>
              <span className="text-gray-700">
                654 Sycamore Avenue, Meadowville, WA 76543
              </span>
            </div>
          </div>
    </div>
  );
}
