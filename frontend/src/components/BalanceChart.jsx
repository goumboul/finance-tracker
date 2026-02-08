import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", balance: 8200 },
  { name: "Feb", balance: 9100 },
  { name: "Mar", balance: 9800 },
  { name: "Apr", balance: 10500 },
  { name: "May", balance: 11200 },
  { name: "Jun", balance: 12450 },
];

export default function BalanceChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Balance over time</h3>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
