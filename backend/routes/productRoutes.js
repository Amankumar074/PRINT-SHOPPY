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

// ================= CREATE PRODUCT =================
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" })
    }

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      slug: req.body.slug,
      category: req.body.category,
      image: req.file.filename
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

// ================= DELETE PRODUCT (IMAGE ALSO DELETE) =================
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // 🔥 delete image file
    if (product.image) {
      const imagePath = path.join("uploads", product.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    }

    await Product.findByIdAndDelete(req.params.id)

    res.json({ message: "Product deleted successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ================= UPDATE PRODUCT (OLD IMAGE DELETE) =================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // 🔥 agar new image aayi → old image delete
    if (req.file && product.image) {
      const oldImagePath = path.join("uploads", product.image)
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath)
      }
      product.image = req.file.filename
    }

    // 🔹 update only provided fields
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
