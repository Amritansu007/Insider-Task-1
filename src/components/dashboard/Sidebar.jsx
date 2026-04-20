import { LayoutDashboard, ArrowLeftRight, Users, Sparkles } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-full bg-black text-white p-6 flex flex-col">

      <h1 className="text-xl font-semibold mb-8">Super Finti</h1>

      <div className="text-xs text-zinc-500 mb-4">MAIN</div>

      <div className="space-y-4">

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer">
          <ArrowLeftRight size={18} />
          <span>Transactions</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer">
          <Users size={18} />
          <span>Contacts</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer">
          <Sparkles size={18} />
          <span>Features</span>
        </div>

      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Help Card */}
      <div className="bg-yellow-400 text-black p-4 rounded-xl mt-6">
        <p className="font-semibold">Help Center</p>
        <button className="mt-2 bg-white px-3 py-1 rounded text-sm">
          Go
        </button>
      </div>

    </div>
  );
}

export default Sidebar;