import {
  LayoutDashboard,
  ArrowLeftRight,
  Users,
  Sparkles
} from "lucide-react";

function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Transactions", icon: ArrowLeftRight },
    { name: "Contacts", icon: Users },
    { name: "Features", icon: Sparkles },
  ];

  return (
    <div className="w-64 bg-zinc-950 text-white p-6 flex flex-col justify-between">
      
      {/* Top */}
      <div>
        <h1 className="text-lg font-semibold mb-8">Super Finti</h1>

        <div>
          <p className="text-zinc-500 uppercase text-xs mb-4">Main</p>

          <div className="space-y-2">
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-3 px-3 py-2 rounded-lg 
                    text-zinc-400 cursor-pointer
                    transition-all duration-200

                    hover:bg-zinc-800 
                    hover:text-white
                  "
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-gradient-to-br from-orange-400 to-yellow-300 p-4 rounded-xl text-black">
        <p className="font-semibold mb-2">Help Center</p>
        <button className="bg-white px-3 py-1 rounded text-sm">
          Go
        </button>
      </div>

    </div>
  );
}

export default Sidebar;