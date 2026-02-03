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
      </Routes>

      <Footer />
    </div>
  )
}

export default App
