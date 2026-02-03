import ProductCard from "@/components/common/ProductCard"
import { Link } from "react-router-dom"

export default function ProductSection({ title, products, bg }) {
  return (
    <section className={`p-8 mx-auto mb-4 ${bg}`}>
      <h2 className="heading-first">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((item) => (
            <Link
              key={item.slug}
              to={item.slug ? `${item.slug}` : undefined}
              className={item.slug ? "cursor-pointer" : "pointer-events-none"}
            >
              <ProductCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
