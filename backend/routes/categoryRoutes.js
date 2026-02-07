import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE category
router.post("/", async (req, res) => {
  try {
    const count = await Category.countDocuments();
    const category = await Category.create({
      name: req.body.name,
      order: count + 1,
    });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔥 UPDATE category (EDIT PANEL KE LIYE)
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        showSlider: req.body.showSlider,
        widthPercent: req.body.widthPercent,
        bgColor: req.body.bgColor,
        imagesPerRow: req.body.imagesPerRow,
      },
      { new: true }
    );

    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔥 DELETE category
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
