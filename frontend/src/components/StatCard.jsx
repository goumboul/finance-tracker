export default function StatCard({ label, value, trend }) {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <h2 className="stat-value">{value}</h2>
      {trend && (
        <span className={`stat-trend ${trend > 0 ? "positive" : "negative"}`}>
          {trend > 0 ? "+" : ""}
          {trend}%
        </span>
      )}
    </div>
  );
}
