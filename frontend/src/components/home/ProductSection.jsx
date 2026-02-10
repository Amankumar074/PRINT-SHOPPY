import ProductCard from "@/components/common/ProductCard";
import { Link } from "react-router-dom";

// 🔥 Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSection({ category, products }) {
  if (!category) return null;

  const {
    name,
    bgColor = "#ffffff",
    widthPercent = 100,
    imagesPerRow = 4,
    showSlider = false,
  } = category;

  return (
    <section
      className="p-1 lg:p-8  mx-auto mb-6"
      style={{
        backgroundColor: bgColor,
        width: `${widthPercent}%`,
        borderRadius: "12px",
      }}
    >
      <h2 className="heading-first mb-6 text-center">{name}</h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 SLIDER MODE */}
        {showSlider ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation = {false}
            autoplay={false}
            spaceBetween={24}
            infinite={true}
            slidesPerView={imagesPerRow}
            breakpoints={{
              320: { slidesPerView: 2.8 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: imagesPerRow },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item._id}>
                {item.slug ? (
                  <Link to={`/product/${item.slug}`}>
                    <ProductCard {...item} />
                  </Link>
                ) : (
                  <ProductCard {...item} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* 🔹 GRID MODE */
          <div
  className="grid gap-2"
  style={{
    gridTemplateColumns:
      window.innerWidth < 640
        ? "repeat(3, 1fr)" // 📱 Mobile: always 3
        : `repeat(auto-fill, minmax(${100 / imagesPerRow}%, 1fr))`, // 🖥️ Desktop
  }}
>

            {products.map((item) =>
              item.slug ? (
                <Link key={item._id} to={`/product/${item.slug}`}>
                  <ProductCard {...item} />
                </Link>
              ) : (
                <ProductCard key={item._id} {...item} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
