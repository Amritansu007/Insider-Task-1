function Transactions() {
  const transactions = [
    { title: "Payment sent to Shakir", amount: "-$560.00" },
    { title: "Salary from Redwhale", amount: "+$12,200.00" },
    { title: "Money sent to Wise.com", amount: "-$3,000.00" },
    { title: "Purchased Macbook Pro", amount: "-$5560.00" },
  ];

  return (
    <div className="bg-zinc-800 p-6 rounded-2xl">
      <h3 className="mb-4 text-lg font-semibold">Latest Transactions</h3>

      <div className="space-y-4">
        {transactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <p className="text-zinc-300">{t.title}</p>
            <p
              className={`${
                t.amount.startsWith("-")
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {t.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;