import express from "express"
import Faq from "../models/Faq.js"

const router = express.Router()

/* =====================================================
   CREATE FAQ
   ===================================================== */
router.post("/", async (req, res) => {
  try {
    const { question, answer, category, section, type } = req.body

    if (!question || !answer || !category) {
      return res.status(400).json({
        message: "question, answer, category are required"
      })
    }

    const faq = await Faq.create({
      question,
      answer,
      category,
      section: category === "FAQ_PAGE" ? section || "" : "",
      type: type || (category === "FAQ_PAGE" ? "faqPage" : "category")
    })

    res.status(201).json(faq)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* =====================================================
   GET FAQS
   - all
   - category wise
   - faq page wise
   - section wise
   ===================================================== */
router.get("/", async (req, res) => {
  try {
    const { category, section, type } = req.query

    const filter = {}

    if (category) filter.category = category
    if (type) filter.type = type
    if (section) filter.section = section

    const faqs = await Faq.find(filter).sort({ createdAt: -1 })
    res.json(faqs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* =====================================================
   GET SINGLE FAQ
   ===================================================== */
router.get("/", async (req, res) => {
  const { category, section, type } = req.query

  const filter = {}
  if (category) filter.category = category
  if (type) filter.type = type
  if (section) filter.section = section

  const faqs = await Faq
    .find(filter)
    .populate("section")   // ✅ IMPORTANT
    .sort({ createdAt: -1 })

  res.json(faqs)
})


/* =====================================================
   UPDATE FAQ
   ===================================================== */
router.put("/:id", async (req, res) => {
  try {
    const { question, answer, category, section, type } = req.body

    const faq = await Faq.findByIdAndUpdate(
      req.params.id,
      {
        question,
        answer,
        category,
        section: category === "FAQ_PAGE" ? section || "" : "",
        type
      },
      { new: true }
    )

    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" })
    }

    res.json(faq)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* =====================================================
   DELETE FAQ
   ===================================================== */
router.delete("/:id", async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id)

    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" })
    }

    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
