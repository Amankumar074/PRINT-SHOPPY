export default function Footer() {
  return (
    <footer className="bg-theme-color-1 text-white">
      
      {/* TOP FEATURES */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center py-6 gap-6">
          <div>
            <p className="font-semibold uppercase">Premium Quality Assured</p>
          </div>
          <div className="border-x border-white/20">
            <p className="font-semibold uppercase">Free and Fast Delivery</p>
          </div>
          <div>
            <p className="font-semibold uppercase">30 Days Return Policy</p>
          </div>
        </div>
      </div>

      {/* SOCIAL + SUPPORT */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-10 gap-10">

          {/* FOLLOW US */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">FOLLOW US</h3>
            <div className="flex justify-center gap-6">
              {["Facebook", "Twitter", "Instagram", "Youtube"].map((item) => (
                <div key={item} className="text-sm text-white/80 hover:text-theme-color-4 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">SUPPORT</h3>
            <p className="text-white/70 mb-6">Got Questions? We're Here To Help</p>
            <div className="flex justify-center gap-10">
              <span className="hover:text-theme-color-4 cursor-pointer">Phone</span>
              <span className="hover:text-theme-color-4 cursor-pointer">Whatsapp</span>
            </div>
          </div>

        </div>
      </div>

      {/* PAYMENTS */}
      <div className="border-b border-white/20 py-8">
        <h3 className="text-center text-xl font-bold mb-6">
          100% SECURE PAYMENTS
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["GPay","PhonePe","Paytm","UPI","Mastercard","Visa"].map((pay) => (
            <div
              key={pay}
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
            >
              {pay}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className=" text-theme-color-1">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 text-white">

          <FooterCol title="Company" items={["About Us", "T&C's", "Refer & Earn"]} />
          <FooterCol title="Best Sellers" items={["Wall Photo Frames", "Photo Stands", "Mobile Cases", "Photo Mugs"]} />
          <FooterCol title="Support" items={["Contact Us", "Track Order", "Return Order", "FAQ's"]} />
          <FooterCol title="More Info" items={["My Account", "Order History", "Your Credits"]} />

        </div>
      </div>

    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-bold mb-4 border-b-2 border-theme-color-2 inline-block">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="hover:text-theme-color-4 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
