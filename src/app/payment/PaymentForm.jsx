import { useState } from 'react';

export default function PaymentForm({ onSubmit }) {
  const [method, setMethod] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ method, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="method" className="block mb-2">Payment Method</label>
        <select
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a method</option>
          <option value="mtnmomo">MTN Mobile Money</option>
          <option value="orange">Orange Money</option>
          <option value="bank">Bank Transfer</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount" className="block mb-2">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Pay Now
      </button>
    </form>
  );
}