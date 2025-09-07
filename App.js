import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './styles.css';

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
