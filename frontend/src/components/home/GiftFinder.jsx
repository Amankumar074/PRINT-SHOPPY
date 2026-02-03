export default function GiftFinder() {
  return (
    <section className="py-12 bg-theme-color-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Find The Perfect Gift
          </h2>
          <p className="text-sm opacity-80">
            Explore Gifts by Relationships, Occasions & Recipient
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-theme-color-2 text-white px-6 py-3 rounded-lg">
          Start Now →
        </button>
      </div>
    </section>
  )
}
