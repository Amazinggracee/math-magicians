/* eslint-disable quotes */
import React, { useState } from 'react';
import Buttons from './Button';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  const handleEqualsClick = () => {
    // to be implemented in the next project
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <Buttons title="AC" />
          <Buttons title="+/-" />
          <Buttons title="%" />
          <Buttons cname="btn-color" title="÷" />
        </div>
        <div className="calculator-keypad-row">
          <Buttons title="7" />
          <Buttons title="8" />
          <Buttons title="9" />
          <Buttons cname="btn-color" title="X" />
        </div>
        <div className="calculator-keypad-row">
          <Buttons title="4" />
          <Buttons title="5" />
          <Buttons title="6" />
          <Buttons cname="btn-color" title="-" />
        </div>
        <div className="calculator-keypad-row">
          <Buttons title="1" />
          <Buttons title="2" />
          <Buttons title="3" />
          <Buttons cname="btn-color" title="+" />
        </div>
        <div className="calculator-keypad-row">
          <Buttons title="0" />
          <button id="zero" type="button" onClick={handleClearClick}>
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
