import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>

      <div className="stats-grid">
        <StatCard label="Balance" value="$12,450" trend={3.2} helper="vs last month" />
        <StatCard label="Income" value="$4,200" trend={1.5} helper="this month" />
        <StatCard label="Expenses" value="$2,100" trend={-0.8} helper="this month" />
        <StatCard label="Savings" value="$1,900" trend={2.1} helper="this month" />
      </div>
    </DashboardLayout>
  );
}
