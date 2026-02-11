import { Link } from "react-router-dom";
import { User, Package, MapPin, Heart, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">My Account</h2>

          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/account" className="flex items-center gap-2 hover:text-indigo-600">
                <User size={18} /> Profile
              </Link>
            </li>
            <li>
              <Link to="/orders" className="flex items-center gap-2 hover:text-indigo-600">
                <Package size={18} /> My Orders
              </Link>
            </li>
            <li>
              <Link to="/address" className="flex items-center gap-2 hover:text-indigo-600">
                <MapPin size={18} /> Address Book
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="flex items-center gap-2 hover:text-indigo-600">
                <Heart size={18} /> Wishlist
              </Link>
            </li>
            <li>
              <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                <LogOut size={18} /> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">

          {/* Welcome Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold">
              Welcome Back, User 👋
            </h1>
            <p className="text-gray-600 mt-2 text-sm">
              From your account dashboard you can view your recent orders,
              manage your addresses and edit your account details.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Orders</h3>
              <p className="text-sm text-gray-600">
                Track, return or buy things again.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Addresses</h3>
              <p className="text-sm text-gray-600">
                Edit addresses for orders and gifts.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Account Details</h3>
              <p className="text-sm text-gray-600">
                Edit login, name and mobile number.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Wishlist</h3>
              <p className="text-sm text-gray-600">
                View and manage your wishlist items.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
