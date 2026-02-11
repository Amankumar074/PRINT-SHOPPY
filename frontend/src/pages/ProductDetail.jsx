import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "@/api/axios"
import { useCart } from "@/context/CartContext"

const API_URL = import.meta.env.VITE_API_URL

export default function ProductDetail() {
  const { slug } = useParams()
  const { cart, setCart } = useCart()

  const [product, setProduct] = useState(null)
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)

  const [activeImage, setActiveImage] = useState("")
  const [selectedOptions, setSelectedOptions] = useState({})
  const [personalText, setPersonalText] = useState("")

  const [customImage, setCustomImage] = useState(null)
  const [previewImage, setPreviewImage] = useState("")

  const [showFrameModal, setShowFrameModal] = useState(false)

  /* ================= SHAPES ================= */
  const [selectedShape, setSelectedShape] = useState("square")

  const shapes = [
    { id: 1, name: "Square", value: "square" },
    { id: 2, name: "Circle", value: "circle" },
    { id: 3, name: "Triangle", value: "triangle" }
  ]

  const getShapeStyle = () => {
    if (selectedShape === "circle") {
      return {
        borderRadius: "50%",
        clipPath: "circle(50% at 50% 50%)"
      }
    }

    if (selectedShape === "triangle") {
      return {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
      }
    }

    return {
      borderRadius: "0"
    }
  }

  /* ================= API ================= */
  useEffect(() => {
    api.get(`/api/products/slug/${slug}`)
      .then(res => {
        setProduct(res.data)

        if (res.data.images?.length > 0) {
          setActiveImage(res.data.images[0])
        }

        api.get(`/api/faqs?category=${res.data.category}`)
          .then(faqRes => setFaqs(faqRes.data))

        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  /* ================= ADD TO CART ================= */
  const addToCart = () => {
    if (product.options?.length > 0) {
      for (let opt of product.options) {
        if (!selectedOptions[opt.name]) {
          alert(`Please select ${opt.name}`)
          return
        }
      }
    }

    if (product.personalizationEnabled && !previewImage) {
      alert("Please upload photo")
      return
    }

    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      quantity: 1,
      options: selectedOptions,
      personalization: personalText,
      uploadedImage: previewImage,
      shape: selectedShape
    }

    setCart(prev => [...prev, cartItem])
    alert("Product added to cart")
  }

  if (loading) return <p className="p-10 text-center">Loading...</p>
  if (!product) return <p className="p-10 text-center">Product not found</p>

  return (
    <div className="max-w-[1400px] mx-auto w-full xl:w-10/12 py-14">

      {/* ================= HERO ================= */}
      <section className="grid lg:grid-cols-2 gap-16 mb-24">

        {/* ================= IMAGE GALLERY ================= */}
        <div>
          <img
            src={`${API_URL}/uploads/${activeImage}`}
            className="rounded-3xl mb-6 shadow-lg w-full"
            alt={product.name}
          />

          <div className="flex gap-4 flex-wrap">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={`${API_URL}/uploads/${img}`}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-24 object-cover rounded-xl border cursor-pointer
                  ${activeImage === img
                    ? "border-orange-500 ring-2 ring-orange-400"
                    : "hover:scale-105 transition"
                  }`}
                alt=""
              />
            ))}
          </div>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div>
          <span className="inline-block mb-3 text-xs tracking-widest font-semibold text-orange-500">
            BESTSELLER
          </span>

          <h1 className="text-4xl font-extrabold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            {product.subtitle}
          </p>

          {/* ================= PRICING SLABS ================= */}
          {product.pricingSlabs?.length > 0 && (
            <div className="mb-10">
              <h3 className="font-bold mb-4">Bulk Pricing</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.pricingSlabs.map((s, i) => (
                  <div key={i} className="border rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500">{s.qty}+ Quantity</p>
                    <p className="text-lg font-bold text-orange-500">
                      ₹{s.price} / unit
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= OPTIONS ================= */}
          {product.options?.length > 0 && (
            <div className="mb-8 space-y-4">
              {product.options.map((opt, i) => (
                <div key={i}>
                  <label className="block font-medium mb-2">
                    {opt.name}
                  </label>
                  <select
                    className="w-full border p-3 rounded-xl"
                    onChange={(e) =>
                      setSelectedOptions({
                        ...selectedOptions,
                        [opt.name]: e.target.value
                      })
                    }
                  >
                    <option value="">Select {opt.name}</option>
                    {opt.values.map((v, idx) => (
                      <option key={idx} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          {/* ================= PERSONALIZATION ================= */}
          {product.personalizationEnabled && (
            <>
              <div className="border-2 border-orange-400 rounded-2xl p-6 mb-8 bg-orange-50">
                <h3 className="font-bold mb-4">Personalize Your Product</h3>
                <input
                  type="text"
                  placeholder="Enter your name / text"
                  className="w-full border p-3 rounded-xl"
                  value={personalText}
                  onChange={(e) => setPersonalText(e.target.value)}
                />
              </div>

              <div className="border-2 border-dashed border-orange-400 rounded-2xl p-6 mb-10 bg-orange-50 text-center">
                <h3 className="font-bold mb-4">Upload Your Photo</h3>

                <button
                  onClick={() => setShowFrameModal(true)}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  📷 Choose Photo & Shape
                </button>

                {previewImage && (
                  <div className="mt-6 flex justify-center">
                    <img
                      src={previewImage}
                      className="w-40 h-40 object-cover shadow-lg"
                      style={getShapeStyle()}
                    />
                  </div>
                )}
              </div>
            </>
          )}

          {/* ================= PRICE ================= */}
          <div className="flex items-center gap-4 mb-8">
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-orange-500">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={addToCart}
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-5 rounded-2xl font-bold text-lg shadow-lg"
          >
            🛒 ADD TO CART
          </button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showFrameModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl rounded-2xl p-6 relative">

            <button
              onClick={() => setShowFrameModal(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Upload Photo & Select Shape
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="flex items-center justify-center">
                <div className="w-64 h-64 border rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      className="w-full h-full object-cover"
                      style={getShapeStyle()}
                    />
                  ) : (
                    <p className="text-gray-400">Upload image</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="file"
                  accept="image/*"
                  className="mb-6"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    setCustomImage(file)
                    setPreviewImage(URL.createObjectURL(file))
                  }}
                />

                <h3 className="font-semibold mb-3">Choose Shape</h3>

                <div className="grid grid-cols-3 gap-4">
                  {shapes.map(shape => (
                    <div
                      key={shape.id}
                      onClick={() => setSelectedShape(shape.value)}
                      className={`border rounded-lg p-4 cursor-pointer text-center
                        ${selectedShape === shape.value
                          ? "border-orange-500 ring-2 ring-orange-400"
                          : ""
                        }`}
                    >
                      <div
                        className="w-16 h-16 mx-auto bg-gray-300 mb-2"
                        style={
                          shape.value === "circle"
                            ? { borderRadius: "50%" }
                            : shape.value === "triangle"
                            ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
                            : {}
                        }
                      ></div>
                      <p className="text-xs font-medium">{shape.name}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (!previewImage) {
                      alert("Please upload an image")
                      return
                    }
                    setShowFrameModal(false)
                  }}
                  className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold"
                >
                  ✅ Done
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
      {/* ================= PRODUCT DETAILS ================= */}
      {product.details?.length > 0 && (
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-8">
            Product Details
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {product.details.map((d, i) => (
              <div key={i} className="bg-red-100 p-4 rounded-lg">
                <h3 className="text-xl text-white font-bold mb-3">
                  {d.title}
                </h3>
                <p className=" leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TRUST ================= */}
      {product.trust?.length > 0 && (
        <section className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-orange-500 to-orange-700 p-12 rounded-3xl mb-32">
          {product.trust.map((t, i) => (
            <div key={i} className="text-center text-white">
              <p className="font-bold mb-2">
                {t.icon}
              </p>
              <p className="text-sm">
                {t.text}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq._id}
                className="group border rounded-2xl bg-white shadow-sm p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg">
                  {faq.question}
                  <span className="text-orange-500 group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
