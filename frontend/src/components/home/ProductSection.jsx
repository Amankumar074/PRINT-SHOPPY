import ProductCard from "@/components/common/ProductCard";
import { Link } from "react-router-dom";

export default function ProductSection({ title, products, bg }) {
  return (
    <section className={`p-8 mx-auto mb-4 ${bg}`}>
      <h2 className="heading-first">{title}</h2>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((item) =>
            item.slug ? (
              <Link
                key={item._id}
                to={`/product/${item.slug}`}
                className="cursor-pointer"
              >
                <ProductCard {...item} />
              </Link>
            ) : (
              <div key={item._id}>
                <ProductCard {...item} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
