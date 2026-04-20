function Card({ title, value, sub, color }) {
  return (
    <div className={`p-6 rounded-2xl text-white shadow-lg ${color}`}>
      <p className="text-sm opacity-80 mb-2">{title}</p>
      <h2 className="text-xl font-semibold mb-1">{value}</h2>
      <p className="text-xs opacity-70">{sub}</p>
    </div>
  );
}

export default Card;