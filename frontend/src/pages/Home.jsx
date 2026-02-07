import { useEffect, useState } from "react";

import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import GiftFinder from "@/components/home/GiftFinder";
import TrustBadges from "@/components/home/TrustBadges";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🔹 Load all products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Products error:", err));
  }, []);

  // 🔹 Load all categories
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Categories error:", err));
  }, []);

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
