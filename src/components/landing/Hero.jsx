function Hero() {
  return (
    <section className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 py-12 text-white">

      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          The hassle-free platform <br />
          to sell globally for less
        </h1>

        <p className="text-zinc-300 mb-8 text-lg">
          Connect your bank account and start selling to the world today!
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
            Get Started
          </button>

          <button className="border border-zinc-400 px-6 py-2 rounded-md hover:bg-white/10 transition">
            Book a demo
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center justify-end">

        <div className="relative w-72 h-72">

          {/* BACK SHAPE */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl -rotate-12 opacity-70 blur-xl"></div>

          {/* MAIN SHAPE */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-400 to-teal-400 rounded-3xl rotate-12 shadow-2xl"></div>

          {/* GLOW */}
          <div className="absolute w-20 h-20 bg-white/20 rounded-full top-4 right-4 blur-2xl"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;