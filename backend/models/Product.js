import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    subtitle: String,

    slug: {
      type: String,
      required: true,
      unique: true
    },

    price: {
      type: Number,
      required: true
    },

    oldPrice: Number,

    category: {
      type: String,
      required: true
    },

    images: [String],

    // 🔥 PRINTSHOPPY STYLE PRICING
    pricingSlabs: [
      {
        qty: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],

    // 🔥 OPTIONS (SIZE / COLOR / PAPER etc.)
    options: [
      {
        name: {
          type: String,
          required: true
        },
        values: [String]
      }
    ],

    personalizationEnabled: {
      type: Boolean,
      default: true
    },

    // 🔥 PRODUCT DETAILS SECTION
    details: [
      {
        title: String,
        desc: String,
        image: String // optional (future use)
      }
    ],

    // 🔥 TRUST BADGES
    trust: [
      {
        icon: String,
        text: String
      }
    ],

    reviewsEnabled: {
      type: Boolean,
      default: true
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  { timestamps: true }
)

export default mongoose.model("Product", productSchema)
