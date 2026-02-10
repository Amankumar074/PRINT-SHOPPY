import React, { useState } from "react";

export default function ContactUs() {
  const [method, setMethod] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="relative min-h-[220px] flex flex-col items-center justify-center mb-14 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Contact Us
    </h1>
    <p className="text-gray-200 mt-3 max-w-xl mx-auto">
      We'd love to hear from you. Send us a message!
    </p>
  </div>
</div>


      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-600/30"></div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">
            Send Us A Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 border rounded-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border rounded-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full px-5 py-3 border rounded-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {/* RADIO */}
            <div>
              <p className="text-gray-600 mb-3 font-medium">
                Preferred method of communication
              </p>
              <div className="flex gap-8">
                {["email", "phone"].map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-2 px-5 py-2 border rounded-full cursor-pointer transition
                    ${
                      method === item
                        ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={item}
                      checked={method === item}
                      onChange={(e) => setMethod(e.target.value)}
                      className="hidden"
                    />
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-5 py-3 border rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="max-w-6xl mb-6 mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "📞",
            title: "Call Us",
            info: "470-601-1911",
          },
          {
            icon: "✉️",
            title: "Email",
            info: "pagedone123@gmail.com",
          },
          {
            icon: "📍",
            title: "Address",
            info: "654 Sycamore Avenue, Meadowville, WA 76543",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 text-indigo-600 text-2xl rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
