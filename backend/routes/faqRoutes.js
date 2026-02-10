import express from "express"
import Faq from "../models/Faq.js"

const router = express.Router()

// CREATE FAQ
router.post("/", async (req, res) => {
  const { question, answer, category } = req.body

  if (!question || !answer || !category) {
    return res.status(400).json({ message: "All fields required" })
  }

  const faq = await Faq.create({ question, answer, category })
  res.json(faq)
})

// GET FAQ (all / category-wise)
router.get("/", async (req, res) => {
  const { category } = req.query
  const filter = category ? { category } : {}

  const faqs = await Faq.find(filter).sort({ createdAt: -1 })
  res.json(faqs)
})

// UPDATE FAQ
router.put("/:id", async (req, res) => {
  const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(faq)
})

// DELETE FAQ
router.delete("/:id", async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export default router
