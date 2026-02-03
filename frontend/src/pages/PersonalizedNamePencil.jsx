export default function PremiumMetalNamePencils() {

  // ================= PRODUCT DATA =================
  const product = {
    title: "Premium Metal Name Pencils",
    subtitle:
      "Elegant, personalized metal pencils crafted for gifting, branding & everyday premium writing.",
    rating: 4.4,
    reviews: 510,

    price: 199,
    oldPrice: 299,

    images: [
      "https://picsum.photos/seed/pencilhero/900/900",
      "https://picsum.photos/seed/pencil1/300/300",
      "https://picsum.photos/seed/pencil2/300/300",
      "https://picsum.photos/seed/pencil3/300/300",
    ],

    pricingSlabs: [
      "Buy Any 2 or More @ ₹149 / Each",
      "Buy Any 5 or More @ ₹129 / Each",
      "Buy Any 10 or More @ ₹109 / Each",
      "Buy Any 20 or More @ ₹89 / Each",
    ],

    pencilTypes: [
      "Black Metal Pencil (Glossy)",
      "Gold Metal Pencil (Glossy)",
      "White Metal Pencil (Matte)",
    ],

    details: [
      {
        title: "Premium Metal Body Finish",
        desc:
          "High-quality metal body pencil with a smooth glossy finish that delivers durability, balance and a luxury feel.",
        image: "https://picsum.photos/seed/pencildetail1/600/400",
      },
      {
        title: "Smooth Graphite Writing",
        desc:
          "Soft graphite core ensures smooth, consistent writing and sketching for everyday use.",
        image: "https://picsum.photos/seed/pencildetail2/600/400",
      },
    ],

    trust: [
      { title: "Printshoppy Promise", desc: "No Questions Asked Replacement" },
      { title: "Free Shipping", desc: "All Over India" },
      { title: "30 Days Easy Returns", desc: "Hassle-Free Returns" },
      { title: "10% Cashback", desc: "On Prepaid Orders" },
    ],
  }

  // ================= REVIEWS DATA =================
  const reviewsData = {
    google: {
      rating: 4.4,
      total: "57,101",
    },

    reviews: [
      {
        name: "Bimlesh Verma",
        time: "1 day ago",
        text: "Premium quality pencils, finish is excellent and looks classy.",
        avatar: "https://i.pravatar.cc/100?img=12",
      },
      {
        name: "Dr. M. Sushmasri",
        time: "1 day ago",
        text:
          "The personalized metal pencils are fantastic. Perfect for gifting and daily use.",
        avatar: "https://i.pravatar.cc/100?img=32",
      },
    ],

    images: [
      "https://picsum.photos/seed/pencilrevbig/600/600",
      "https://picsum.photos/seed/pencilrev1/300/300",
      "https://picsum.photos/seed/pencilrev2/300/300",
      "https://picsum.photos/seed/pencilrev3/300/300",
      "https://picsum.photos/seed/pencilrev4/300/300",
    ],
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-14">

      {/* ================= HERO SECTION ================= */}
      <section className="grid lg:grid-cols-2 gap-16 mb-24">

        {/* LEFT IMAGES */}
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

        {/* RIGHT INFO */}
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

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {product.pricingSlabs.map((p, i) => (
              <div key={i} className="border rounded-xl p-4 text-center text-sm bg-white shadow-sm">
                {p}
              </div>
            ))}
          </div>

          <div className="border-2 border-theme-color-2 rounded-2xl p-6 mb-10 bg-blue-50">
            <h3 className="font-bold mb-4">Personalize Your Pencil</h3>

            <label className="text-sm font-medium">Select Pencil Type</label>
            <select className="w-full border p-3 rounded-lg mb-4">
              {product.pencilTypes.map((p, i) => (
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

      {/* ================= CUSTOMER SUBMITTED REVIEWS ================= */}
      <section className="border-t pt-20 mb-24">

        <div className="flex items-center gap-4 mb-10">
          <div className="text-4xl">👍</div>
          <h2 className="text-4xl font-extrabold tracking-wide">
            CUSTOMER SUBMITTED REVIEWS
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-gray-100 rounded-2xl px-8 py-6 flex items-center gap-6">
              <h3 className="text-2xl font-bold">Google Reviews</h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold">
                  {reviewsData.google.rating}
                </span>
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <span className="text-gray-500 text-sm">
                  ({reviewsData.google.total})
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviewsData.reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={r.avatar} className="w-14 h-14 rounded-full" />
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        {r.name}
                        <span className="text-blue-500">✔</span>
                      </h4>
                      <p className="text-sm text-gray-500">{r.time}</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
                  <p className="text-gray-700 leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <img src={reviewsData.images[0]} className="w-full h-full object-cover" />
            </div>

            {reviewsData.images.slice(1).map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden">
                <img src={img} className="w-full h-full object-cover" />
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
            <p className="text-sm text-white">{t.desc}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
