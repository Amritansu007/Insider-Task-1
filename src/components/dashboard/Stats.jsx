function Stats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      
      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-sm text-zinc-400">Spending</p>
        <h3 className="text-xl font-semibold">210k</h3>
        <p className="text-xs text-green-400">+23%</p>
      </div>

      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-sm text-zinc-400">Savings</p>
        <h3 className="text-xl font-semibold">185k</h3>
        <p className="text-xs text-purple-400">+45%</p>
      </div>

      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-sm text-zinc-400">Credit Spending</p>
        <h3 className="text-xl font-semibold">124k</h3>
        <p className="text-xs text-teal-400">+29%</p>
      </div>

    </div>
  );
}

export default Stats;