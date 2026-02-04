import '@/App.css'
import { Routes, Route } from "react-router-dom"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
// import NotFound from "@/pages/NotFound"

import Home from "@/pages/Home"

import MiniAcrylicPhotoCollage from "@/pages/MiniAcrylicPhotoCollage"
import PersonalizedNamePencil from "@/pages/PersonalizedNamePencil"
import CustomEngravedMetalPen from "@/pages/CustomEngravedMetalPen"
import CustomizableFridgeMagnet from "@/pages/CustomizableFridgeMagnet"

// admin pages
import Dashboard from "@/pages/admin/Dashboard"
import AddProduct from "@/pages/admin/AddProduct"
import ProductList from "@/pages/admin/ProductList"


function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mini-acrylic-photo-collage" element={<MiniAcrylicPhotoCollage />} />
        <Route path="/custom-engraved-metal-pen" element={<CustomEngravedMetalPen />} />
        <Route path="/personalized-name-pencil" element={<PersonalizedNamePencil />} />
        <Route path="/customizable-fridge-magnet" element={<CustomizableFridgeMagnet />} />
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* admin pages */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<ProductList />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
