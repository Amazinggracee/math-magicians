import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-display">0</div>
      <div className="calculator-row">
        <button type="button" className="calculator-button">
          C
        </button>
        <button type="button" className="calculator-button button">
          +/-
        </button>
        <button type="button" className="calculator-button">
          %
        </button>
        <button type="button" className="calculator-button calculator-operator">
          ÷
        </button>
      </div>
      <div className="calculator-row">
        <button type="button" className="calculator-button">
          7
        </button>
        <button type="button" className="calculator-button">
          8
        </button>
        <button type="button" className="calculator-button">
          9
        </button>
        <button type="button" className="calculator-button calculator-operator">
          x
        </button>
      </div>
      <div className="calculator-row">
        <button type="button" className="calculator-button">
          4
        </button>
        <button type="button" className="calculator-button">
          5
        </button>
        <button type="button" className="calculator-button">
          6
        </button>
        <button type="button" className="calculator-button calculator-operator">
          -
        </button>
      </div>
      <div className="calculator-row">
        <button type="button" className="calculator-button">
          1
        </button>
        <button type="button" className="calculator-button">
          2
        </button>
        <button type="button" className="calculator-button">
          3
        </button>
        <button type="button" className="calculator-button calculator-operator">
          +
        </button>
      </div>
      <div className="calculator-row">
        <button type="button" className="calculator-button calculator-zero">
          0
        </button>
        <button type="button" className="calculator-button">
          .
        </button>
        <button type="button" className="calculator-button calculator-operator">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
