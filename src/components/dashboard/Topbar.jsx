function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 gap-3 text-white">

      {/* LEFT - Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="
            w-full md:w-64
            px-4 py-2 rounded-lg 
            bg-zinc-800 text-sm text-white
            focus:outline-none
          "
        />
      </div>

      {/* RIGHT - Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="hidden sm:block">Wallet</span>
        <span className="hidden sm:block">Invoices</span>

        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
      </div>

    </div>
  );
}

export default Topbar;