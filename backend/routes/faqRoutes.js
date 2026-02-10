import express from "express"
import Faq from "../models/Faq.js"

const router = express.Router()

// ✅ CREATE FAQ
router.post("/", async (req, res) => {
  const faq = await Faq.create(req.body)
  res.json(faq)
})

// ✅ GET ALL FAQ
router.get("/", async (req, res) => {
  const faqs = await Faq.find().sort({ createdAt: -1 })
  res.json(faqs)
})

// ✅ UPDATE FAQ
router.put("/:id", async (req, res) => {
  const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(faq)
})

// ✅ DELETE FAQ
router.delete("/:id", async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export default router
