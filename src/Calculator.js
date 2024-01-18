import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (input.length < 12) {
      setInput((prevInput) => prevInput + value);
  }};

  const handleSquareRoot = () => {
    try {
      const sanitizedInput = input.replace(/\^/g, '**');
      const result = Math.sqrt(eval(sanitizedInput));
      setResult(result.toString());
    } catch (error) {
      setResult('Ошибка');
    }
  };

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/\^/g, '**');
      const result = eval(sanitizedInput);
      setResult(result.toString());
    } catch (error) {
      setResult('Ошибка');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        {[7, 8, 9, '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[1, 2, 3, '+'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['^', 0, '=', '-'].map((value) => (
          <button key={value} onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}>
            {value}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={handleBackspace}>&larr;</button>
      </div>
      <div className="result">Ответ:{parseFloat(result).toFixed(2)}</div>
    </div>
  );
};

export default Calculator;