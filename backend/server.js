import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import authRoutes from "./routes/auth.js";

import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import faqRoutes from "./routes/faqRoutes.js"
import faqSectionRoutes from "./routes/faqSectionRoutes.js"


const app = express()

// ESM me __dirname banana padta hai
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes);

// ✅ uploads folder ko public banana (IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/api/faqs", faqRoutes)
app.use("/api/faq-sections", faqSectionRoutes)

mongoose
  .connect("mongodb://127.0.0.1:27017/mernshop")
  .then(() => console.log("MongoDB Connected"))

app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)


app.listen(5000, () => {
  console.log("Server running on port 5000")
})
