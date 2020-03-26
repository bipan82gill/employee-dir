import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeHeader from './components/EmployeeHeader';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <div className="App">
      <EmployeeHeader />
      <EmployeeCard />
    
    </div>
  );
}

export default App;
