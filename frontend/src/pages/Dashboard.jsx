import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import TransactionsTable from "../components/TransactionsTable";
import AddTransactionForm from "../components/AddTransactionModal";
import BalanceChart from "../components/BalanceChart";

const marketTrackers = [
  { label: "S&P 500", value: "5,084", change: "+0.62%", trend: "up" },
  { label: "NASDAQ", value: "15,920", change: "+0.41%", trend: "up" },
  { label: "Dow Jones", value: "38,510", change: "-0.18%", trend: "down" },
  { label: "CAC 40", value: "7,350", change: "+0.28%", trend: "up" },
  { label: "Nikkei 225", value: "36,980", change: "+0.91%", trend: "up" },
  { label: "BTC", value: "$47,200", change: "-1.2%", trend: "down" },
  { label: "ETH", value: "$2,480", change: "+0.8%", trend: "up" },
  { label: "EUR/USD", value: "1.084", change: "+0.05%", trend: "up" },
];

const watchlist = [
  { name: "Apple", ticker: "AAPL", price: "$189.40", change: "+0.9%" },
  { name: "Nvidia", ticker: "NVDA", price: "$672.15", change: "+1.6%" },
  { name: "Tesla", ticker: "TSLA", price: "$192.30", change: "-0.7%" },
  { name: "Amazon", ticker: "AMZN", price: "$170.55", change: "+0.3%" },
  { name: "LVMH", ticker: "MC", price: "€725.10", change: "+0.5%" },
  { name: "Airbus", ticker: "AIR", price: "€146.20", change: "-0.4%" },
];

export default function Dashboard({ transactions, addTransaction }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = income - expenses;

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1>Global Portfolio Command</h1>
          <p className="page-subtitle">
            Centralisez vos trackers boursiers, flux et mouvements en temps reel.
          </p>
        </div>
        <div className="header-actions">
          <button className="ghost">Export report</button>
          <button className="primary">New tracker</button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard label="Balance" value={`$${balance}`} trend={3.2} />
        <StatCard label="Income" value={`$${income}`} trend={5.1} />
        <StatCard label="Expenses" value={`$${expenses}`} trend={-1.4} />
      </div>

      <div className="section-grid">
        <BalanceChart />
        <div className="kpi-stack">
          <div className="kpi-card">
            <span className="kpi-label">Portfolio beta</span>
            <strong className="kpi-value">0.92</strong>
            <span className="kpi-meta">Defensif vs. marche</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Monthly alpha</span>
            <strong className="kpi-value">+2.4%</strong>
            <span className="kpi-meta">vs. benchmark</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Liquidity</span>
            <strong className="kpi-value">$84,500</strong>
            <span className="kpi-meta">Instantly deployable</span>
          </div>
        </div>
      </div>

      <div className="market-trackers">
        <div className="section-header">
          <div>
            <h2>Market trackers</h2>
            <p>Suivi rapide des indices, crypto et FX majeurs.</p>
          </div>
          <button className="ghost">Sync feeds</button>
        </div>
        <div className="trackers-grid">
          {marketTrackers.map((item) => (
            <div
              key={item.label}
              className={`tracker-card ${item.trend === "up" ? "up" : "down"}`}
            >
              <span className="tracker-label">{item.label}</span>
              <span className="tracker-value">{item.value}</span>
              <span className="tracker-change">{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="add-form-shell">
        <AddTransactionForm onAdd={addTransaction} />
      </div>

      <div className="watchlist-section">
        <div className="section-header">
          <div>
            <h2>Watchlist pro</h2>
            <p>Les valeurs a surveiller en priorite cette semaine.</p>
          </div>
          <button className="ghost">Manage list</button>
        </div>
        <div className="watchlist-grid">
          {watchlist.map((item) => (
            <div key={item.ticker} className="watchlist-card">
              <div>
                <span className="watchlist-name">{item.name}</span>
                <span className="watchlist-ticker">{item.ticker}</span>
              </div>
              <div className="watchlist-right">
                <span className="watchlist-price">{item.price}</span>
                <span
                  className={`watchlist-change ${item.change.includes("-") ? "down" : "up"}`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TransactionsTable transactions={transactions} />
    </DashboardLayout>
  );
}
