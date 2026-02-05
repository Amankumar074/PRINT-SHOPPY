import React from 'react'

const ReferandEern = () => {
      const referralCode = "PRINT12345"; // dummy, replace with real
  return (
     <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header */}
      <div className="bg-theme-color-1 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Refer & Earn With PrintShoppy</h1>
        <p className="mt-2 text-md">
          Invite friends & earn rewards on every successful referral!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* Referral Code Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Your Referral Code</h2>
          <div className="text-2xl font-bold text-theme-color-2 mb-3">
            {referralCode}
          </div>
          <button
            className="bg-theme-color-2 text-white px-6 py-2 rounded-md hover:bg-theme-color-3 transition"
            onClick={() => navigator.clipboard.writeText(referralCode)}
          >
            Copy Code
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Share this code with friends & earn rewards when they order!
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2 text-theme-color-2">1.</span>
              Share your referral code with friends.
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-theme-color-2">2.</span>
              Your friend signs up using the code.
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-theme-color-2">3.</span>
              They place their first order.
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-theme-color-2">4.</span>
              You both get referral rewards!
            </li>
          </ul>
        </div>

        {/* Rewards Info */}
        <div className="bg-theme-color-1 text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-2">Earn ₹100 Bonus</h3>
          <p className="text-sm">
            For every friend who completes their first order using your referral code.
          </p>
          <button className="mt-4 bg-white text-theme-color-1 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
            Invite Now
          </button>
        </div>

        {/* Share Buttons */}
        <div className="text-center space-x-4">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition">
            Share on Facebook
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
            Share on WhatsApp
          </button>
        </div>

      </div>
    </div>
  )
}

export default ReferandEern