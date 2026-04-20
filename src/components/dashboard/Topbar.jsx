function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-white">
      
      <input
        placeholder="Search..."
        className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-md outline-none text-sm placeholder-zinc-300"
      />

      <div className="flex items-center gap-6 text-sm">
        <span className="cursor-pointer hover:opacity-80">Wallet</span>
        <span className="cursor-pointer hover:opacity-80">Invoices</span>

        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
      </div>
    </div>
  );
}

export default Topbar;