const navItems = [
  "Command center",
  "Market trackers",
  "Portfolios",
  "Watchlists",
  "Alerts",
  "Risk control",
  "Reports",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <span className="brand-dot" />
        <div>
          <h2>Atlas Finance</h2>
          <p>Tracker suite</p>
        </div>
      </div>

      <div className="sidebar-section">
        <span className="section-label">Navigation</span>
        <nav className="nav-list">
          {navItems.map((item) => (
            <button key={item} className="nav-item">
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-card">
        <span className="section-label">Pro feed</span>
        <strong>24 sources actives</strong>
        <p>Bloomberg, Reuters, CME, Euronext...</p>
        <button className="sidebar-cta">Upgrade data</button>
      </div>
    </aside>
  );
}
