import React from 'react';

export default function SummaryCard({title, value}){
  return (
    <div className="card summary-card">
      <h3>{title}</h3>
      <p className="value">${value}</p>
    </div>
  );
}
