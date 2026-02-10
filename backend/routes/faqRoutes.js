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
      type: type || (category === "FAQ_PAGE" ? "faqPage" : "category"),
      section: category === "FAQ_PAGE" ? section || null : null
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
   - type wise
   - section wise
   ===================================================== */
router.get("/", async (req, res) => {
  try {
    const { category, section, type } = req.query

    const filter = {}

    if (category) filter.category = category
    if (type) filter.type = type
    if (section) filter.section = section

    const faqs = await Faq
      .find(filter)
      .populate("section")        // ✅ VERY IMPORTANT
      .sort({ createdAt: -1 })

    res.json(faqs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* =====================================================
   GET SINGLE FAQ BY ID
   ===================================================== */
router.get("/:id", async (req, res) => {
  try {
    const faq = await Faq
      .findById(req.params.id)
      .populate("section")

    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" })
    }

    res.json(faq)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
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
        type,
        section: category === "FAQ_PAGE" ? section || null : null
      },
      { new: true }
    ).populate("section")

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
