import AddTransactionModal from "./AddTransactionModal";

export default function TopBar() {
  return (
    <header className="topbar">
      <h3>Overview</h3>
      <AddTransactionModal />
    </header>
  );
}
