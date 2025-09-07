import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ExpensesChart({ expenses }){
  // Group by category and sum
  const groups = {};
  expenses.forEach(e => {
    const cat = e.category || 'Other';
    groups[cat] = (groups[cat] || 0) + Number(e.amount || 0);
  });

  const labels = Object.keys(groups);
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses by category',
        data: labels.map(l => groups[l]),
      }
    ]
  };

  return (
    <div className="card chart-card">
      <h3>Spending Breakdown</h3>
      <Bar data={data} />
    </div>
  );
}
