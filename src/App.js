import './App.css';
import React from 'react';
import Calculator from './components/MyCalculator';
import Navigation from './components/Nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Calculator />
    </div>
  );
}

export default App;
