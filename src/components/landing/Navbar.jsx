import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 text-white">
      
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide">
        Picksell
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm text-zinc-300">
        <span className="hover:text-white cursor-pointer">Catalogue</span>
        <span className="text-white border-b border-green-400 pb-1">Business</span>
        <span className="hover:text-white cursor-pointer">Shopping</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="border border-zinc-500 px-4 py-1.5 rounded-md text-sm hover:bg-white/10 transition">
          Sign in
        </button>

        <Link
          to="/auth"
          className="border border-white px-4 py-1.5 rounded-md text-sm hover:bg-white/10 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;