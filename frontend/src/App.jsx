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
import EditProduct from "@/pages/admin/EditProduct"
import ProductList from "@/pages/admin/ProductList"
import AboutUs from './pages/AboutUs'
import Terms from './pages/Terms'
import ReferandEern from './pages/ReferandEern'
import Contectus from './pages/Contectus'
import Categories from "@/pages/admin/Categories"
import OrderHistory from './pages/OrderHistory'
import Faq from './pages/Faq'
import AccountPage from './pages/AccountPage'


function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mini-acrylic-photo-collage" element={<MiniAcrylicPhotoCollage />} />
        <Route path="/custom-engraved-metal-pen" element={<CustomEngravedMetalPen />} />
        <Route path="/personalized-name-pencil" element={<PersonalizedNamePencil />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/ReferandEern" element={<ReferandEern/>} />
        <Route path="/contact" element={<Contectus/>} />
        <Route path="/orders" element={<OrderHistory/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/account" element={<AccountPage/>} />
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* admin pages */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/products" element={<ProductList />} />

        <Route path="/admin/categories" element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
