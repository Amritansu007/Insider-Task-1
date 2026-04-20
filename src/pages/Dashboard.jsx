import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import CreditCard from "../components/dashboard/CreditCard";
import MiniChart from "../components/dashboard/MiniChart";
import Stats from "../components/dashboard/Stats";
import Transactions from "../components/dashboard/Transactions";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-900 text-white overflow-hidden">

      {/* OVERLAY (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed z-50 top-0 left-0 h-screen w-64 bg-black transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0 md:static md:h-auto md:flex`}
      >
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-y-auto">

        {/* MOBILE TOP BAR */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
          <span className="font-semibold">Dashboard</span>
        </div>

        {/* DESKTOP TOPBAR */}
        <Topbar />

        {/* CONTENT */}
        <div className="p-4 md:p-6 space-y-6">

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CreditCard />
            <MiniChart />

            <div className="bg-teal-400/90 p-6 rounded-2xl text-white">
              <p className="text-sm mb-2">Working Balance</p>
              <h2 className="text-xl font-semibold">INR 9,250,000</h2>
              <p className="text-xs opacity-70">Saving Account</p>
            </div>
          </div>

          {/* Stats */}
          <Stats />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <Transactions />

            <div className="bg-zinc-800 p-6 rounded-2xl">
              <h3 className="mb-4 text-lg font-semibold">
                Upcoming Transactions
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <p>Water Bill</p>
                  <p className="text-red-400">-$280</p>
                </div>

                <div className="flex justify-between">
                  <p>Salary Oct</p>
                  <p className="text-green-400">+$1200</p>
                </div>

                <div className="flex justify-between">
                  <p>Electric Bill</p>
                  <p className="text-red-400">-$480</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;