export default function ProductCard({ image, title, price }) {
  return (
    <div className=" rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-3 w-full h-44 object-cover"
      />

      <h3 className="font-semibold text-sm md:text-base">
        {title}
      </h3>

      {price && (
        <p className="text-theme-color-2 font-semibold text-sm mt-1">
          {price}
        </p>
      )}
    </div>
  )
}
