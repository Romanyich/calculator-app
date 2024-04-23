import React, { useState } from 'react';
import NumberButton from './NumberButton';
import './calculator.css';

let i: string

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handleClick = (value: string) => {
    if (i !== '=') {
      setDisplay(display + value)
    } else {
      setDisplay('' + value)
    }
    i = 'any'
  };

  const handleReset = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    i = '='
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <br />
      {numbers.map((number) => (
        <NumberButton key={number} number={number} onClick={handleClick} />
      ))}
      <br />
      <NumberButton number="+" onClick={handleClick} className="operator"/>
      <NumberButton number="-" onClick={handleClick} className="operator"/>
      <NumberButton number="=" onClick={handleCalculate} className="operator"/>
      <NumberButton number="C" onClick={handleReset} className="operator"/>
    </div>
  );
};

export default Calculator;

