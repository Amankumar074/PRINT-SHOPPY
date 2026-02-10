import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      
      {/* Login Box */}
      <div className="max-w-md mx-auto border border-teal-400 rounded-2xl bg-[#f2fbfb] p-8">
        <h2 className="text-center text-lg font-medium mb-4">
          LOGIN
        </h2>

        <hr className="mb-6" />

        <label className="block text-sm mb-2">
          Mobile Number <span className="text-red-500">*</span>
        </label>

        <div className="flex border bg-white">
          <div className="px-3 py-2 border-r text-sm">+91</div>
          <input
            type="number"
            placeholder="enter your mobile number"
            className="flex-1 px-3 py-2 text-sm outline-none"
          />
        </div>

        <button className="w-full bg-blue-500 text-white mt-6 py-3 text-sm rounded">
          SEND OTP
        </button>
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-center text-lg mb-4">
            We've Got You Covered
          </h3>

          <div className="border rounded-lg divide-y">
            <div className="flex justify-between items-center px-4 py-3">
              <span>Free Shipping</span>
              <span>{">"}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <span>Easy 30-Day Return Policy</span>
              <span>{">"}</span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-center text-lg mb-4">
            We're The Best in Everything
          </h3>

          <div className="border rounded-lg divide-y">
            <div className="px-4 py-3 flex justify-between">
              <span>Best Price</span><span>{">"}</span>
            </div>
            <div className="px-4 py-3 flex justify-between">
              <span>Best Print Quality</span><span>{">"}</span>
            </div>
            <div className="px-4 py-3 flex justify-between">
              <span>Best Customer Service</span><span>{">"}</span>
            </div>
            <div className="px-4 py-3 flex justify-between">
              <span>Best Material</span><span>{">"}</span>
            </div>
            <div className="px-4 py-3 flex justify-between">
              <span>AI-Powered Enhancement Available</span><span>{">"}</span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-center text-lg mb-4">
            Our Milestones
          </h3>

          <div className="border rounded-lg divide-y">
            <div className="flex justify-between items-center px-4 py-3">
              <span>58 Lakh+ Products Delivered</span>
              <span>{">"}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <span>57134+ Google Reviews</span>
              <span>{">"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
