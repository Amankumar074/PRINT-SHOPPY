import React from "react";

const transactions = [
  {
    id: 1,
    date: "05 Feb 2026",
    description: "Order PS12345 Refund",
    credit: "₹299",
    debit: "-",
    balance: "₹1,000",
  },
  {
    id: 2,
    date: "02 Feb 2026",
    description: "Order PS12344 Payment",
    credit: "-",
    debit: "₹1,299",
    balance: "₹701",
  },
];

export default function Transactions() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
        
        {/* Title */}
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Transactions
          </h2>
          <p className="text-sm text-gray-500">
            Your account transaction history
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Credit</th>
                <th class="px-6 py-3 text-left">Debit</th>
                <th className="px-6 py-3 text-left">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{tx.date}</td>
                  <td className="px-6 py-4">{tx.description}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">
                    {tx.credit}
                  </td>
                  <td className="px-6 py-4 text-red-600 font-medium">
                    {tx.debit}
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    {tx.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No transactions */}
        {transactions.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No transactions found.
          </div>
        )}
      </div>
    </div>
  );
}
