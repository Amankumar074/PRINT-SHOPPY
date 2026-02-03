export default function MiniAcrylicPhotoCollage() {

  // 🔹 DUMMY DATA (Backend-ready)
  const product = {
    title: "Mini Acrylic Photo Collage",
    subtitle:
      "Turn your favourite moments into a stunning frameless photo collage that elevates your walls instantly.",
    cta: "Create Your Collage",

    heroImage: "https://picsum.photos/seed/acrylichero/900/650",
    wallPreview: "https://picsum.photos/seed/acrylicwall/900/650",

    highlights: [
      "HD Photo Printing",
      "Premium Acrylic Finish",
      "Water & Dust Resistant",
      "Easy Peel & Stick Mounting",
      "Made in India",
    ],

    pricing: [
      "2 – 4 Frames @ ₹299 / Frame",
      "5 – 9 Frames @ ₹249 / Frame",
      "10 – 19 Frames @ ₹199 / Frame",
      "20+ Frames @ ₹149 / Frame",
    ],

    comparison: {
      others: {
        title: "Traditional Frames",
        desc: "Bulky borders, limited image visibility",
        image: "https://picsum.photos/seed/oldframe/350/350",
      },
      printshoppy: {
        title: "Mini Acrylic Collage",
        desc: "Frameless, modern & edge-to-edge prints",
        image: "https://picsum.photos/seed/acrylicnew/350/350",
      },
    },

    features: [
      {
        title: "Truly Frameless Design",
        desc: "Crafted using premium acrylic sheets, the collage offers a sleek frameless appearance that blends seamlessly with modern interiors.",
        image: "https://picsum.photos/seed/featurea/800/550",
      },
      {
        title: "Not Glass — Stronger Than Glass",
        desc: "Our acrylic material is lighter, safer, and shatter-resistant while delivering exceptional clarity.",
        image: "https://picsum.photos/seed/featureb/800/550",
      },
      {
        title: "Multiple Shape Combinations",
        desc: "Choose from square, hexagon, heart & circle shapes to create your own custom wall story.",
        image: "https://picsum.photos/seed/featurec/800/550",
      },
      {
        title: "Upload → Preview → Checkout",
        desc: "Upload photos, preview layout instantly, and place your order in minutes.",
        image: "https://picsum.photos/seed/featured/800/550",
      },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-sm">
        <img
          src={product.heroImage}
          className="rounded-2xl object-cover"
        />

        <div className="flex flex-col justify-center">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-theme-color-2">
            BESTSELLER
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.subtitle}
          </p>

          <button className="bg-theme-color-2 hover:bg-theme-color-4 transition text-white px-8 py-4 rounded-full w-fit font-semibold shadow-md">
            {product.cta} →
          </button>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-14">
        <h2 className="text-center text-2xl font-bold mb-10">
          Why You’ll Love It
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {product.highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 text-sm font-medium shadow-sm hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WALL PREVIEW */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-14 px-6">
        <img
          src={product.wallPreview}
          className="rounded-2xl shadow-md"
        />

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Designed To Elevate Your Space
          </h3>
          <p className="text-gray-600 leading-relaxed">
            No drilling. No damage. Just peel, stick and enjoy a premium
            wall display that speaks your story.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-3xl px-6">
        <h3 className="text-center text-xl font-bold mb-6">
          Smart Pricing That Saves More
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {product.pricing.map((p, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl text-sm font-medium shadow-sm"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="grid md:grid-cols-3 gap-8 py-16">
        <div className="bg-gray-100 p-6 text-center rounded-2xl">
          <img src={product.comparison.others.image} className="mx-auto mb-4 rounded-lg" />
          <h4 className="font-bold mb-2">{product.comparison.others.title}</h4>
          <p className="text-sm text-gray-600">{product.comparison.others.desc}</p>
        </div>

        <div className="bg-white p-6 text-center rounded-2xl border-2 border-theme-color-2 shadow-md">
          <img src={product.comparison.printshoppy.image} className="mx-auto mb-4 rounded-lg" />
          <h4 className="font-bold mb-2 text-theme-color-2">
            {product.comparison.printshoppy.title}
          </h4>
          <p className="text-sm text-gray-600">{product.comparison.printshoppy.desc}</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl">
          <h4 className="font-bold mb-3">Minimal • Modern • Memorable</h4>
          <p className="text-sm text-gray-600">
            Designed for homes that love clean aesthetics and meaningful decor.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      {/* FEATURES */}
<section className="space-y-20 py-14 px-6">
  {product.features.map((f, i) => (
    <div
      key={i}
      className={`grid md:grid-cols-2 gap-12 items-center`}
    >
      {/* IMAGE */}
      <div
        className={`${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}
      >
        <img
          src={f.image}
          alt={f.title}
          className="rounded-2xl shadow-md w-full"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}
      >
        <h3 className="text-2xl font-bold mb-4">
          {f.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {f.desc}
        </p>
      </div>
    </div>
  ))}
</section>


    </div>
  )
}
