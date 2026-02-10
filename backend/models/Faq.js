import mongoose from "mongoose"

const faqSectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "faqPage"
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

export default mongoose.model("FaqSection", faqSectionSchema)
