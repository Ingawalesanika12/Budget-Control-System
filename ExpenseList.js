import React from 'react';
import axios from 'axios';

export default function ExpenseList({ expenses, onDelete, api }){
  const del = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      onDelete(id);
    } catch (err) {
      // optimistic removal if API fails
      onDelete(id);
    }
  };

  return (
    <ul className="expense-list">
      {expenses.map(e => (
        <li key={e._id} className="expense-item">
          <div>
            <strong>{e.title}</strong>
            <div className="meta">{e.category || '—'} • {new Date(e.date).toLocaleString()}</div>
          </div>
          <div className="right">
            <div className="amount">${Number(e.amount).toFixed(2)}</div>
            <button className="btn-danger" onClick={() => del(e._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
