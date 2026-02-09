import { RotateCcw, Truck, BadgeCheck } from "lucide-react"

export default function TrustBadges() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Badge 1 */}
        <div
          className="
            flex flex-col items-center text-center
            p-8 rounded-xl
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
          "
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
            <RotateCcw className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">
            Easy 30-Day Return
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            Hassle-free returns within 30 days of delivery
          </p>
        </div>

        {/* Badge 2 */}
        <div
          className="
            flex flex-col items-center text-center
            p-8 rounded-xl
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
          "
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 mb-4">
            <Truck className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">
            Express Delivery
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            Fast & secure shipping across India
          </p>
        </div>

        {/* Badge 3 */}
        <div
          className="
            flex flex-col items-center text-center
            p-8 rounded-xl
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
          "
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50 mb-4">
            <BadgeCheck className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">
            100% Quality Assured
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            Premium materials & quality checks
          </p>
        </div>

      </div>
    </section>
  )
}
