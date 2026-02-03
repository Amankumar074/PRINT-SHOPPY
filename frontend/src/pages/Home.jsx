import HeroSection from "@/components/home/HeroSection"
import ProductSection from "@/components/home/ProductSection"
import GiftFinder from "@/components/home/GiftFinder"
import TrustBadges from "@/components/home/TrustBadges"

import {
  popularProducts,
  newInProducts,
  wallDecoratives,
} from "@/data/homeData"

export default function Home() {
  return (
    <>
      <HeroSection />

      <ProductSection
        title="POPULAR PRODUCTS"
        products={popularProducts}
        bg="bg-red-100 w-11/12"
      />
      <ProductSection
        title="new in"
        products={newInProducts}
        bg="bg-blue-100 w-full"
      />
      <ProductSection
        title="WALL DECORATIVES"
        products={wallDecoratives}
        bg="bg-white w-full"
      />


      <GiftFinder />
      <TrustBadges />
    </>
  )
}
