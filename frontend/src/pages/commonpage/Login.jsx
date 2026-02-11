import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [step, setStep] = useState(1); // 1 = mobile, 2 = otp
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // 🔹 SEND OTP
  const sendOtp = async () => {
    if (mobile.length !== 10) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/send-otp", {
        mobile,
      });
      setStep(2);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  // 🔹 VERIFY OTP
  const verifyOtp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { mobile, otp }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/"); // home ya dashboard
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="mb-6">
      {/* BANNER */}
      <div
        className="relative min-h-[200px] flex flex-col items-center justify-center mb-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Login page
          </h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">
            Login using OTP on your mobile number
          </p>
        </div>
      </div>

      {/* LOGIN BOX */}
      <div className="max-w-md mx-auto border border-teal-400 rounded-2xl bg-[#f2fbfb] p-8">
        <h2 className="text-center text-lg font-medium mb-4">LOGIN</h2>
        <hr className="mb-6" />

        {/* STEP 1 – MOBILE */}
        {step === 1 && (
          <>
            <label className="block text-sm mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <div className="flex border bg-white">
              <div className="px-3 py-2 border-r text-sm">+91</div>
              <input
                type="number"
                placeholder="enter your mobile number"
                className="flex-1 px-3 py-2 text-sm outline-none"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button
              onClick={sendOtp}
              className="w-full bg-blue-500 text-white mt-6 py-3 text-sm rounded"
            >
              SEND OTP
            </button>
          </>
        )}

        {/* STEP 2 – OTP */}
        {step === 2 && (
          <>
            <label className="block text-sm mb-2">
              Enter OTP <span className="text-red-500">*</span>
            </label>

            <input
              type="number"
              placeholder="Enter OTP"
              className="w-full px-3 py-2 text-sm border outline-none bg-white"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white mt-6 py-3 text-sm rounded"
            >
              VERIFY OTP
            </button>
          </>
        )}

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
