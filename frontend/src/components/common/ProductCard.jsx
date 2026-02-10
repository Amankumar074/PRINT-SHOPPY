const API_URL = import.meta.env.VITE_API_URL

export default function ProductCard({ images, name, title, price }) {
  return (
    <div className="rounded-xl duration-300 ease-out hover:-translate-y-2 transition flex items-center flex-col m-1">
      <img
        src={`${API_URL}/uploads/${images?.[0]}`}
        alt={title || name}
        className="rounded-lg h-full w-full object-cover "
      />

      <h3 className="font-semibold text-sm md:text-base text-center">
        {name}
      </h3>

      {price && (
        <p className="text-theme-color-2 font-semibold text-sm mt-1">
          ₹ {price}
        </p>
      )}
    </div>
  )
}
