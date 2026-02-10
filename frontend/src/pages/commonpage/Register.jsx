import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="mb-6">

      {/* HERO / HEADER (same as Login) */}
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
            Register
          </h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">
            Create your account to get started
          </p>
        </div>
      </div>

      {/* REGISTER BOX */}
      <div className="max-w-md mx-auto border border-teal-400 rounded-2xl bg-[#f2fbfb] p-8">
        <h2 className="text-center text-lg font-medium mb-4">
          CREATE ACCOUNT
        </h2>

        <hr className="mb-6" />

        {/* Full Name */}
        <label className="block text-sm mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border bg-white px-3 py-2 text-sm rounded outline-none mb-4"
        />

        {/* Mobile */}
        <label className="block text-sm mb-2">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="flex border bg-white rounded mb-4">
          <div className="px-3 py-2 border-r text-sm">+91</div>
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="flex-1 px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Password */}
        <label className="block text-sm mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Create password"
          className="w-full border bg-white px-3 py-2 text-sm rounded outline-none mb-4"
        />

        {/* Confirm Password */}
        <label className="block text-sm mb-2">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border bg-white px-3 py-2 text-sm rounded outline-none mb-4"
        />

        {/* Terms */}
        <div className="flex items-center text-xs mb-5">
          <input type="checkbox" className="mr-2" />
          <span>
            I agree to the{" "}
            <span className="text-blue-500 cursor-pointer">
              Terms & Conditions
            </span>
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 text-white py-3 text-sm rounded">
          REGISTER
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
         <Link to="/login">
          <span className="text-blue-500 cursor-pointer font-medium">
            Login
          </span>
          </Link>
        </p>
      </div>

    </div>
  );
}
