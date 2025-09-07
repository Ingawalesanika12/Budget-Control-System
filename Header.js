import React from 'react';

export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <h1>Expense Tracker</h1>
        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#add">Add</a>
          <a href="#list">List</a>
        </nav>
      </div>
    </header>
  );
}
