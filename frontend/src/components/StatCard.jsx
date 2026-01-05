export default function StatCard({ label, value, trend, helper }) {
  const trendClass =
    trend == null ? "" : trend >= 0 ? "stat-trend positive" : "stat-trend negative";

  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        {trend != null && (
          <span className={trendClass}>
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>

      <div className="stat-value">{value}</div>

      {helper && <div className="stat-helper">{helper}</div>}
    </div>
  );
}
