function MiniChart() {
  const bars = [40, 70, 55, 90, 60, 75, 50];

  return (
    <div className="bg-zinc-800 p-6 rounded-2xl">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Activity
      </h3>

      <div className="flex items-end gap-3 h-40">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-md"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MiniChart;