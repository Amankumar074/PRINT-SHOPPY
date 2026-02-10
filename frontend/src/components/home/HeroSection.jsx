export default function HeroSection() {
  return (
    <section className="">

      <div className="mx-auto">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/330/145/non_2x/golden-gift-certificate-template-with-ribbon-bow-elegant-design-for-anniversary-birthday-wedding-business-and-more-illustration-luxury-black-and-gold-gift-card-premium-banner-free-vector.jpg"
          className=" w-full"
          alt="Hero"
        />
      </div>

      <div className="max-w-3xl mx-auto mb-8 px-4 mt-4">
        <input
          type="text"
          placeholder="Search for Acrylic Frames, Luggage Tags etc."
          className="w-full px-6 py-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-theme-color-2"
        />
      </div>

    </section>
  )
}
