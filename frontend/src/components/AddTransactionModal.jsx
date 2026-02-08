import { useState } from "react";

export default function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      description,
      amount: Number(amount),
    });

    setDescription("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
