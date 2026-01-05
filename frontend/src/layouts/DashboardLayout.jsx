import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "../styles/dashboard.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
