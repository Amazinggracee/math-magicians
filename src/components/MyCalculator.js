import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/Calculate';
import './MyCalculator.css';

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
      <div className="btn_wrapper">
        <h6>Let us Do some Math!</h6>
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="clearBtn btn" onClick={createEvent}>
          AC
        </button>
        <button type="button" className="negetiveBtn btn" onClick={createEvent}>
          +/-
        </button>
        <button type="button" className="percentBtn btn" onClick={createEvent}>
          %
        </button>
        <button type="button" className="divisionBtn btn" onClick={createEvent}>
          ÷
        </button>
        <button type="button" className="sevenBtn btn" onClick={createEvent}>
          7
        </button>
        <button type="button" className="eightBtn btn" onClick={createEvent}>
          8
        </button>
        <button type="button" className="nineBtn btn" onClick={createEvent}>
          9
        </button>
        <button type="button" className="multiplyBtn btn" onClick={createEvent}>
          x
        </button>
        <button type="button" className="fourBtn btn" onClick={createEvent}>
          4
        </button>
        <button type="button" className="fiveBtn btn" onClick={createEvent}>
          5
        </button>
        <button type="button" className="sixBtn btn" onClick={createEvent}>
          6
        </button>
        <button type="button" className="minusBtn btn" onClick={createEvent}>
          -
        </button>
        <button type="button" className="oneBtn btn" onClick={createEvent}>
          1
        </button>
        <button type="button" className="twoBtn btn" onClick={createEvent}>
          2
        </button>
        <button type="button" className="threeBtn btn" onClick={createEvent}>
          3
        </button>
        <button type="button" className="addBtn btn" onClick={createEvent}>
          +
        </button>
        <button type="button" className="zeroBtn btn" onClick={createEvent}>
          0
        </button>
        <button type="button" className="pointBtn btn" onClick={createEvent}>
          .
        </button>
        <button type="button" className="equalBtn btn" onClick={createEvent}>
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
