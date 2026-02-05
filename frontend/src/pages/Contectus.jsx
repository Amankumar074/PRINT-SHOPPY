import React from 'react'

const Contectus = () => {
  return (
     <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-theme-color-1">Contact Us</h1>
        <p className="text-sm text-gray-600 mt-1">
          We're here to help — reach out anytime!
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8 space-y-6">
        
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <span className="text-theme-color-2 text-xl font-bold">📞</span>
          <div>
            <h3 className="font-semibold text-lg">Call Support</h3>
            <p className="text-sm text-gray-700">
              <a href="tel:+918666776777" className="hover:text-theme-color-4">
                +91 866 677 6777
              </a>
            </p>
            <p className="text-xs text-gray-500">9:00 AM – 9:00 PM (Daily)</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start space-x-4">
          <span className="text-theme-color-2 text-xl font-bold">💬</span>
          <div>
            <h3 className="font-semibold text-lg">WhatsApp Support</h3>
            <p className="text-sm text-gray-700">
              <a
                href="https://wa.me/918663418494"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-theme-color-4"
              >
                +91 906 341 9494
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <span className="text-theme-color-2 text-xl font-bold">✉️</span>
          <div>
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-sm text-gray-700">
              <a href="mailto:help@printshoppy.com" className="hover:text-theme-color-4">
                help@printshoppy.com
              </a>
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <span className="text-theme-color-2 text-xl font-bold">📍</span>
          <div>
            <h3 className="font-semibold text-lg">Our Address</h3>
            <p className="text-sm text-gray-700">
              48-16-11/3A, Mahanadu Road, Sri Ramachandra Nagar, Vijayawada,
              Andhra Pradesh – 520007, India
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8 mt-10">
        <h2 className="text-xl font-semibold text-theme-color-1 mb-4">Send Us a Message</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-theme-color-2 focus:border-theme-color-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-theme-color-2 focus:border-theme-color-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-theme-color-2 focus:border-theme-color-2"
            />
          </div>

          <button
            type="submit"
            className="bg-theme-color-2 text-white px-6 py-2 rounded-md hover:bg-theme-color-3 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contectus