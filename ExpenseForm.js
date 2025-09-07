import React, { useState } from 'react';
import axios from 'axios';

export default function ExpenseForm({ onAdd, api }){
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const payload = { title, amount: Number(amount), category, date: new Date() };
    try {
      const res = await axios.post(api, payload);
      onAdd(res.data);
    } catch (err) {
      // fallback: optimistic add
      onAdd({ _id: 'local-' + Date.now(), ...payload });
    }
    setTitle(''); setAmount(''); setCategory('');
  };

  return (
    <form id="add" className="card form-card" onSubmit={submit}>
      <h2>Add Expense</h2>
      <input required placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input required type="number" step="0.01" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
