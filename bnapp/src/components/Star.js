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
    <div className="m-5">
      <div className="mb-4">
        <label className="mr-2 text-lg font-semibold">Input:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          min="1"
          className="border border-gray-300 p-2 rounded-lg"
        />
        <button
          onClick={generatePattern}
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
      <div className="font-sans">
        {pattern.map((line, index) => (
          <div key={index} className="whitespace-pre">{line}</div>
        ))}
      </div>
    </div>
  );
}

export default StarPattern;
