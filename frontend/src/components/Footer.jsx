import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
  SiMastercard,
  SiVisa,
} from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";

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

            <div className="flex justify-center gap-4">
              <Link
                to="/facebook"
                className="w-10 h-10 flex items-center justify-center 
                 rounded-full bg-white/10 
                 text-white/80 hover:bg-white
                 hover:text-black transition"
              >
                <FaFacebookF size={24} />
              </Link>

              <Link
                to="/twitter"
                className="w-10 h-10 flex items-center justify-center 
                 rounded-full bg-white/10 
                 text-white/80 hover:bg-white
                 hover:text-black transition"
              >
                <FaTwitter size={24} />
              </Link>

              <Link
                to="/instagram"
                className="w-10 h-10 flex items-center justify-center 
                 rounded-full bg-white/10 
                 text-white/80 hover:bg-white
                 hover:text-black transition"
              >
                <FaInstagram size={24} />
              </Link>

              <Link
                to="/youtube"
                className="w-10 h-10 flex items-center justify-center 
                 rounded-full bg-white/10 
                 text-white/80 hover:bg-white
                 hover:text-black transition"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">SUPPORT</h3>
            <p className="text-white/70 mb-6">
              Got Questions? We're Here To Help
            </p>
            <div className="flex justify-center gap-10">
              <span
                className="w-12 h-12 flex items-center justify-center 
               rounded-full bg-white/10 
               text-white/80 cursor-pointer 
               hover:bg-white hover:text-black 
               transition"
              >
                <FaPhoneAlt size={24} />
              </span>

              <span
                className="w-12 h-12 flex items-center justify-center 
               rounded-full bg-white/10 
               text-white/80 cursor-pointer 
               hover:bg-white hover:text-black 
               transition"
              >
                <FaWhatsapp size={24} />
              </span>
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

    {[
      { icon: <SiGooglepay size={30} />, name: "GPay" },
      { icon: <SiPhonepe size={30} />, name: "PhonePe" },
      { icon: <SiPaytm size={30} />, name: "Paytm" },
      { icon: <FaRupeeSign  size={30} />, name: "UPI" },
      { icon: <SiMastercard size={30} />, name: "Mastercard" },
      { icon: <SiVisa size={30} />, name: "Visa" },
    ].map((item) => (
      <div
        key={item.name}
        className="w-14 h-12 flex items-center justify-center
                    bg-white/10 
                     text-white/80
                   rounded-md cursor-pointer
                   hover:bg-white hover:text-black
                   transition duration-300"
      >
        {item.icon}
      </div>
    ))}
  </div>
</div>

      {/* BOTTOM LINKS */}
      <div className="text-theme-color-1 w-11/12 m-auto">
        <div className="max-w-7xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 text-white">
          <FooterCol
            title="Company"
            items={[
              { label: "AboutUs", path: "/aboutus" },
              { label: "T&C's", path: "/terms" },
              { label: "Refer & Earn", path: "/ReferandEern" },
            ]}
          />

          <FooterCol
            title="Best Sellers"
            items={[
              { label: "Wall Photo Frames", path: "/products/frames" },
              { label: "Photo Stands", path: "/products/stands" },
              { label: "Mobile Cases", path: "/products/mobile-cases" },
              { label: "Photo Mugs", path: "/products/mugs" },
            ]}
          />

          <FooterCol
            title="Support"
            items={[
              { label: "Contact Us", path: "/contact" },
              { label: "Track Order", path: "/orders" },
              { label: "Return Order", path: "/orders" },
              { label: "FAQ's", path: "/faq" },
            ]}
          />

          <FooterCol
            title="More Info"
            items={[
              { label: "My Account", path: "/account" },
              { label: "Order History", path: "/orders" },
              { label: "Your Credits", path: "/credits" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-bold mb-4 border-b-2 border-theme-color-2 inline-block">
        {title}
      </h4>

      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="hover:text-theme-color-4">
            <Link to={item.path} className="cursor-pointer transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
