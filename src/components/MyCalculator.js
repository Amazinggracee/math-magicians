import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/Calculate';
import Navigation from './Nav';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const createEvent = (e) => {
    const btnName = e.target.innerHTML;
    const result = calculate(state, btnName);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <section className="calculator">
      <Navigation />
      <div className="btn_wrapper">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="ac btn" onClick={createEvent}>
          AC
        </button>
        <button type="button" className="one btn" onClick={createEvent}>
          +/-
        </button>
        <button type="button" className="two btn" onClick={createEvent}>
          %
        </button>
        <button type="button" className="tree btn" onClick={createEvent}>
          ÷
        </button>
        <button type="button" className="four btn" onClick={createEvent}>
          7
        </button>
        <button type="button" className="five btn" onClick={createEvent}>
          8
        </button>
        <button type="button" className="six btn" onClick={createEvent}>
          9
        </button>
        <button type="button" className="seven btn" onClick={createEvent}>
          x
        </button>
        <button type="button" className="eigth btn" onClick={createEvent}>
          4
        </button>
        <button type="button" className="nine btn" onClick={createEvent}>
          5
        </button>
        <button type="button" className="ten btn" onClick={createEvent}>
          6
        </button>
        <button type="button" className="eleven btn" onClick={createEvent}>
          -
        </button>
        <button type="button" className="twelve btn" onClick={createEvent}>
          1
        </button>
        <button type="button" className="thirteen btn" onClick={createEvent}>
          2
        </button>
        <button type="button" className="fourteen btn" onClick={createEvent}>
          3
        </button>
        <button type="button" className="fifteen btn" onClick={createEvent}>
          +
        </button>
        <button type="button" className="seventeen btn" onClick={createEvent}>
          0
        </button>
        <button type="button" className="eighteen btn" onClick={createEvent}>
          .
        </button>
        <button type="button" className="nineteen btn" onClick={createEvent}>
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
