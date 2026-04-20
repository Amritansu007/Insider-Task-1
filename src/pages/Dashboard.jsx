import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Stats from "../components/dashboard/Stats";
import Transactions from "../components/dashboard/Transactions";
import CreditCard from "../components/dashboard/CreditCard";
import MiniChart from "../components/dashboard/MiniChart";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 rounded-b-3xl">
          
          <Topbar />

          {/* Top Cards */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <CreditCard />

            <MiniChart />

            <div className="bg-teal-400/90 p-6 rounded-2xl text-white">
              <p className="text-sm mb-2">Working Balance</p>
              <h2 className="text-xl font-semibold">INR 9,250,000</h2>
              <p className="text-xs opacity-70">Saving Account</p>
            </div>

          </div>
        </div>

        {/* Lower Content */}
        <div className="p-6 space-y-6">

          {/* Stats */}
          <Stats />

          {/* Grid */}
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