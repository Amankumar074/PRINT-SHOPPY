import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  order: {
    type: Number,
    default: 0,
  },

  // 🔹 NEW FIELDS (UI CONTROL)
  showSlider: {
    type: Boolean,
    default: false,
  },

  widthPercent: {
    type: Number,
    default: 100, // full width
    min: 10,
    max: 100,
  },

  bgColor: {
    type: String,
    default: "#ffffff",
  },

  imagesPerRow: {
    type: Number,
    default: 4,
    min: 1,
    max: 6,
  },
}, { timestamps: true });

export default mongoose.model("Category", categorySchema);
