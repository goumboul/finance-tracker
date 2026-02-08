import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/dashboard.css";

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Groceries", amount: -54.2 },
    { id: 2, description: "Salary", amount: 3200 },
  ]);

  function addTransaction(tx) {
    setTransactions((prev) => [
      ...prev,
      { ...tx, id: Date.now() },
    ]);
  }

  return (
    <Dashboard
      transactions={transactions}
      addTransaction={addTransaction}
    />
  );
}
