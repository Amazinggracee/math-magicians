import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/MyCalculator';
import Navigation from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
