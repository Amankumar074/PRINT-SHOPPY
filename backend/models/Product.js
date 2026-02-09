import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subtitle: String,

    slug: { type: String, required: true, unique: true },

    price: Number,
    oldPrice: Number,

    category: { type: String, required: true },

    images: [String],  

    pricingSlabs: [String],

    options: [String],
    personalizationEnabled: {
      type: Boolean,
      default: true
    },

    details: [
      {
        title: String,
        desc: String,
        image: String
      }
    ],

    trust: [
      {
        title: String,
        desc: String
      }
    ],

    reviewsEnabled: {
      type: Boolean,
      default: true
    },

    status: {
      type: String,
      default: "active"
    }
  },
  { timestamps: true }
)

export default mongoose.model("Product", productSchema)
