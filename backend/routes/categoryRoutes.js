import express from "express"
import Category from "../models/Category.js"

const router = express.Router()

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 })
    res.json(categories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// CREATE category
router.post("/", async (req, res) => {
  try {
    const count = await Category.countDocuments()
    const category = await Category.create({
      name: req.body.name,
      order: count + 1
    })
    res.json(category)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
