import { useEffect, useState } from "react"

import HeroSection from "@/components/home/HeroSection"
import ProductSection from "@/components/home/ProductSection"
import GiftFinder from "@/components/home/GiftFinder"
import TrustBadges from "@/components/home/TrustBadges"

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <HeroSection />

      {categories.map((cat) => {
  const categoryProducts = products.filter(
    (item) => item.category === cat.name   // 🔥 FIX
  )

  if (categoryProducts.length === 0) return null

  return (
    <ProductSection
      key={cat._id}
      title={cat.name}
      products={categoryProducts}
      bg="bg-white w-full"
    />
  )
})}


      <GiftFinder />
      <TrustBadges />
    </>
  )
}
