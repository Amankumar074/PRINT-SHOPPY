export default function ProductCard({ images, name, title, price }) {
  return (
    <div className=" rounded-xl duration-300 ease-out hover:-translate-y-2 transition flex items-center flex-col">
      <img src={`http://localhost:5000/uploads/${images[0]}`} alt={title}
      className="rounded-lg h-full w-full"/>

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
