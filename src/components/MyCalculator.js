import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberClick = (value) => {
    setDisplayValue((prevValue) => (prevValue === '0' ? String(value) : prevValue + String(value)));
  };

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  const handleEqualsClick = () => {
    // to be implemented in the next project
  };

  const handleAddClick = () => {
    // to be implemented in the next project
  };

  const handleClearAllClick = () => {
    // to be implemented in the next project
  };

  const handleNegativeClick = () => {
    // to be implemented in the next project
  };

  const handleDivisionClick = () => {
    // to be implemented in the next project
  };
  const handlePercentClick = () => {
    // to be implemented in the next project
  };

  const handleMultiplyClick = () => {
    // to be implemented in the next project
  };

  const handleMinusClick = () => {
    // to be implemented in the next project
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <button type="button" onClick={handleClearAllClick}>
            AC
          </button>
          <button type="button" onClick={handleNegativeClick}>
            +/-
          </button>
          <button type="button" onClick={handlePercentClick}>
            %
          </button>
          <button
            className="btn-color"
            type="button"
            onClick={handleDivisionClick}
          >
            /
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button type="button" onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button type="button" onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button type="button" onClick={() => handleNumberClick(9)}>
            9
          </button>
          <button
            className="btn-color"
            type="button"
            onClick={handleMultiplyClick}
          >
            x
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button type="button" onClick={() => handleNumberClick(4)}>
            4
          </button>
          <button type="button" onClick={() => handleNumberClick(5)}>
            5
          </button>
          <button type="button" onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button
            className="btn-color"
            type="button"
            onClick={handleMinusClick}
          >
            -
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button type="button" onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button type="button" onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button type="button" onClick={() => handleNumberClick(3)}>
            3
          </button>
          <button className="btn-color" type="button" onClick={handleAddClick}>
            +
          </button>
        </div>
        <div className="calculator-keypad-row">
          <button type="button" onClick={() => handleNumberClick(0)}>
            0
          </button>
          <button type="button" onClick={handleClearClick}>
            C
          </button>
          <button
            className="btn-color"
            type="submit"
            onClick={handleEqualsClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
