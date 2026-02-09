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
   🔥 IMPORTANT: SLUG ROUTE (MUST BE FIRST)
================================================= */
router.get("/slug/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ================= CREATE PRODUCT =================
router.post("/create", upload.array("images", 6), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" })
    }

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      slug: req.body.slug,
      category: req.body.category,
      images: req.files.map(file => file.filename),
      subtitle: req.body.subtitle,
      oldPrice: req.body.oldPrice,
      pricingSlabs: JSON.parse(req.body.pricingSlabs || "[]"),
      options: JSON.parse(req.body.options || "[]"),
      details: JSON.parse(req.body.details || "[]"),
      trust: JSON.parse(req.body.trust || "[]"),
      personalizationEnabled: req.body.personalizationEnabled === "true"
    })

    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ================= GET ALL PRODUCTS =================
router.get("/", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// ================= DELETE PRODUCT =================
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    if (product.images && product.images.length > 0) {
      product.images.forEach(img => {
        const imagePath = path.join("uploads", img)
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
      })
    }

    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product deleted successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ================= UPDATE PRODUCT =================
router.put("/:id", upload.array("images", 6), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    if (req.files && req.files.length > 0) {
      if (product.images) {
        product.images.forEach(img => {
          const oldPath = path.join("uploads", img)
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath)
        })
      }
      product.images = req.files.map(file => file.filename)
    }

    if (req.body.name) product.name = req.body.name
    if (req.body.price) product.price = req.body.price
    if (req.body.slug) product.slug = req.body.slug
    if (req.body.category) product.category = req.body.category

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
