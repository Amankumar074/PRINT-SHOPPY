import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaRupeeSign,
} from "react-icons/fa";
import {
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
  SiMastercard,
  SiVisa,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-theme-color-1 text-white">

      {/* TOP FEATURES */}
      <div className="border-b border-white/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center py-6 gap-6">
          <p className="font-semibold uppercase">Premium Quality Assured</p>
          <p className="font-semibold uppercase border-y md:border-y-0 md:border-x border-white/20">
            Free and Fast Delivery
          </p>
          <p className="font-semibold uppercase">30 Days Return Policy</p>
        </div>
      </div>

      {/* SOCIAL + SUPPORT */}
      <div className="border-b border-white/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center py-10 gap-10">

          {/* FOLLOW US */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-xl font-bold mb-3">FOLLOW US</h3>
            <p className="text-white/70 mb-4">
              Join Our Creative Community
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="w-12 h-12 flex items-center justify-center 
                    rounded-full bg-white/10 
                    text-white/80 hover:bg-white hover:text-black 
                    transition"
                  >
                    <Icon size={22} />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* SUPPORT */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-xl font-bold mb-3">SUPPORT</h3>
            <p className="text-white/70 mb-4">
              Got Questions? We're Here To Help
            </p>

            <div className="flex gap-6">
              {[FaPhoneAlt, FaWhatsapp].map((Icon, index) => (
                <span
                  key={index}
                  className="w-12 h-12 flex items-center justify-center 
                  rounded-full bg-white/10 
                  text-white/80 cursor-pointer 
                  hover:bg-white hover:text-black 
                  transition"
                >
                  <Icon size={22} />
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PAYMENTS */}
      <div className="border-b border-white/20 py-10 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-bold mb-8">
          100% SECURE PAYMENTS
        </h3>

        <div className="flex flex-wrap justify-around gap-8 max-w-4xl mx-auto">
          {[
            <SiGooglepay size={28} />,
            <SiPhonepe size={28} />,
            <SiPaytm size={28} />,
            <FaRupeeSign size={28} />,
            <SiMastercard size={28} />,
            <SiVisa size={28} />,
          ].map((icon, index) => (
            <div
              key={index}
              className="w-14 h-12 flex items-center justify-center
              bg-white/20 text-white
              rounded-md cursor-pointer
              hover:bg-white hover:text-black
              transition duration-300"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="px-6 md:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid 
                          grid-cols-1 
                          sm:grid-cols-2 
                          lg:grid-cols-4 
                          pl-32
                          gap-12 
                          py-12">

            <FooterCol
              title="Company"
              items={[
                { label: "AboutUs", path: "/aboutus" },
                { label: "Term & Conditions", path: "/terms" },
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
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/70 px-6">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>

    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="text-center lg:text-left">
      <h4 className="font-bold mb-4 text-center border-b-2 border-theme-color-2 inline-block pb-1">
        {title}
      </h4>

      <ul className="space-y-2 text-sm m-auto">
        {items.map((item, index) => (
          <li key={index} className="hover:text-theme-color-4 transition">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
