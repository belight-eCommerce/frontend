import Image from "next/image";

const summary = [
  { label: "Pending Orders", value: 2, color: "text-blue-600" },
  { label: "Delivered", value: 8, color: "text-green-600" },
  { label: "Cancelled", value: 1, color: "text-red-600" },
  { label: "Return/Exchange", value: 0, color: "text-gray-500" },
];

const orders = [
  { id: "#123456", product: "Handmade Vase X1", date: "3/19/2025", status: "Processing", amount: "3/19/2025" },
  { id: "#123457", product: "Leather Wallet X2", date: "3/19/2025", status: "Delivered", amount: "3/19/2025" },
  { id: "#123458", product: "Cotton Scarf X1", date: "3/19/2025", status: "Cancelled", amount: "3/19/2025" },
  { id: "#123456", product: "Handmade Vase X1", date: "3/19/2025", status: "Processing", amount: "3/19/2025" },
  { id: "#123457", product: "Leather Wallet X2", date: "3/19/2025", status: "Delivered", amount: "3/19/2025" },
  { id: "#123458", product: "Cotton Scarf X1", date: "3/19/2025", status: "Cancelled", amount: "3/19/2025" },
  { id: "#123456", product: "Handmade Vase X1", date: "3/19/2025", status: "Processing", amount: "3/19/2025" },
  { id: "#123457", product: "Leather Wallet X2", date: "3/19/2025", status: "Delivered", amount: "3/19/2025" },
  { id: "#123458", product: "Cotton Scarf X1", date: "3/19/2025", status: "Cancelled", amount: "3/19/2025" },
];

const statusColors: Record<string, string> = {
  Processing: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Delivered: "bg-green-100 text-green-700 border-green-300",
  Cancelled: "bg-red-100 text-red-700 border-red-300",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tight">MAALIIFU</span>
        </div>
        <div className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-100"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M20 20l-3-3"/></svg>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="8.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="16.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/><path d="M2 3h2l2.68 12.39A2 2 0 0 0 8.61 17h7.78a2 2 0 0 0 1.93-1.61L20 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2"/><circle cx="11" cy="8" r="3" stroke="currentColor" strokeWidth="2"/><path d="M6 18c0-2.21 2.686-4 6-4s6 1.79 6 4" stroke="currentColor" strokeWidth="2"/></svg>
          </button>
          <Image
            src="/images/user/owner.jpg"
            alt="User"
            width={36}
            height={36}
            className="rounded-full object-cover border border-gray-200"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6">My Orders</h2>
        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {summary.map((item) => (
            <div key={item.label} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${item.color}`}>{String(item.value).padStart(2, "0")}</span>
              <span className="text-sm text-gray-500 mt-2 text-center">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Order History */}
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Sorting & Filters</span>
          <select className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none">
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Order ID</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Product(S)</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="px-4 py-3 whitespace-nowrap">{order.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.product}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-3 py-1 rounded-full border text-xs font-medium ${statusColors[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.amount}</td>
                  <td className="px-4 py-3">
                    <button className="bg-blue-900 text-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-blue-800 transition">Track</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
