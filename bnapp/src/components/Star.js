import React, { useState } from 'react';

function StarPattern() {
  const [number, setNumber] = useState(0);
  const [pattern, setPattern] = useState([]);

  const generatePattern = () => {
    const num = parseInt(number); 
    let tempPattern = [];

    for (let i = 1; i <= num; i++) {
      tempPattern.push('*'.repeat(i));
    }

    for (let i = num - 1; i >= 1; i--) {
      tempPattern.push('*'.repeat(i));
    }

    setPattern(tempPattern);
  };

  return (
    <div style={{ margin: '20px' }}>
      <div>
        <label>Input : </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          min="1"
        />
        <button onClick={generatePattern}>Submit</button>
      </div>
      <div style={{ fontFamily:'Sarabun'}}>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default StarPattern;
