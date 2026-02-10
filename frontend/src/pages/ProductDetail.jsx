import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "@/api/axios"

const API_URL = import.meta.env.VITE_API_URL

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState("")

  useEffect(() => {

    api.get(`/api/products/slug/${slug}`)
      .then(res => {
        setProduct(res.data)
        if (res.data.images && res.data.images.length > 0) {
          setActiveImage(res.data.images[0])
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [slug])

  if (loading) return <p className="p-10 text-center">Loading...</p>
  if (!product) return <p className="p-10 text-center">Product not found</p>

  return (
    <div className="max-w-[1400px] mx-auto w-full xl:w-10/12 py-14">

      {/* ================= HERO ================= */}
      <section className="grid lg:grid-cols-2 gap-16 mb-24">

        {/* IMAGE GALLERY */}
        <div>
          {/* 🔥 MAIN IMAGE */}
          <img
            src={`${API_URL}/uploads/${activeImage}`}
            className="rounded-3xl mb-6 shadow-lg w-full"
            alt={product.name}
          />

          {/* 🔹 THUMBNAILS */}
          <div className="flex gap-4">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={`${API_URL}/uploads/${img}`}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-24 object-cover rounded-xl border cursor-pointer
              ${activeImage === img
                    ? "border-orange-500 ring-2 ring-orange-400"
                    : "hover:scale-105 transition"
                  }
            `}
                alt=""
              />
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>

          <span className="inline-block mb-3 text-xs tracking-widest font-semibold text-theme-color-2">
            BESTSELLER
          </span>

          <h1 className="text-4xl font-extrabold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg mb-4">
            {product.subtitle}
          </p>

          {/* PRICING SLABS */}
          {product.pricingSlabs?.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {product.pricingSlabs.map((p, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 text-center text-sm bg-white shadow-sm"
                >
                  {p}
                </div>
              ))}
            </div>
          )}

          {/* PERSONALIZATION */}
          {product.personalizationEnabled && (
            <div className="border-2 border-theme-color-2 rounded-2xl p-6 mb-10 bg-blue-50">

              <h3 className="font-bold mb-4">Personalize Your Product</h3>

              <label className="text-sm font-medium">Select Option</label>
              <select className="w-full border p-3 rounded-lg mb-4">
                {product.options?.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>

              <label className="text-sm font-medium">Your Name / Text</label>
              <input
                type="text"
                placeholder="Enter text"
                className="w-full border p-3 rounded-lg mb-6"
              />
            </div>
          )}

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-6">
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-theme-color-2">
              ₹{product.price}
            </span>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-5 rounded-2xl font-bold text-lg shadow-lg">
            🛒 ADD TO CART
          </button>

        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      {product.details?.length > 0 && (
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-14">
            Product Details
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {product.details.map((d, i) => (
              <div key={i}>
                <img
                  src={`${API_URL}/uploads/${d.image}`}
                  className="rounded-2xl shadow-md mb-6"
                  alt={d.title}
                />

                <h3 className="text-xl font-bold mb-3">
                  {d.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TRUST ================= */}
      {product.trust?.length > 0 && (
        <section className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-blue-400 to-gray-800 p-12 rounded-3xl">
          {product.trust.map((t, i) => (
            <div key={i} className="text-center">
              <h4 className="font-bold text-white mb-2">
                {t.title}
              </h4>
              <p className="text-sm text-white">
                {t.desc}
              </p>
            </div>
          ))}
        </section>
      )}

    </div>
  )
}
