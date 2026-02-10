import express from "express"
import FaqSection from "../models/FaqSection.js"

const router = express.Router()

// CREATE
router.post("/", async (req, res) => {
  const section = await FaqSection.create(req.body)
  res.status(201).json(section)
})

// READ
router.get("/", async (req, res) => {
  const sections = await FaqSection.find().sort({ order: 1 })
  res.json(sections)
})

// UPDATE
router.put("/:id", async (req, res) => {
  const section = await FaqSection.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(section)
})

// DELETE
router.delete("/:id", async (req, res) => {
  await FaqSection.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export default router
