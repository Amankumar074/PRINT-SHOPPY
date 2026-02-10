import { useEffect, useState } from "react";
import api from "@/api/axios";

import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import GiftFinder from "@/components/home/GiftFinder";
import TrustBadges from "@/components/home/TrustBadges";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🔹 Load all products
  useEffect(() => {
  api
    .get("/api/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.error("Products error:", err))
}, [])


  // 🔹 Load all categories
  useEffect(() => {
  api
    .get("/api/categories")
    .then((res) => setCategories(res.data))
    .catch((err) => console.error("Categories error:", err))
}, [])


  return (
    <>
      <HeroSection />

      {/* 🔥 CATEGORY SECTIONS */}
      {categories.map((cat) => {
        // category ke products filter karo
        const categoryProducts = products.filter(
          (item) => item.category === cat.name
        );

        // agar is category me product nahi → skip
        if (categoryProducts.length === 0) return null;

        return (
          <ProductSection
            key={cat._id}
            category={cat}                 // ✅ FULL CATEGORY OBJECT
            products={categoryProducts}    // ✅ CATEGORY PRODUCTS
          />
        );
      })}

      <GiftFinder />
      <TrustBadges />
    </>
  );
}
