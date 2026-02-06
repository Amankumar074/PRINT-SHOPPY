export default function ProductCard({ image, name, title, price }) {
  return (
    <div className=" rounded-xl p-4 hover:shadow-lg transition">
      <img src={`http://localhost:5000/uploads/${image}`} 
      className="h-32 w-44 rounded-lg"/>

      <h3 className="font-semibold text-sm md:text-base">
        {name}
      </h3>

      {price && (
        <p className="text-theme-color-2 font-semibold text-sm mt-1">
          {price}
        </p>
      )}
    </div>
  )
}
