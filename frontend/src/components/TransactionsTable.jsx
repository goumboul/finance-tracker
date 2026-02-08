export default function TransactionsTable({ transactions }) {
  return (
    <div className="table-card">
      <h3 className="table-title">Recent transactions</h3>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Description</th>
            <th className="right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.description}</td>
              <td className={`right ${t.amount >= 0 ? "positive" : "negative"}`}>
                {t.amount >= 0 ? "+" : "-"}${Math.abs(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
