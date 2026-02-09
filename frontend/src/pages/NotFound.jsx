import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl text-center">

        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-blue-600 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="
            inline-block mt-6
            bg-blue-600 text-white font-semibold
            px-6 py-3 rounded-lg
            transition-all duration-300
            hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg
          "
        >
          Go Back Home
        </Link>

      </div>
    </section>
  )
}
