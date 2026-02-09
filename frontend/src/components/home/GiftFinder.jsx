export default function GiftFinder() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto bg-[#E9F7F5] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden">

        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B4D4A] leading-tight">
            FIND <br />
            THE PERFECT GIFT
          </h2>

          <p className="mt-3 text-[#0B4D4A]/80 text-base">
            Explore Gifts by Relationships, Occasions & Recipient.
          </p>

          <button
            className="
              mt-6 inline-flex items-center gap-2
              bg-blue-600 text-white font-semibold
              px-6 py-3 rounded-md
              transition-all duration-300
              hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg
            "
          >
            START NOW
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Decorative Background Icons (Optional) */}
        <div className="hidden md:block absolute right-6 top-6 opacity-10 text-8xl">
          ❄
        </div>
        <div className="hidden md:block absolute right-24 bottom-6 opacity-10 text-7xl">
          🎁
        </div>
      </div>
    </section>
  )
}
