import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mb-6">
      <div
        className="relative min-h-[200px] flex flex-col items-center justify-center mb-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Login page
          </h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </div>
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

        <p className="text-center text-sm text-gray-600 mt-6">
         Don’t have an account?{" "}
         <Link to="/register">
          <span className="text-blue-500 cursor-pointer font-medium">
            Register
          </span>
          </Link>
        </p>
      </div>
     
    </div>
  );
}
