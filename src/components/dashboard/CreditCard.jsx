function CreditCard() {
  return (
    // OUTER GLASS WRAPPER
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
      
      {/* ACTUAL CARD */}
      <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 p-6 rounded-2xl text-white shadow-2xl relative overflow-hidden">
        
        {/* Card Number */}
        <p className="text-lg tracking-widest mb-6">
          3829 4820 4629 5025
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs opacity-70">Card Holder</p>
            <p className="font-semibold">Anita Rose</p>
          </div>

          <div>
            <p className="text-xs opacity-70">Expires</p>
            <p className="font-semibold">12/28</p>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
      </div>

    </div>
  );
}

export default CreditCard;