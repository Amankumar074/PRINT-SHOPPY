import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
