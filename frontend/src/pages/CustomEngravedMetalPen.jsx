export default function PremiumMetalNamePens() {

  // 🔹 DUMMY DATA (Backend-ready)
  const product = {
    title: "Premium Metal Name Pens",
    subtitle:
      "Elegant, personalized metal pens crafted for gifting, branding & everyday luxury writing.",
    rating: 4.4,
    reviews: 510,

    price: 299,
    oldPrice: 399,

    images: [
      "https://picsum.photos/seed/penhero/900/900",
      "https://picsum.photos/seed/pen1/300/300",
      "https://picsum.photos/seed/pen2/300/300",
      "https://picsum.photos/seed/pen3/300/300",
    ],

    pricingSlabs: [
      "Buy Any 2 or More @ ₹175 / Each",
      "Buy Any 5 or More @ ₹150 / Each",
      "Buy Any 10 or More @ ₹125 / Each",
      "Buy Any 20 or More @ ₹100 / Each",
    ],

    penTypes: [
      "Cap-Black Metal (Glossy)",
      "Cap-Gold Metal (Glossy)",
      "White Metal (Matte)",
    ],

    details: [
      {
        title: "Glossy Finish & Metal Body",
        desc:
          "Premium metal body with glossy finish delivers a luxurious feel, durability and superior grip for daily writing.",
        image: "https://picsum.photos/seed/pendetail1/600/400",
      },
      {
        title: "Smooth Ball Point Writing",
        desc:
          "Reliable blue ink flow ensures smooth writing with consistent line quality for long hours.",
        image: "https://picsum.photos/seed/pendetail2/600/400",
      },
    ],

    trust: [
      { title: "Printshoppy Promise", desc: "No Questions Asked Replacement" },
      { title: "Free Shipping", desc: "All Over India" },
      { title: "30 Days Easy Returns", desc: "Hassle-Free Returns" },
      { title: "10% Cashback", desc: "On Prepaid Orders" },
    ],

    
  }

  const data = {
    google: {
      rating: 4.4,
      total: "57,101",
    },

    reviews: [
      {
        name: "Bimlesh Verma",
        time: "1 day ago",
        text: "Just amazing products beyond my imagination.",
        avatar: "https://i.pravatar.cc/100?img=12",
      },
      {
        name: "Dr. M. Sushmasri",
        time: "1 day ago",
        text:
          "It was fantastic job... go the best If you want best photo then shop on PrintShoppy",
        avatar: "https://i.pravatar.cc/100?img=32",
      },
    ],

    images: [
      "https://picsum.photos/seed/revbig/600/600",
      "https://picsum.photos/seed/rev1/300/300",
      "https://picsum.photos/seed/rev2/300/300",
      "https://picsum.photos/seed/rev3/300/300",
      "https://picsum.photos/seed/rev4/300/300",
    ],
  }
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">

      {/* ================= HERO / TOP SECTION ================= */}
      <section className="grid lg:grid-cols-2 gap-16 mb-24">

        {/* LEFT: IMAGE GALLERY */}
        <div>
          <img
            src={product.images[0]}
            className="rounded-3xl mb-6 shadow-lg"
          />

          <div className="flex gap-4">
            {product.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-24 object-cover rounded-xl border hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div>

          <span className="inline-block mb-3 text-xs tracking-widest font-semibold text-theme-color-2">
            BESTSELLER
          </span>

          <h1 className="text-4xl font-extrabold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 text-lg mb-4">
            {product.subtitle}
          </p>

          <p className="text-sm text-gray-500 mb-8">
            ⭐ {product.rating} ({product.reviews}+ Verified Reviews)
          </p>

          {/* PRICING SLABS */}
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

          {/* PERSONALIZATION */}
          <div className="border-2 border-theme-color-2 rounded-2xl p-6 mb-10 bg-blue-50">

            <h3 className="font-bold mb-4">Personalize Your Pen</h3>

            <label className="text-sm font-medium">Select Pen Type</label>
            <select className="w-full border p-3 rounded-lg mb-4">
              {product.penTypes.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>

            <label className="text-sm font-medium">Your Name / Text</label>
            <input
              type="text"
              placeholder="Enter name to engrave"
              className="w-full border p-3 rounded-lg mb-6"
            />

            <button className="border border-theme-color-2 text-theme-color-2 px-6 py-3 rounded-lg font-semibold">
              + Add Another Name
            </button>
          </div>

          {/* PRICE + CTA */}
          <div className="flex items-center gap-4 mb-6">
            <span className="line-through text-gray-400 text-lg">
              ₹{product.oldPrice}
            </span>
            <span className="text-3xl font-bold text-theme-color-2">
              ₹{product.price}
            </span>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-5 rounded-2xl font-bold text-lg shadow-lg">
            🛒 ADD TO CART
          </button>

          {/* PINCODE */}
          <div className="mt-6 border rounded-xl p-4">
            <p className="text-sm font-medium mb-2">Check Delivery Availability</p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="border p-3 rounded-lg flex-1"
              />
              <button className="bg-theme-color-2 text-white px-6 rounded-lg">
                Check
              </button>
            </div>
          </div>

        </div>
      </section>
 <section className="max-w-[1400px] mx-auto px-6 py-16 border-t">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">
        <div className="text-4xl">👍</div>
        <h2 className="text-4xl font-extrabold tracking-wide">
          CUSTOMER SUBMITTED REVIEWS
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* GOOGLE REVIEW STRIP */}
          <div className="bg-gray-100 rounded-2xl px-8 py-6 flex items-center gap-6">
            <h3 className="text-2xl font-bold">
              Google Reviews
            </h3>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                {data.google.rating}
              </span>
              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>
              <span className="text-gray-500 text-sm">
                ({data.google.total})
              </span>
            </div>
          </div>

          {/* REVIEW CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {data.reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={r.avatar}
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                      {r.name}
                      <span className="text-blue-500">✔</span>
                    </h4>
                    <p className="text-sm text-gray-500">
                      {r.time}
                    </p>
                  </div>
                </div>

                <div className="text-yellow-400 mb-3 text-lg">
                  ★★★★★
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE – IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* BIG IMAGE */}
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img
              src={data.images[0]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* SMALL IMAGES */}
          {data.images.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
              />

              {i === 3 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
                  24+
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
      {/* ================= PRODUCT DETAILS ================= */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-14">
          Product Details
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {product.details.map((d, i) => (
            <div key={i}>
              <img src={d.image} className="rounded-2xl shadow-md mb-6" />
              <h3 className="text-xl font-bold mb-3">{d.title}</h3>
              <p className="text-gray-600 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-blue-400 to-gray-800 p-12 rounded-3xl">
        {product.trust.map((t, i) => (
          <div key={i} className="text-center">
            <h4 className="font-bold text-white mb-2">{t.title}</h4>
            <p className="text-sm text-white    ">{t.desc}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
