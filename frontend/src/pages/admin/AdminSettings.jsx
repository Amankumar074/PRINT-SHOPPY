const AdminSettings = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ===== SETTINGS SIDEBAR ===== */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Settings</h2>

        <ul className="space-y-2 text-sm">
          {[
            "General",
            "Profile",
            "Products",
            "Orders",
            "Payments",
            "Notifications",
            "SEO",
            "Security",
            "CMS",
          ].map((item, i) => (
            <li
              key={i}
              className={`px-4 py-3 rounded-lg cursor-pointer transition
                ${i === 0 ? "bg-indigo-600 text-white" : "hover:bg-slate-100"}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* ===== CONTENT ===== */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">General Settings</h1>
          <p className="text-gray-600 text-sm">
            Manage your website & business information
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-xl shadow p-6 max-w-4xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input label="Website Name" placeholder="YourBrand" />
            <Input label="Contact Email" placeholder="support@yourbrand.com" />

            <Input label="Phone Number" placeholder="+91 98765 43210" />
            <Input label="Business Address" placeholder="Delhi, India" />

            <Input label="Business Hours" placeholder="Mon – Sat (9AM – 7PM)" />
            <Input label="Support Email" placeholder="help@yourbrand.com" />
          </div>

          {/* SWITCHES */}
          <div className="mt-8 space-y-4">
            <Toggle label="Enable Maintenance Mode" />
            <Toggle label="Enable New User Registration" />
            <Toggle label="Enable Email Notifications" />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end mt-8 gap-4">
            <button className="px-6 py-2 rounded-lg border">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ===== INPUT COMPONENT ===== */
const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
)

/* ===== TOGGLE SWITCH ===== */
const Toggle = ({ label }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm">{label}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 transition" />
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5" />
    </label>
  </div>
)

export default AdminSettings
