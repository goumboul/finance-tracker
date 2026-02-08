export default function StatCard({ label, value, trend }) {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <div className="stat-value">{value}</div>
      {trend !== undefined && (
        <span className={trend >= 0 ? "positive" : "negative"}>
          {trend >= 0 ? "+" : ""}
          {trend}%
        </span>
      )}
    </div>
  );
}
