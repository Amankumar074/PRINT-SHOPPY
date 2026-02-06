import express from "express"
import multer from "multer"
import Product from "../models/Product.js"

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
  limits: { fileSize: 1 * 1024 * 1024 } // 1MB
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

// ================= DELETE PRODUCT =================
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product deleted successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// ================= UPDATE PRODUCT =================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      price: req.body.price,
      slug: req.body.slug,
      category: req.body.category,
    }

    // agar new image aayi hai
    if (req.file) {
      updateData.image = req.file.filename
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )

    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
