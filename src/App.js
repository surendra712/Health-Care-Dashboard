import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;
