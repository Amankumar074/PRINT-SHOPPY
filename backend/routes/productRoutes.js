import express from "express"
import multer from "multer"
import Product from "../models/Product.js"
import fs from "fs"
import path from "path"

const router = express.Router()

// ================= STORAGE CONFIG =================
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

// ================= FILE FILTER =================
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true)
  } else {
    cb(new Error("Only image files allowed"), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1 * 1024 * 1024 }
})

/* =================================================
   🔥 GET PRODUCT BY SLUG (MUST BE FIRST)
================================================= */
router.get("/slug/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)
  } catch (err) {
    console.error("GET BY SLUG ERROR:", err)
    res.status(500).json({ message: err.message })
  }
})

/* =================================================
   ✅ CREATE PRODUCT
================================================= */
router.post("/create", upload.array("images", 6), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" })
    }

    const product = await Product.create({
      name: req.body.name,
      subtitle: req.body.subtitle,
      slug: req.body.slug,

      price: Number(req.body.price),
      oldPrice: Number(req.body.oldPrice),

      category: req.body.category,
      images: req.files.map(file => file.filename),

      pricingSlabs: JSON.parse(req.body.pricingSlabs || "[]"),
      options: JSON.parse(req.body.options || "[]"),
      details: JSON.parse(req.body.details || "[]"),
      trust: JSON.parse(req.body.trust || "[]"),

      personalizationEnabled:
        req.body.personalizationEnabled === "true"
    })

    res.status(201).json(product)
  } catch (err) {
    console.error("CREATE PRODUCT ERROR:", err)
    res.status(500).json({ message: err.message })
  }
})

/* =================================================
   ✅ GET ALL PRODUCTS
================================================= */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* =================================================
   ✅ DELETE SINGLE IMAGE
================================================= */
router.delete("/:id/image/:imageName", async (req, res) => {
  try {
    const { id, imageName } = req.params

    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    product.images = product.images.filter(img => img !== imageName)

    const imagePath = path.join("uploads", imageName)
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath)
    }

    await product.save()

    res.json({
      message: "Image deleted successfully",
      images: product.images
    })
  } catch (err) {
    console.error("DELETE IMAGE ERROR:", err)
    res.status(500).json({ message: err.message })
  }
})

/* =================================================
   ✅ DELETE PRODUCT
================================================= */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // delete images from folder
    product.images.forEach(img => {
      const imagePath = path.join("uploads", img)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    })

    await Product.findByIdAndDelete(req.params.id)

    res.json({ message: "Product deleted successfully" })
  } catch (err) {
    console.error("DELETE PRODUCT ERROR:", err)
    res.status(500).json({ message: err.message })
  }
})

/* =================================================
   ✅ UPDATE PRODUCT
================================================= */
router.put("/:id", upload.array("images", 6), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // 🔹 ADD NEW IMAGES (OLD SAFE)
    if (req.files && req.files.length > 0) {
      product.images.push(...req.files.map(f => f.filename))
    }

    // 🔹 BASIC FIELDS
    if (req.body.name) product.name = req.body.name
    if (req.body.subtitle) product.subtitle = req.body.subtitle
    if (req.body.slug) product.slug = req.body.slug
    if (req.body.price) product.price = Number(req.body.price)
    if (req.body.oldPrice) product.oldPrice = Number(req.body.oldPrice)
    if (req.body.category) product.category = req.body.category

    // 🔹 ADVANCED FIELDS
    if (req.body.pricingSlabs)
      product.pricingSlabs = JSON.parse(req.body.pricingSlabs)

    if (req.body.options)
      product.options = JSON.parse(req.body.options)

    if (req.body.details)
      product.details = JSON.parse(req.body.details)

    if (req.body.trust)
      product.trust = JSON.parse(req.body.trust)

    if (req.body.personalizationEnabled !== undefined)
      product.personalizationEnabled =
        req.body.personalizationEnabled === "true"

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } catch (err) {
    console.error("UPDATE PRODUCT ERROR:", err)
    res.status(500).json({ message: err.message })
  }
})

export default router
