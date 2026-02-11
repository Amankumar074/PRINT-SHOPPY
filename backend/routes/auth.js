import express from "express";
import User from "../models/User.js";
import Otp from "../models/Otp.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 🔹 SEND OTP
router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.deleteMany({ mobile });

  await Otp.create({
    mobile,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  console.log("OTP (DEV MODE):", otp);

  res.json({ success: true });
});

// 🔹 VERIFY OTP
router.post("/verify-otp", async (req, res) => {
  const { mobile, otp } = req.body;

  const record = await Otp.findOne({ mobile, otp });

  if (!record || record.expiresAt < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  let user = await User.findOne({ mobile });
  if (!user) {
    user = await User.create({ mobile });
  }

  await Otp.deleteMany({ mobile });

  const token = jwt.sign(
    { userId: user._id },
    "SECRET_KEY",
    { expiresIn: "7d" }
  );

  res.json({ token });
});

export default router;
