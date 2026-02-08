export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h3>Overview</h3>
        <span className="topbar-chip">Live feed</span>
      </div>
      <div className="topbar-actions">
        <button className="ghost">Connect broker</button>
        <button className="primary">Add transaction</button>
      </div>
    </header>
  );
}
