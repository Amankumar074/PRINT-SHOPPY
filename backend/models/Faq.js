import mongoose from "mongoose"

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },

  answer: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["category", "faqPage"],
    default: "category"
  },

  category: {
    type: String,
    required: true
  },

  // ✅ ADD THIS
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FaqSection",
    default: null
  }

}, { timestamps: true })

export default mongoose.model("Faq", faqSchema)
