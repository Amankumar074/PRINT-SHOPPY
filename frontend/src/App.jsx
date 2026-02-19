import '@/App.css'
import { Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"

import PublicLayout from "@/layouts/PublicLayout"
import AdminLayout from "@/layouts/AdminLayout"

import NotFound from "@/pages/NotFound"

// public pages
import Home from "@/pages/Home"
import ProductDetail from "@/pages/ProductDetail"
import Register from '@/pages/commonpage/Register'
import Login from '@/pages/commonpage/Login'
import Cart from "@/pages/Cart"
import AboutUs from '@/pages/AboutUs'
import Terms from '@/pages/Terms'
import ReferandEern from '@/pages/ReferandEern'
import Contectus from '@/pages/Contectus'
import Faq from '@/pages/Faq'
import AccountPage from '@/pages/AccountPage'
import Transactions from '@/pages/Transactions'
import Order from '@/pages/Order'
import FaqDetails from './pages/FaqDetails'

// admin pages
import Dashboard from "@/pages/admin/Dashboard"
import AddProduct from "@/pages/admin/AddProduct"
import EditProduct from "@/pages/admin/EditProduct"
import ProductList from "@/pages/admin/ProductList"
import AdminFaq from "@/pages/admin/AdminFaq"
import Categories from "@/pages/admin/Categories"
import AdminSettings from "@/pages/admin/AdminSettings"

function App() {
  return (
    <CartProvider>
      <Routes>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ReferandEern" element={<ReferandEern />} />
          <Route path="/contact" element={<Contectus />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqdetails/:id" element={<FaqDetails />} />
          <Route path="/credits" element={<Transactions />} />
        </Route>

        {/* ===== ADMIN ROUTES ===== */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/faqs" element={<AdminFaq />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        {/* ===== 404 ===== */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </CartProvider>
  )
}

export default App
